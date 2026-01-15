"""
Example Python module demonstrating GitHub Copilot customizations.

This module shows how Copilot generates code following the custom instructions
defined in .github/copilot-instructions.md
"""

from pathlib import Path
from typing import List, Optional, Dict, Any, Callable
import json


def read_json_file(file_path: str) -> Dict[str, Any]:
    """
    Read and parse a JSON file.

    Args:
        file_path: Path to the JSON file to read

    Returns:
        Dictionary containing the parsed JSON data

    Raises:
        FileNotFoundError: If the file doesn't exist
        json.JSONDecodeError: If the file contains invalid JSON
    """
    path = Path(file_path)
    
    if not path.exists():
        raise FileNotFoundError(f"File not found: {file_path}")
    
    with path.open('r', encoding='utf-8') as file:
        return json.load(file)


def write_json_file(file_path: str, data: Dict[str, Any], indent: int = 2) -> None:
    """
    Write data to a JSON file.

    Args:
        file_path: Path where the JSON file will be written
        data: Dictionary to serialize to JSON
        indent: Number of spaces for indentation (default: 2)

    Raises:
        IOError: If the file cannot be written
    """
    path = Path(file_path)
    path.parent.mkdir(parents=True, exist_ok=True)
    
    with path.open('w', encoding='utf-8') as file:
        json.dump(data, file, indent=indent, ensure_ascii=False)


def filter_list_by_condition(items: List[Any], condition: Callable[[Any], bool]) -> List[Any]:
    """
    Filter a list based on a condition function.

    Args:
        items: List of items to filter
        condition: Callable that returns True for items to keep

    Returns:
        Filtered list containing only items that satisfy the condition

    Example:
        >>> numbers = [1, 2, 3, 4, 5]
        >>> filter_list_by_condition(numbers, lambda x: x % 2 == 0)
        [2, 4]
    """
    return [item for item in items if condition(item)]


class DataProcessor:
    """
    A class for processing data with various transformations.
    
    Attributes:
        data: The data to be processed
        processed: Whether the data has been processed
    """
    
    def __init__(self, data: List[Dict[str, Any]]) -> None:
        """
        Initialize the DataProcessor.
        
        Args:
            data: List of dictionaries to process
        """
        self.data = [item.copy() for item in data]
        self.processed = False
    
    def transform(self, key: str, transformation: Callable[[Any], Any]) -> 'DataProcessor':
        """
        Apply a transformation to a specific key in all data items.
        
        Args:
            key: The key to transform
            transformation: Function to apply to the key's value
        
        Returns:
            Self for method chaining
        """
        for item in self.data:
            if key in item:
                item[key] = transformation(item[key])
        
        self.processed = True
        return self
    
    def filter_by_key(self, key: str, value: Any) -> 'DataProcessor':
        """
        Filter data items by a key-value pair.
        
        Args:
            key: The key to check
            value: The value to match
        
        Returns:
            Self for method chaining
        """
        self.data = [item for item in self.data if item.get(key) == value]
        return self
    
    def get_results(self) -> List[Dict[str, Any]]:
        """
        Get the processed data.
        
        Returns:
            List of processed data items
        """
        return self.data


def main() -> None:
    """Main function demonstrating the usage of the module."""
    # Example data
    sample_data = [
        {"name": "Alice", "age": 30, "city": "New York"},
        {"name": "Bob", "age": 25, "city": "San Francisco"},
        {"name": "Charlie", "age": 35, "city": "New York"}
    ]
    
    # Process data
    processor = DataProcessor(sample_data)
    results = (processor
               .filter_by_key("city", "New York")
               .transform("age", lambda x: x + 1)
               .get_results())
    
    print(f"Processed results: {results}")


if __name__ == "__main__":
    main()
