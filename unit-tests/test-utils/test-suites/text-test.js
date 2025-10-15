/**
 * @fileoverview Test suite for the `translateText` function.
 * This script uses the same emoji dataset to verify that the `translateText` function
 * correctly maps a text description back to its corresponding single emoji.
 *
 * @module text-test
 * @requires ../../backend-api-test-client/backend-api-test-client.js - Contains the translateText function.
 * @requires ../test-utils.js - Contains the assertion and test running utilities.
 * @requires ../../json-parsing/parse-json.js - Utility to read and parse JSON files.
 */

// Import translation functions
const {
	translateText,
} = require("../../backend-api-test-client/backend-api-test-client.js");

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
	console.error("\nCould not process the JSON file. Skipping text tests.");
}

/**
 * Defines a test suite to verify single text-to-emoji translations.
 * It iterates through the loaded emoji dataset and asserts the actual emoji output
 * against the expected emoji for each text input.
 *
 * @type {Object}
 * @property {string} name - The descriptive name of the test suite.
 * @property {function} run - The function that executes all the tests within this suite.
 */
const TextTranslationTestSuite = {
	name: "Text to single emoji translations",
	run: async () => {
		if (!emojis) {
			// The error is already logged above, just prevent the loop from running.
			return;
		}

		// Using a standard for loop for iteration
		for (i = 0; i < emojis.length; i++) {
			const input = emojis[i].translation;
			const actual = await translateText(input);
			const expected = emojis[i].emoji;
			const errorMessage = `Text '${input}' translation doesn't match expected value`;

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
	(async () => {
		await runTests(TextTranslationTestSuite);
		summarize();
	})();
}

/**
 * @exports TextTranslationTestSuite
 */
module.exports = TextTranslationTestSuite;
