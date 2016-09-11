from flask import Flask, Blueprint, render_template

# clean this up later
chris_profile = Blueprint('chris_profile', __name__,
            template_folder='templates', 
            static_folder='static', static_url_path = '/chris_profile/static')

app = Flask(__name__)


@chris_profile.route('/chris/')
def homepage():
    return render_template('./chris.html')

app.register_blueprint(chris_profile)

if __name__ == '__main__':
    app.run(host='0.0.0.0',debug=False)