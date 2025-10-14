/**
 * @fileoverview Utility functions for reading and parsing JSON files.
 * @module parse-json
 */

const fs = require("node:fs");
const path = require("node:path");

/**
 * Reads a file from the current directory, parses its content as JSON,
 * and returns the resulting JavaScript object.
 *
 * @param {string} filename - The name of the JSON file to read.
 * It should be located in the same directory
 * as this script or in a path relative to it.
 * @returns {object|null} The parsed JavaScript object, or {@code null} if an error occurred
 * during file reading or JSON parsing.
 */
function parseJsonFile(filename) {
	// Construct the full file path. path.join is used for cross-platform compatibility.
	const filePath = path.join(__dirname, filename);
	let jsonString;

	try {
		// Read the file synchronously. Using 'utf8' ensures the content is returned as a string.
		jsonString = fs.readFileSync(filePath, "utf8");
	} catch (readError) {
		// Log an error if the file cannot be read (e.g., file not found, permission issue).
		console.error(`Error reading file "${filename}": ${readError.message}`);
		return null;
	}

	try {
		// Parse the JSON string into a JavaScript object.
		const dataObject = JSON.parse(jsonString);
		return dataObject;
	} catch (parseError) {
		// Log an error if the file content is not valid JSON.
		console.error(`Error parsing JSON in "${filename}": ${parseError.message}`);
		return null;
	}
}

/**
 * @exports parseJsonFile
 */
module.exports = {
	parseJsonFile,
};
