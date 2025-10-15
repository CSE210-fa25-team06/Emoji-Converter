/**
 * @fileoverview Module providing real API functions for translation.
 * This module is updated to make an asynchronous HTTP call to the Flask server.
 *
 * @module backend-api-test-client
 */

// Use node-fetch for making HTTP requests (install with npm install node-fetch)
const fetch = require('node-fetch').default;

// The base URL for the Flask application
const API_URL = "http://127.0.0.1:5000";

/**
 * A generic asynchronous function to handle API calls to the translation endpoints.
 *
 * @param {string} endpoint - The specific API path (e.g., '/convertToText', '/convertToEmojis').
 * @param {string} inputKey - The JSON key for the input data ('text' or 'phrase').
 * @param {string} outputKey - The JSON key for the expected output ('converted_text' or 'converted_emojis').
 * @param {string} inputValue - The value to be sent in the request body.
 * @returns {Promise<string|null>} The converted string from the API response, or null on error.
 */
async function translateApiCall(endpoint, inputKey, outputKey, inputValue) {
	const bodyPayload = {};
	bodyPayload[inputKey] = inputValue;

	try {
		const response = await fetch(`${API_URL}${endpoint}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(bodyPayload)
		});

		if (response.status !== 200) {
			// Throw a detailed error including the status code
			throw new Error(`API returned status code ${response.status}`);
		}

		const data = await response.json();
		
		// Return the value from the specified output key
		return data[outputKey]; 

	} catch (error) {
		console.error(`\nAPI Call Failed for input '${inputValue}' at endpoint ${endpoint}: ${error.message}`);
		return null; 
	}
}

/**
 * Sends a POST request to the /convertToText API.
 * * @param {string} emoji - The emoji character to be sent for translation.
 * @returns {Promise<string|null>} The converted text string.
 */
async function translateEmoji(emoji) {
    // Calls the generic function with specific parameters for emoji-to-text conversion
    // Endpoint: /convertToText
    // Input Key: 'text'
    // Output Key: 'converted_text'
	return translateApiCall('/convertToText', 'text', 'converted_text', emoji);
}

/**
 * Sends a POST request to the /convertToEmojis API.
 *
 * @param {string} text - The text description (phrase) to be sent for translation.
 * @returns {Promise<string|null>} The converted emoji string.
 */
async function translateText(text) {
    // Calls the generic function with specific parameters for text-to-emoji conversion
    // Endpoint: /convertToEmojis
    // Input Key: 'phrase'
    // Output Key: 'converted_emojis'
	return translateApiCall('/convertToEmojis', 'phrase', 'converted_emojis', text);
}

/**
 * @exports translateEmoji
 * @exports translateText
 */
module.exports = {
	translateEmoji,
	translateText,
};