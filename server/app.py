from flask import Flask, request, jsonify
import os, json

app = Flask(__name__)

# Sets up the base directory and the json directory
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
json_path = os.path.join(BASE_DIR, 'annotations.json')

# Opens the json file and reads the data
with open(json_path, 'r', encoding = 'utf-8') as f:
    data = json.load(f)
    
emoji_map = data['annotations']['annotations']
phrase_to_emoji_map = {}
for emoji in emoji_map:
    phrase_to_emoji_map[emoji_map[emoji]['tts'][0]] = emoji

# Common symbols, if you want to hardcode, we could add more
symbol_map = {
    "❗": "!",
    "❓": "?",
    "!" : "!",
    "?" : "?"
}

@app.post('/convertToText')
def convertToText():
    """Takes in user input of emoji characters, parses them through unicode values, and returns text translation"""
    body = request.get_json()
    text = body.get("text", "")

    converted = []
    for char in text:
        # Skip invisible emoji variation selectors
        if char == '\ufe0f':
            continue
        # If the emoji is a common character, e.g "!" or "?" then replace it with the symbol
        if char in symbol_map:
            converted.append(symbol_map[char])
        # Look at tts value conversion and translate
        elif char in emoji_map:
            desc = emoji_map[char]["tts"][0]
            converted.append(f"{desc}")
        # if character doesn't appear then skip
        else:
            converted.append(char)
    
    # Join into a string and return
    cleaned = "".join(converted)
    return jsonify({"converted_text": "".join(cleaned)})


@app.post('/convertToEmojis')
def convertToEmojis():
    return

if __name__ == "__main__":
    app.run(debug=True)