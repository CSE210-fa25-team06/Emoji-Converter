/**
 * @fileoverview Test suite for the `translateEmoji` function.
 * This script reads a dataset of emojis and their expected translations from a JSON file
 * and verifies that the `translateEmoji` function produces the correct output for each emoji.
 *
 * @module emoji-test
 * @requires ../../dummy-translator/dummy-translator.js - Contains the translateEmoji function.
 * @requires ../test-utils.js - Contains the assertion and test running utilities.
 * @requires ../../json-parsing/parse-json.js - Utility to read and parse JSON files.
 */

// Import dummy translation functions
const {
	translateEmoji,
} = require("./../../dummy-translator/dummy-translator.js");

// Import testing utilities
const { assert, runTests, summarize } = require("./../test-utils.js");

// Import utility for parsing JSON
const { parseJsonFile } = require("./../../json-parsing/parse-json.js");

/**
 * Loads the emoji dataset from a JSON file.
 * The file is expected to be an array of objects, each containing 'emoji' and 'translation' fields.
 * @type {Array<Object>|null}
 */
const emojis = parseJsonFile("./../emoji-dataset/emoji_tts.json");

if (!emojis) {
	console.error("\nCould not process the JSON file. Skipping emoji tests.");
}

/**
 * Defines a test suite to verify single emoji translations.
 * It iterates through the loaded emoji dataset and asserts the actual translation
 * against the expected translation for each entry.
 *
 * @type {Object}
 * @property {string} name - The descriptive name of the test suite.
 * @property {function} run - The function that executes all the tests within this suite.
 */
const EmojiTranslationTestSuite = {
	name: "Single emoji to text translations",
	run: () => {
		if (!emojis) {
			// The error is already logged above, just prevent the loop from running.
			return;
		}

		// Using a standard for loop for iteration
		for (i = 0; i < emojis.length; i++) {
			const input = emojis[i].emoji;
			const actual = translateEmoji(input);
			const expected = emojis[i].translation;
			const errorMessage = `Emoji '${input}' translation doesn't match expected value`;

			// The assert function compares actual and expected, and logs the result.
			assert(actual, expected, errorMessage);
		}
	},
};

/**
 * Check if the script is being run directly (not imported by run-all-tests.js).
 * If so, execute the test suite and print the summary.
 */
if (require.main === module) {
	runTests(EmojiTranslationTestSuite);
	summarize();
}

/**
 * @exports EmojiTranslationTestSuite
 */
module.exports = EmojiTranslationTestSuite;
