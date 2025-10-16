from flask import Flask, request, jsonify
from to_emoji import phrase_to_emoji_scanner
from to_text import emoji_to_text
from initialize import symbol_map, emoji_map, phrase_to_emoji_map, pattern
from llm_to_text import llm_translate_to_text
from llm_to_emoji import llm_translate_to_emoji

app = Flask(__name__)


@app.post('/convertToText')
def convertToText():
    body = request.get_json()
    text = body.get("text", "")
    if text == None:
        return {"error": 'phrase field not included in body'}, 400
    translation = llm_translate_to_text(text)
    if not translation:  # fallback if LLM fails
        translation = emoji_to_text(text, symbol_map, emoji_map)

    return jsonify({"converted_text": "".join(translation)})


@app.post('/convertToEmojis')
def convertToEmojis():
    body = request.get_json()
    phrase = body.get("phrase")
    if phrase == None:
        return {"error": 'phrase field not included in body'}, 400
    translation = llm_translate_to_emoji(phrase)
    if not translation:  # fall back if LLM fails
        translation = phrase_to_emoji_scanner(phrase, pattern, phrase_to_emoji_map)
    return jsonify({"converted_emojis": translation})


if __name__ == "__main__":
    app.run(debug=True)