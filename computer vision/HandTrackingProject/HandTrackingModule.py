import cv2
import mediapipe as mp
import time


class handDetector():
    def __init__(self,mode=False,maxHands=2,detectionCon=0.5,trackCon=0.5):
        self.mode=mode
        self.maxHands=maxHands
        self.detectionCon=detectionCon
        self.trackCon=trackCon
        self.mpHands=mp.solutions.hands
        self.hands=self.mpHands.Hands()
        self.mpDraw=mp.solutions.drawing_utils

    def findHands(self ,img,draw=True):
        imgRGB=cv2.cvtColor(img,cv2.COLOR_BGR2RGB)
        result=self.hands.process(imgRGB)
        #print(result.multi_hand_landmarks)    
        if result.multi_hand_landmarks:
            for handLms in result.multi_hand_landmarks:
                # drawing the hands
                if draw:
                    self.mpDraw.draw_landmarks(img,handLms,self.mpHands.HAND_CONNECTIONS)
        return img
                # for id,lm in enumerate(handLms.landmark):
                #     h,w,c=img.shape
                #     cx,cy=int(lm.x*w),int(lm.y*h)
                #     if id==4:
                #         cv2.circle(img,(cx,cy),15,(255,0,255),cv2.FILLED)
    def findPositions(self,img,handNo=0,draw=True):
        pass
def main():
    pTime=0
    CTime=0
    cap=cv2.VideoCapture(0)
    detector=handDetector()
    while True:
        success,img=cap.read()
        imgRGB=cv2.cvtColor(img,cv2.COLOR_BGR2RGB)
        img=detector.findHands(img)


        CTime=time.time()
        fps=1/(CTime-pTime)
        pTime=CTime
        cv2.putText(img,str(int(fps)),(10,70),cv2.FONT_HERSHEY_COMPLEX,3,(255,0,255),3)
        cv2.imshow("Image",img)
        cv2.waitKey(1)

if __name__=="__main__":
    main()