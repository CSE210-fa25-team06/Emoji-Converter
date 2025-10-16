# Define CSV and JSON file names
CSV_FILE="emoji_tts.csv"
JSON_FILE="emoji_tts.json"

# Download the emoji dataset
curl "https://raw.githubusercontent.com/unicode-org/cldr-json/refs/heads/main/cldr-json/cldr-annotations-full/annotations/en/annotations.json" -o "annotations.json"

# Print the header row, overwriting the file if it exists
echo '"emoji","translation"' > "$CSV_FILE"

# Append the data to the file
jq -r '
    .annotations.annotations
    | to_entries[]
    | select(.value.tts != null)
    | [.key, .value.tts[0]]
    | @csv
' annotations.json >> "$CSV_FILE"

# Convert the CSV file to JSON
csvjson -i 2 "$CSV_FILE" > "$JSON_FILE"

# Clean up the temporary CSV and JSON files
rm "$CSV_FILE"
rm "annotations.json"