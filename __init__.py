from flask import Flask, render_template

app = Flask(__name__)

@app.route('/chris/')
def homepage():
    return render_template('./chris.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0',debug=False)