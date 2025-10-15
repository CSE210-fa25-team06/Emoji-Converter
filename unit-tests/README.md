# Test Suite for Emoji to Text Translator
This repository contains the automated test suite for the emoji to text translator. The tests use the **`emoji-dataset/emoji_tts.json`** dataset for translating emojis to text and vice versa.

### Project Core & Utilities

| Filename | Description |
| :--- | :--- |
| **`package.json`** | Project file that specifies the testing commands. |
| **`emoji-dataset/update_emojis.sh`** | A shell script to update **`emoji_tts.json`**. |
| **`json-parsing/parse-json.js`** | A script for parsing JSON files. |
| **`dummy-translator/dummy-translator.js`** | Placeholder functions for **emoji to text** and **text to emoji** translations. This should only be used for testing the test suite. |

### Test Components

| Filename | Description |
| :--- | :--- |
| **`test-utils/test-utils.js`** | Contains basic testing utilities for **`assert`**, **`runTests`**, and **`summarize`** for printing final results. |
| **`test-utils/test-suites/run-all-tests.js`** | The main executable script that imports and runs all individual test suites. |
| **`test-utils/test-suites/emoji-test.js`** | Test suite for the **emoji to text** translation function. |
| **`test-utils/test-suites/text-test.js`** | Test suite for the **text to emoji** translation function. |
| **`test-utils/test-suites/multi-emoji-test.js`** | Test suite for multi-emoji translation. |
| **`test-utils/test-suites/mixed-content-to-text-test.js`** | Test suite for translating mixed content (containing both emoji and text) to text |
| **`test-utils/test-suites/text-to-mixed-content-test.js`** | Test suite for translating text to mixed content |
| **`test-utils/test-suites/edge-cases-test.js`** | Test suite for edge cases including null value, empty string, and invalid emoji inputs|
| **`test-utils/emoji-dataset/emoji_tts.json`** | The emoji to text dataset. |

## Running the Test Suite

To execute the tests, you will need **Node.js** installed on your system. To update the dataset, you will also need the command-line utilities **`curl`**, **`jq`**, and **`csvjson`**.

### 1. Dependencies

Download the following tools to run the **`update_emojis.sh`** script:

* **`curl`**: For downloading the source data.
* **`jq`**: For processing and filtering JSON data.
* **`csvjson`**: For converting the data into the final JSON format.
* **`node-fetch`**: For making HTTP requests.

### 2. Update the emoji dataset

You can download the latest emoji translation data and generate the **`emoji_tts.json`** file by running the **`emoji-dataset/update_emojis`** script from the **`unit-tests`** directory:

```
sh emoji-dataset/update_emojis.sh
```
### 3. Running the test suites

Run these commands from the **`unit-tests`** directory to run the test suites.

The flask server must be running for the following commands to work. Check the README.md file in the /server folder of the root directory for more information. 

```
npm run run-all-tests	Runs all test suites.
npm run run-emoji-tests	Runs the test suite that attempts to translate a single emoji into text.
npm run run-text-tests	Runs the test suite that attempts to translate any text that could be an emoji into an emoji.

npm run run-edge-case-tests	Runs a test suite consisting of strange inputs.
npm run run-mixed-content-to-text-tests	Runs the test suite that attempts to translate mixed content (i.e., text and emojis) into all text.
npm run run-text-to-mixed-content-tests Runs the test suite that attempts to translate any text that appears in mixed content (i.e., text and emojis) that could be an emoji into an emoji.

npm run run-multi-emoji-tests Runs the test suite that attempts to translate multiple emojis into text.
```

By default, tests cases that pass are not printed to the console. Append -verbose to the end of each command to print passed tests (e.g., ```npm run run-all-tests-verbose```).