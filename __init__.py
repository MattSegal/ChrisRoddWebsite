from flask import Flask, Blueprint, render_template

chris_profile = Blueprint('chris_profile', __name__,
            template_folder='templates', 
            static_folder='static', static_url_path = '/chris_profile/static')

@chris_profile.route('/chris/')
def homepage():
    return render_template('./chris.html')

if __name__ == "__main__":
    app = Flask(__name__)
    app.register_blueprint(chris_profile)
    app.run(host= '0.0.0.0',debug=True)
