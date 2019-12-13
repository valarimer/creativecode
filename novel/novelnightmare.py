!pip install markovify
!pip install dominate
from dominate.tags import *
import dominate
!pip install weasyprint

from google.colab import files
import markovify
import random
from weasyprint import HTML
novel = ''

uploaded = files.upload()
for fn in uploaded.keys():
  textA = uploaded[fn].decode()

uploaded = files.upload()
for fn in uploaded.keys():
  textB = uploaded[fn].decode()

uploaded = files.upload()
for fn in uploaded.keys():
  textC = uploaded[fn].decode()

uploaded = files.upload()
for fn in uploaded.keys():
  textD = uploaded[fn].decode()

uploaded = files.upload()
for fn in uploaded.keys():
  textE = uploaded[fn].decode()

uploaded = files.upload()
for fn in uploaded.keys():
  textF = uploaded[fn].decode()

uploaded = files.upload()
for fn in uploaded.keys():
  textG = uploaded[fn].decode()



  
text_modelA = markovify.Text(textA)
text_modelB = markovify.Text(textB)
text_modelC = markovify.Text(textC)
text_modelD = markovify.Text(textD)
text_modelE = markovify.Text(textE)
text_modelF = markovify.Text(textF)
text_modelG = markovify.Text(textG)

model_combo = markovify.combine([ text_modelA, text_modelB, text_modelC, text_modelD, text_modelE, text_modelF, text_modelG ], [ 1, 1, 1, 1, 1, 1, 1 ])

def make_Para():
  paragraph = ''
  for i in range(random.randint(5,20)):
    paragraph += model_combo.make_sentence()
  return paragraph
 
doc = dominate.document(title='Novel Nightmares')

with doc:
  with doc.head:
    style("body {font-family: copperplate; color: red}")
    h1("Novel Nightmares")
  for ch in range(50): 
    h2("Chapter "+ str(int(ch + 1)))
    for para in range(random.randint(10,40)):
      p(make_Para())
  
  with open("nightmare.html", "a") as f:
      f.write(str(doc))



HTML(string=str(doc)).write_pdf("novelnightmare.pdf")
