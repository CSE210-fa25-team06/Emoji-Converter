/**
 * @fileoverview Main test runner script.
 * This script imports all individual test suites, executes them in sequence,
 * and then calls the utility function to print a final summary of all test results.
 *
 * @module run-all-tests
 * @requires ../test-utils.js - Provides the runTests and summarize functions.
 * @requires ./emoji-test.js - The test suite for emoji-to-text translation.
 * @requires ./text-test.js - The test suite for text-to-emoji translation.
 */

// Import testing utilities
const { runTests, summarize } = require("./../test-utils.js");

// Import individual test suites
const emojiTests = require("./emoji-test.js");
const textTests = require("./text-test.js");

/**
 * Array containing all imported test suite modules.
 * @type {Array<Object>}
 */
const allSuites = [emojiTests, textTests];

/**
 * Executes all test suites in the `allSuites` array and then prints a final summary.
 * This is the primary orchestration function for the testing process.
 */
function executeAll() {
	console.log("Starting automated testing process...");

	// Iterate through and execute each test suite
	for (const suite of allSuites) {
		runTests(suite);
	}

	// Print the final summary of all passed and failed tests
	summarize();
}

// Immediately execute the main function when the script is run
executeAll();
