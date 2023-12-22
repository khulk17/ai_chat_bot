import pytesseract
import cv2
import pandas as pd;
import google.generativeai as genai
import time
import os
import easyocr
import cv2
reader=easyocr.Reader(['en'],gpu=False)
genai.configure(api_key="AIzaSyCGO2ZR3WowCipGY_6No00QisjjuDGkUjY")
file_path="C:\\Users\\HP\\Downloads\\"
file_names=["testimg.jpeg","testimg2.jpeg"]
defaults = {
  'model': 'models/text-bison-001',
  'temperature': 0.2,
  'candidate_count': 1,
  'top_k': 40,
  'top_p': 0.95,
  'max_output_tokens': 1024,
  'stop_sequences': [],
  'safety_settings': [{"category":"HARM_CATEGORY_DEROGATORY","threshold":"BLOCK_LOW_AND_ABOVE"},{"category":"HARM_CATEGORY_TOXICITY","threshold":"BLOCK_LOW_AND_ABOVE"},{"category":"HARM_CATEGORY_VIOLENCE","threshold":"BLOCK_MEDIUM_AND_ABOVE"},{"category":"HARM_CATEGORY_SEXUAL","threshold":"BLOCK_MEDIUM_AND_ABOVE"},{"category":"HARM_CATEGORY_MEDICAL","threshold":"BLOCK_MEDIUM_AND_ABOVE"},{"category":"HARM_CATEGORY_DANGEROUS","threshold":"BLOCK_MEDIUM_AND_ABOVE"}],
}
data_map=[]
file_names1=os.listdir("C:\\Users\\HP\\Desktop\\visiting cards")
for filename in file_names1:
    #img = cv2.imread("C:\\Users\\HP\\Desktop\\visiting cards\\"+filename)
    # img = cv2.resize(img, (, 360))
    #values=pytesseract.image_to_string(img)
    result=reader.readtext("C:\\Users\\HP\\Desktop\\visiting cards\\"+filename)
    values =[v[1] for v in result]
    time.sleep(1)
    prompt = f"""read the given data extracted from a visting card and separate the  company name , 
    mobile number, email if email not found provide as N\\A and city,  &quot; {values}"""
    response = genai.generate_text(
    **defaults,
    prompt=prompt)
    time.sleep(1)
    #print(response.result)
    if response.result!=None:
        data1=response.result.split("\n")
        data_list_coma=""
        time.sleep(1)
        for i in data1:
            if len(i)<2:
                continue
            elif "Company" in i:
                k=i.split(":")
                data_list_coma+=k[1]+"$"
            elif  "number"  in i or "Mobile" in i:
                k=i.split(":")
                data_list_coma+=k[1]+"$"
            elif i[0:4]=="City":
                data_list_coma+=i[5:]+"$"    
            elif "Email"  in i:
                data_list_coma+=i[6:]+"$"
            else:
                data_list_coma+=" $"
    print(data_list_coma)
    data_map.append(data_list_coma)
sorted_data=pd.DataFrame()
sorted_data["Company$number$Email$City"]=data_map
sorted_data.to_excel("C:\\Users\\HP\\Desktop\\visiting cards\\Sorted2.xlsx",index=False)

    