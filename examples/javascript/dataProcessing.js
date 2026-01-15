/**
 * Example JavaScript module demonstrating GitHub Copilot customizations.
 * 
 * This module shows how Copilot generates code following the custom instructions
 * defined in .github/copilot-instructions.md
 */

const fs = require('fs').promises;
const path = require('path');

/**
 * Read and parse a JSON file
 * @param {string} filePath - Path to the JSON file
 * @returns {Promise<object>} Parsed JSON data
 * @throws {Error} If file cannot be read or parsed
 */
const readJSONFile = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    throw new Error(`Failed to read JSON file: ${error.message}`);
  }
};

/**
 * Write data to a JSON file
 * @param {string} filePath - Path where the file will be written
 * @param {object} data - Data to write
 * @param {number} indent - Indentation spaces (default: 2)
 * @returns {Promise<void>}
 */
const writeJSONFile = async (filePath, data, indent = 2) => {
  const dirPath = path.dirname(filePath);
  await fs.mkdir(dirPath, { recursive: true });
  
  const jsonString = JSON.stringify(data, null, indent);
  await fs.writeFile(filePath, jsonString, 'utf-8');
};

/**
 * Filter an array based on a condition function
 * @param {Array} items - Array to filter
 * @param {Function} condition - Function that returns true for items to keep
 * @returns {Array} Filtered array
 * 
 * @example
 * const numbers = [1, 2, 3, 4, 5];
 * const evens = filterByCondition(numbers, x => x % 2 === 0);
 * // Returns: [2, 4]
 */
const filterByCondition = (items, condition) => {
  return items.filter(condition);
};

/**
 * Class for processing data with various transformations
 */
class DataProcessor {
  /**
   * Create a DataProcessor
   * @param {Array<object>} data - Array of objects to process
   */
  constructor(data) {
    this.data = [...data]; // Create a copy
    this.processed = false;
  }

  /**
   * Apply a transformation to a specific key in all data items
   * @param {string} key - The key to transform
   * @param {Function} transformation - Function to apply to the value
   * @returns {DataProcessor} This instance for chaining
   */
  transform(key, transformation) {
    this.data = this.data.map(item => {
      if (key in item) {
        return { ...item, [key]: transformation(item[key]) };
      }
      return item;
    });
    this.processed = true;
    return this;
  }

  /**
   * Filter data items by a key-value pair
   * @param {string} key - The key to check
   * @param {*} value - The value to match
   * @returns {DataProcessor} This instance for chaining
   */
  filterByKey(key, value) {
    this.data = this.data.filter(item => item[key] === value);
    return this;
  }

  /**
   * Get the processed data
   * @returns {Array<object>} Processed data
   */
  getResults() {
    return this.data;
  }
}

/**
 * Main function demonstrating module usage
 */
const main = () => {
  // Example data
  const sampleData = [
    { name: 'Alice', age: 30, city: 'New York' },
    { name: 'Bob', age: 25, city: 'San Francisco' },
    { name: 'Charlie', age: 35, city: 'New York' }
  ];

  // Process data
  const processor = new DataProcessor(sampleData);
  const results = processor
    .filterByKey('city', 'New York')
    .transform('age', age => age + 1)
    .getResults();

  console.log('Processed results:', results);
};

// Export for module usage
module.exports = {
  readJSONFile,
  writeJSONFile,
  filterByCondition,
  DataProcessor
};

// Run if executed directly
if (require.main === module) {
  main();
}
