# Quick Start Guide

Get started with GitHub Copilot customizations in just 5 minutes!

## Prerequisites

- VS Code installed
- GitHub account with Copilot access
- Basic familiarity with VS Code

## Step 1: Clone This Repository

```bash
git clone https://github.com/Aymalla/learn-gh-copilot-customization.git
cd learn-gh-copilot-customization
```

## Step 2: Open in VS Code

```bash
code .
```

## Step 3: Install Recommended Extensions

When you open the workspace, VS Code will prompt you to install recommended extensions:

1. Click "Install" when prompted
2. Or open Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`)
3. Type "Extensions: Show Recommended Extensions"
4. Click "Install Workspace Recommended Extensions"

**Required Extensions:**
- GitHub Copilot
- GitHub Copilot Chat

**Optional Extensions:**
- Python (for Python examples)
- ESLint (for JavaScript examples)
- Prettier (for code formatting)

## Step 4: Sign In to GitHub Copilot

1. Look for the GitHub Copilot icon in the VS Code status bar (bottom right)
2. Click the icon
3. Follow the prompts to sign in with your GitHub account
4. Authorize VS Code to access your GitHub Copilot subscription

## Step 5: Verify Setup

1. Open any file from the `examples/` directory
2. Try typing a comment like:
   ```python
   # Function to calculate the factorial of a number
   ```
3. You should see Copilot suggestions appear!

## What's Included

### Configuration Files

- **`.vscode/settings.json`**: Workspace-specific Copilot settings
- **`.vscode/extensions.json`**: Recommended VS Code extensions
- **`.github/copilot-instructions.md`**: Custom instructions for this project

### Example Code

- **`examples/python/`**: Python examples with type hints and docstrings
- **`examples/javascript/`**: JavaScript examples with modern ES6+ syntax
- **`examples/typescript/`**: TypeScript examples with strong typing

### Documentation

- **`docs/CONFIGURATION_GUIDE.md`**: Detailed setup and configuration
- **`docs/USE_CASES.md`**: Common use cases and examples

## Try It Out!

### Exercise 1: Generate a Function

1. Open `examples/python/data_processing.py`
2. At the end of the file, type:
   ```python
   # Function to merge two dictionaries recursively
   ```
3. Press `Enter` and watch Copilot generate the function!
4. Press `Tab` to accept the suggestion

### Exercise 2: Generate Tests

1. Open a new file `examples/python/test_data_processing.py`
2. Type:
   ```python
   # Test cases for read_json_file function
   ```
3. Watch Copilot generate test code!

### Exercise 3: Use Copilot Chat

1. Press `Ctrl+Shift+I` (Windows/Linux) or `Cmd+Shift+I` (Mac)
2. Ask: "Explain the DataProcessor class"
3. Try: "How can I improve the error handling in this code?"

## Customization Examples

### Change Settings

Edit `.vscode/settings.json` to customize:

**Disable Copilot for certain file types:**
```json
"github.copilot.enable": {
  "*": true,
  "markdown": false
}
```

**Change inline suggestion behavior:**
```json
"editor.inlineSuggest.showToolbar": "always"
```

### Update Custom Instructions

Edit `.github/copilot-instructions.md` to add project-specific rules:

```markdown
## Additional Rules
- Always use async/await instead of .then()
- Prefer arrow functions over regular functions
- Use const by default, let when necessary
```

## Common Issues

### Copilot Not Showing Suggestions

1. Check the status bar icon - ensure it's not disabled
2. Verify your subscription is active
3. Try reloading VS Code: `Ctrl+Shift+P` → "Developer: Reload Window"

### Suggestions Not Relevant

1. Add more context through comments
2. Update custom instructions
3. Ensure file names are descriptive

### Installation Failed

1. Check your internet connection
2. Ensure VS Code is up to date
3. Try installing extensions manually from the marketplace

## Next Steps

1. **Explore Examples**: Review the code in `examples/` directory
2. **Read Documentation**: Check out the detailed guides in `docs/`
3. **Customize Settings**: Adjust `.vscode/settings.json` to your preferences
4. **Add Custom Instructions**: Update `.github/copilot-instructions.md` for your project
5. **Practice**: Try generating code, tests, and documentation

## Tips for Success

- 📝 Write clear, descriptive comments
- 🏷️ Use meaningful variable and function names
- 🔄 Iterate: Accept, review, and refine suggestions
- 💬 Use Copilot Chat for complex questions
- 📚 Keep learning: Copilot improves as you use it

## Resources

- [Full README](README.md)
- [Configuration Guide](docs/CONFIGURATION_GUIDE.md)
- [Use Cases](docs/USE_CASES.md)
- [GitHub Copilot Documentation](https://docs.github.com/en/copilot)

## Need Help?

- Check the [Configuration Guide](docs/CONFIGURATION_GUIDE.md) for detailed setup
- Review [Common Use Cases](docs/USE_CASES.md) for examples
- Visit [GitHub Copilot Discussions](https://github.com/community/community/discussions/categories/copilot)

---

Happy Coding with GitHub Copilot! 🚀
