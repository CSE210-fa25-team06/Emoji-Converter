import os, json, re

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
json_path = os.path.join(BASE_DIR, 'annotations.json')

# Opens the json file and reads the data
with open(json_path, 'r', encoding = 'utf-8') as f:
    data = json.load(f)

emoji_map = data['annotations']['annotations']

phrase_to_emoji_map = {}
for emoji in emoji_map:
    for emoji_phrase in emoji_map[emoji]['tts']:
        phrase_to_emoji_map[emoji_phrase] = emoji

# needed for regex sos scanner pattern
phrases = sorted(phrase_to_emoji_map.keys(), key=len, reverse=True)
escaped_phrases = [re.escape(p) for p in phrases]
pattern = re.compile(r'^(' + '|'.join(escaped_phrases) + r')')

# Common symbols, if you want to hardcode, we could add more
symbol_map = {
    "❗": "!",
    "❓": "?",
    "!" : "!",
    "?" : "?"
}