def emoji_to_text(text, symbol_map, emoji_map):
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
    return " ".join(converted)