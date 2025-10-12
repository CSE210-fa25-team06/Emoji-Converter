/**
 * @fileoverview A dummy module providing placeholder functions for
 * emoji-to-text and text-to-emoji translation.
 *
 * NOTE: This module is intended solely for integration testing of the
 * main test runner (`run-all-tests.js`) and test utilities (`test-utils.js`).
 * The functions contain static return values and do not represent the
 * actual translation logic that will be implemented later.
 *
 * @module dummy-translator
 */

/**
 * A dummy function that simulates translating an emoji to a text description.
 * Currently, it always returns a static string for testing purposes.
 *
 * @param {string} emoji - The emoji character to be translated (ignored in this dummy version).
 * @returns {string} A placeholder string, currently "mountain".
 */
function translateEmoji(_emoji) {
	// Placeholder logic for testing
	return "mountain";
}

/**
 * A dummy function that simulates translating a text description to an emoji.
 * Currently, it always returns a static emoji for testing purposes.
 *
 * @param {string} text - The text description to be translated (ignored in this dummy version).
 * @returns {string} A placeholder emoji character, currently "🟥".
 */
function translateText(_text) {
	// Placeholder logic for testing
	return "🟥";
}

/**
 * @exports translateEmoji
 * @exports translateText
 */
module.exports = {
	translateEmoji,
	translateText,
};
