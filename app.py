from flask import Flask,render_template
from flask_cors import CORS
import requests

app=Flask(__name__)
CORS(app)

@app.route("/")
def index():
    return render_template("index.html")

@app.route('/api/headlines')
def headlines():
    URL = "https://newsapi.org/v2/top-headlines?country=in&apiKey=471a578390434f8cada92ab15e4e8812"
    r = requests.get(url = URL)
    data=r.json()
    return data



@app.route('/api/sports')
def sports():
    URL = "http://newsapi.org/v2/top-headlines?country=in&category=sport&apiKey=471a578390434f8cada92ab15e4e8812"
    r = requests.get(url = URL)
    data=r.json()
    return data

@app.route('/api/tech')
def tech():
    URL = "http://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=471a578390434f8cada92ab15e4e8812"
    r = requests.get(url = URL)
    data=r.json()
    return data

@app.route('/api/enter')
def enter():
    URL = "http://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=471a578390434f8cada92ab15e4e8812"
    r = requests.get(url = URL)
    data=r.json()
    return data




if __name__ == "__main__":
    app.run()