from PIL import Image,ImageEnhance,ImageFilter
import os

path = "C:\\Users\\HP\\Desktop\\vs code\\python Automation\\imgs"
pathOut = "C:\\Users\\HP\\Desktop\\vs code\\python Automation\\edited"

for file in os.listdir(path):
    img=Image.open(f"{path}\\{file}")
    edit=img.filter(ImageFilter.SHARPEN)

    clean_name=os.path.splitext(file)[0]
    edit.save(f'{pathOut}\\{clean_name}_edited.jpg')

