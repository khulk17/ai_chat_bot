from selenium import webdriver
from selenium.webdriver.common.by import By
import time

driver = webdriver.Chrome()

try:
    driver.get("https://passwords.google.com/")
    
    signIn= driver.find_element(By.XPATH, "/html/body/div[3]/header/div[2]/div[3]/div[1]/a")
    signIn.click()
    time.sleep(2)
    textarea=driver.find_element(By.XPATH,"/html/body/div[1]/div[1]/div[2]/div/c-wiz/div/div[2]/div/div[1]/div/form/span/section/div/div/div[1]/div/div[1]/div/div[1]/input")
    textarea.send_keys("keerthikiran.m17@gmail.com")
    next=driver.find_element(By.XPATH,"/html/body/div[1]/div[1]/div[2]/div/c-wiz/div/div[2]/div/div[2]/div/div[1]/div/div/button/span")
    next.click()
    # textarea.send_keys("santosh.jain@westendmallpune.com")
    # verify = driver.find_element(By.ID,"btn1")
    # driver.execute_script("arguments[0].scrollIntoView(true);", verify)
    # time.sleep(3)
    # verify.click()
    time.sleep(100)
    # Wait for 3 seconds
    
finally:
    # Close the browser window
    driver.quit()
