from flask import Flask, render_template

def create_app():
    app = Flask(__name__)

    @app.route('/')
    def homepage():
        return render_template('./chris.html')
 
    return app