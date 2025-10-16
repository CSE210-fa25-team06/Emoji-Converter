/**
 * @fileoverview Main test runner script.
 * This script imports all individual test suites, executes them in sequence,
 * and then calls the utility function to print a final summary of all test results.
 *
 * @module run-all-tests
 * @requires ../test-utils.js - Provides the runTests and summarize functions.
 * @requires ./emoji-test.js - The test suite for emoji-to-text translation.
 * @requires ./text-test.js - The test suite for text-to-emoji translation.
 * @requires ./mixed-content-test.js - The test suite for mixed emoji and text content.
 * @requires ./text-to-emoji-test.js - The test suite for text-to-emoji conversion.
 * @requires ./multi-emoji-test.js - The test suite for multi-emoji and complex emoji sequences.
 * @requires ./edge-cases-test.js - The test suite for true edge cases and boundary conditions.
 */

// Import testing utilities
const { runTests, summarize } = require("./../test-utils.js");

// Import individual test suites
const emojiTests = require("./emoji-test.js");
const textTests = require("./text-test.js");
const mixedContentTests = require("./mixed-content-to-text-test.js");
const textToEmojiTests = require("./text-to-mixed-content-test.js");
const multiEmojiTests = require("./multi-emoji-test.js");

const edgeCasesTests = require("./edge-cases-test.js");

/**
 * Array containing all imported test suite modules.
 * @type {Array<Object>}
 */
const allSuites = [
	emojiTests, 
	textTests,
	mixedContentTests, 
	textToEmojiTests, 
	multiEmojiTests,
	edgeCasesTests
];

/**
 * Executes all test suites in the `allSuites` array and then prints a final summary.
 * This is the primary orchestration function for the testing process.
 */
async function executeAll() {
	console.log("Starting automated testing process...");

	// Iterate through and execute each test suite
	for (const suite of allSuites) {
		await runTests(suite);
	}

	// Print the final summary of all passed and failed tests
	summarize();
}

// Immediately execute the main function when the script is run
executeAll();
