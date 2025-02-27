import requests
from bs4 import BeautifulSoup

url = 'https://github.com/Smartproxy/Smartproxy'
page = requests.get(url)
soup = BeautifulSoup(page.text, 'html.parser')

print(soup.contents)