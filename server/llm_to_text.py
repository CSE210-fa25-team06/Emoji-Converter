from dotenv import load_dotenv
from openai import OpenAI
import os

load_dotenv()

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def llm_translate_to_text(text: str):
    """Use LLM to translate emojis into natural English text."""
    try:
        response = client.chat.completions.create(
            model="gpt-4o-mini",  # cheaper + fast model
            messages=[
                {"role": "system", "content": "You are an assistant that converts emoji messages into natural, friendly English text."},
                {"role": "user", "content": f"Convert the following emojis into a coherent English sentence:\n{text}"}
            ],
            temperature=0.7,
            max_tokens=200
        )
        return response.choices[0].message.content.strip()
    except Exception as e:
        print(f"LLM translation failed: {e}")
        return None