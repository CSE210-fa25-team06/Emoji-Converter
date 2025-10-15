def phrase_to_emoji_scanner(text, pattern, phrase_to_emoji_map):   
    if not text or not isinstance(text, str):
        return ""
    result = []
    i = 0
    while i < len(text):
        match = pattern.match(text[i:])
        if match:
            phrase = match.group(1)
            result.append(phrase_to_emoji_map[phrase])
            i += len(phrase)
        else:
            i += 1
    return ''.join(result)