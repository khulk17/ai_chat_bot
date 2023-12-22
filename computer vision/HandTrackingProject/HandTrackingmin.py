import cv2
import mediapipe as mp
import time


cap=cv2.VideoCapture(0)
mpHands=mp.solutions.hands
hands=mpHands.Hands()
mpDraw=mp.solutions.drawing_utils
pTime=0
CTime=0
while True:
    success,img=cap.read()
    imgRGB=cv2.cvtColor(img,cv2.COLOR_BGR2RGB)
    result=hands.process(imgRGB)
    #print(result.multi_hand_landmarks)    
    if result.multi_hand_landmarks:
        for handLms in result.multi_hand_landmarks:
            for id,lm in enumerate(handLms.landmark):
                h,w,c=img.shape
                cx,cy=int(lm.x*w),int(lm.y*h)
                if id==4:
                    cv2.circle(img,(cx,cy),15,(255,0,255),cv2.FILLED)
            mpDraw.draw_landmarks(img,handLms,mpHands.HAND_CONNECTIONS)
    CTime=time.time()
    fps=1/(CTime-pTime)
    pTime=CTime

    cv2.putText(img,str(int(fps)),(10,70),cv2.FONT_HERSHEY_COMPLEX,3,(255,0,255),3)
    cv2.imshow("Image",img)
    cv2.waitKey(1)