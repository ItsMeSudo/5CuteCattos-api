from flask import Flask
from flask import Response
import random
app = Flask(__name__)

cattoslist = ["https://i.imgur.com/BEjAPLj.jpeg", "https://i.imgur.com/pLXZxab.jpeg", "https://i.imgur.com/5XIjVFj.jpeg", "https://i.imgur.com/J0UJ635.jpeg", "https://i.imgur.com/2nYZYRj.jpeg"]

@app.route('/')
def cattos():
   number = random.randrange(1,5)
   respjson = '{"catto":"'+cattoslist[number]+'"}'
   return Response(respjson, mimetype='application/json')

if __name__ == '__main__':
    app.run(host="0.0.0.0")