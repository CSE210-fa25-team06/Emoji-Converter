from dotenv import load_dotenv
from openai import OpenAI
import os

load_dotenv()

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def llm_translate_to_emoji(phrase: str):
    """Use LLM to convert English phrases to emojis naturally."""
    try:
        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {"role": "system", "content": "You are an assistant that replaces words with emojis when appropriate, keeping the sentence readable."},
                {"role": "user", "content": f"Convert this phrase into emojis (keep it human-readable):\n{phrase}"}
            ],
            temperature=0.7,
            max_tokens=200
        )
        return response.choices[0].message.content.strip()
    except Exception as e:
        print(f"LLM emoji translation failed: {e}")
        return None