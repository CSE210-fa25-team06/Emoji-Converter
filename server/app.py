from flask import Flask, request

app = Flask('__name__')

@app.post('/convertToText')
def convertToText():
    return


@app.post('/convertToEmojis')
def convertToEmojis():
    return