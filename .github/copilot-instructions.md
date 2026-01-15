# Custom Instructions for GitHub Copilot

This file contains custom instructions that GitHub Copilot will use when generating code suggestions in this repository.

## General Guidelines

- Follow PEP 8 style guide for Python code
- Use ESLint and Prettier configurations for JavaScript/TypeScript
- Write clear, self-documenting code with meaningful variable names
- Include docstrings for all functions and classes
- Prefer type hints in Python and TypeScript

## Code Style Preferences

### Python
- Use type hints for function parameters and return values
- Follow Google-style docstrings
- Use f-strings for string formatting
- Prefer list comprehensions for simple transformations
- Use pathlib for file path operations

### JavaScript/TypeScript
- Use ES6+ features (arrow functions, destructuring, async/await)
- Prefer const over let, avoid var
- Use meaningful variable names (no single letters except in loops)
- Add JSDoc comments for public functions
- Use TypeScript strict mode

## Testing
- Write unit tests for all new functions
- Use descriptive test names that explain what is being tested
- Follow the Arrange-Act-Assert pattern
- Aim for high code coverage

## Documentation
- Keep README files up to date
- Add inline comments only when the code isn't self-explanatory
- Document complex algorithms and business logic
- Include usage examples in function docstrings

## Security
- Never hardcode credentials or API keys
- Use environment variables for sensitive configuration
- Validate and sanitize all user inputs
- Follow OWASP security best practices
