from flask import Flask 


app = Flask(__name__)

@app.route('/open-webcam')
def open_webcam():
    import webcam
    return "<h1>Opening Webcam</h1>"


@app.route('/take-sample/<userId>')
def take_sample(userId):
    print(userId)
    import collect_sample
    return "<h1>Sample taken successfully</h1>"

@app.route('/train-model')
def train_model():
    import classifier
    return "<h1>Sample trained successfully</h1>"

if __name__ == "__main__":
    app.run(debug=True)
