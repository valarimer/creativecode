!pip install markovify
!pip install weasyprint

from google.colab import files
import markovify
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

for i in range(3000):
    novel += str(model_combo.make_sentence()) + "<br>\n"

html_template = f"""
<html>
  <head>
  <title>Harry Potter and the Markov Chain</title>
  <style>
    body {{
      font-family: "";
    }}
  </style>
  </head>
  <body>
  {novel}
  </body>
</html>
"""

HTML(string=html_template).write_pdf("HPMC.pdf")
