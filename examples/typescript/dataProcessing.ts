/**
 * Example TypeScript module demonstrating GitHub Copilot customizations.
 * 
 * This module shows how Copilot generates code following the custom instructions
 * defined in .github/copilot-instructions.md
 */

import { promises as fs } from 'fs';
import * as path from 'path';

/**
 * Interface for data items with flexible property types
 */
interface DataItem extends Record<string, unknown> {
  // Add specific known properties here if needed
}

/**
 * Read and parse a JSON file
 * @param filePath - Path to the JSON file
 * @returns Parsed JSON data
 * @throws Error if file cannot be read or parsed
 */
export const readJSONFile = async <T = unknown>(filePath: string): Promise<T> => {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data) as T;
  } catch (error) {
    throw new Error(`Failed to read JSON file: ${(error as Error).message}`);
  }
};

/**
 * Write data to a JSON file
 * @param filePath - Path where the file will be written
 * @param data - Data to write
 * @param indent - Indentation spaces (default: 2)
 */
export const writeJSONFile = async (
  filePath: string,
  data: Record<string, unknown>,
  indent: number = 2
): Promise<void> => {
  const dirPath = path.dirname(filePath);
  await fs.mkdir(dirPath, { recursive: true });
  
  const jsonString = JSON.stringify(data, null, indent);
  await fs.writeFile(filePath, jsonString, 'utf-8');
};

/**
 * Filter an array based on a condition function
 * @param items - Array to filter
 * @param condition - Function that returns true for items to keep
 * @returns Filtered array
 * 
 * @example
 * ```typescript
 * const numbers = [1, 2, 3, 4, 5];
 * const evens = filterByCondition(numbers, x => x % 2 === 0);
 * // Returns: [2, 4]
 * ```
 */
export const filterByCondition = <T>(
  items: T[],
  condition: (item: T) => boolean
): T[] => {
  return items.filter(condition);
};

/**
 * Class for processing data with various transformations
 */
export class DataProcessor<T extends DataItem> {
  private data: T[];
  private processed: boolean;

  /**
   * Create a DataProcessor
   * @param data - Array of objects to process
   */
  constructor(data: T[]) {
    this.data = [...data]; // Create a copy
    this.processed = false;
  }

  /**
   * Apply a transformation to a specific key in all data items
   * @param key - The key to transform
   * @param transformation - Function to apply to the value
   * @returns This instance for chaining
   */
  transform<K extends keyof T>(
    key: K,
    transformation: (value: T[K]) => T[K]
  ): this {
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
   * @param key - The key to check
   * @param value - The value to match
   * @returns This instance for chaining
   */
  filterByKey<K extends keyof T>(key: K, value: T[K]): this {
    this.data = this.data.filter(item => item[key] === value);
    return this;
  }

  /**
   * Get the processed data
   * @returns Processed data
   */
  getResults(): T[] {
    return this.data;
  }

  /**
   * Check if data has been processed
   * @returns True if processed, false otherwise
   */
  isProcessed(): boolean {
    return this.processed;
  }
}

/**
 * Person interface for demonstration
 */
interface Person {
  name: string;
  age: number;
  city: string;
}

/**
 * Main function demonstrating module usage
 */
const main = (): void => {
  // Example data
  const sampleData: Person[] = [
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

// Run if executed directly
if (require.main === module) {
  main();
}
