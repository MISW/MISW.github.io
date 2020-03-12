from flask import Flask
app = Flask(__name__)

count = 0
@app.route('/')
def index_page():
    global count
    count += 1
    return f"Index Page<br>あなたは{count}番目の訪問者です。"

@app.route('/foo')
def foo_page():
    return "Foo Page"

app.run('0.0.0.0', 3000, False)
