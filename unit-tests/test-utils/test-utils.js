/**
 * @fileoverview Utility functions for creating and running simple assertion-based tests.
 * This module provides functions to assert equality, run a test suite, and summarize the
 * overall test results.
 *
 * @module test-utils
 */

/**
 * Global object to track the number of passed and failed tests across all suites.
 * @type {Object}
 * @property {number} passed - Counter for successful assertions.
 * @property {number} failed - Counter for failed assertions.
 */
const results = { passed: 0, failed: 0 };

// Only print passed test cases when the VERBOSE environment variable is set to 'true'
const isVerbose = process.env.VERBOSE === 'true' || process.env.VERBOSE === '1';

/**
 * Asserts that the `actual` value strictly equals the `expected` value.
 * Logs a PASS message if true, or a detailed FAILED message if false.
 * Increments the global `results` counters.
 *
 *
 * @param {*} actual - The actual value produced by the code under test.
 * @param {*} expected - The value that was expected.
 * @param {string} message - A descriptive message for the test.
 */
function assert(actual, expected, message) {
	if (actual === expected) {
		if (isVerbose) {
			console.log(`PASS: ${actual}`);
		}
		results.passed++;
	} else {
		console.error(`FAILED TEST: ${message}`);
		console.error(`Expected: ${expected}`);
		console.error(`Actual: ${actual}\n`);
		results.failed++;
	}
}

/**
 * Executes a single test suite.
 * A test suite is an object with a `name` property (string) and a `run` property (function).
 *
 * @param {Object} testSuite - The test suite object to execute.
 * @param {string} testSuite.name - The name of the test suite.
 * @param {function} testSuite.run - The function containing the assertions for the suite.
 */
async function runTests(testSuite) {
	console.log(`\n--- Starting suite: ${testSuite.name} ---`);
	await testSuite.run();
	console.log(`--- Finished suite: ${testSuite.name} ---\n`);
}
/**
 * Logs a summary of all executed tests (passed and failed).
 * If any tests failed, the process is terminated (exited).
 */
function summarize() {
	var numTests = results.passed + results.failed;
	console.log(`TEST SUMMARY:`);
	console.log("\n=================================");
	console.log(`Passed: ${results.passed}/${numTests}`);
	if (results.passed == numTests) {
		console.log(`All test cases passed.`);
	} else {
		console.log(`Failed: ${results.failed}/${numTests}`);
	console.log("\n=================================");
	}

	if (results.failed > 0) {
		// Exit the process with a non-zero code to signal test failure
		process.exit(1);
	} else {
		console.log(`All ${numTests} tests passed successfully!`);
	}
}

/**
 * @exports assert
 * @exports runTests
 * @exports summarize
 */
module.exports = {
	assert,
	runTests,
	summarize,
};