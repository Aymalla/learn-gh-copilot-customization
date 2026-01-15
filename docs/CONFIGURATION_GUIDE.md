# Copilot Configuration Guide

This guide provides step-by-step instructions for configuring GitHub Copilot in VS Code.

## Initial Setup

### 1. Install GitHub Copilot

1. Open VS Code
2. Go to Extensions (Ctrl+Shift+X or Cmd+Shift+X)
3. Search for "GitHub Copilot"
4. Install both:
   - GitHub Copilot
   - GitHub Copilot Chat

### 2. Sign In to GitHub

1. Click on the Copilot icon in the status bar
2. Follow the prompts to sign in with your GitHub account
3. Authorize VS Code to access your GitHub account

### 3. Verify Installation

1. Open any code file
2. Start typing a comment or function
3. You should see inline suggestions from Copilot

## Configuration Options

### Global Settings (All Projects)

Edit your User Settings:
1. Press `Ctrl+,` (Windows/Linux) or `Cmd+,` (Mac)
2. Click the "Open Settings (JSON)" icon in the top-right
3. Add your preferred Copilot settings

Example global settings:
```json
{
  "github.copilot.enable": {
    "*": true
  },
  "editor.inlineSuggest.enabled": true,
  "github.copilot.editor.enableAutoCompletions": true
}
```

### Workspace Settings (Current Project Only)

Create or edit `.vscode/settings.json` in your project root. See the example in this repository.

### Custom Instructions

Create `.github/copilot-instructions.md` in your repository root to provide project-specific guidance to Copilot.

## Customization Examples

### Disable Copilot for Specific File Types

```json
"github.copilot.enable": {
  "*": true,
  "plaintext": false,
  "markdown": false,
  "yaml": false
}
```

### Enable Code Actions

```json
"github.copilot.editor.enableCodeActions": true
```

This enables Copilot to suggest fixes for errors and warnings.

### Configure Inline Suggestions

```json
"editor.inlineSuggest.enabled": true,
"editor.inlineSuggest.showToolbar": "onHover",
"editor.quickSuggestions": {
  "comments": "on",
  "strings": "on",
  "other": "on"
}
```

### Terminal Integration

```json
"terminal.integrated.suggest.enabled": true
```

Enables Copilot suggestions in the integrated terminal.

## Keyboard Shortcuts

### Copilot Suggestions
- `Tab` - Accept suggestion
- `Esc` - Dismiss suggestion
- `Alt+]` - Next suggestion
- `Alt+[` - Previous suggestion
- `Alt+\` - Trigger inline suggestion

### Copilot Chat
- `Ctrl+Shift+I` (Windows/Linux) or `Cmd+Shift+I` (Mac) - Open chat
- `Ctrl+I` or `Cmd+I` - Inline chat in editor

## Advanced Features

### 1. Copilot Chat Commands

In the chat window, you can use slash commands:

- `/explain` - Explain selected code
- `/fix` - Suggest fixes for problems
- `/tests` - Generate tests
- `/help` - Show help information

### 2. Context Files

Copilot uses context from:
- Current file
- Open files in editor
- Files in the same directory
- Project structure
- Custom instructions file

### 3. Code Actions

Right-click on code and look for Copilot options:
- "Copilot: Explain This"
- "Copilot: Fix This"
- "Copilot: Generate Tests"

## Troubleshooting

### Copilot Not Working

1. Check your subscription status:
   - Click the Copilot icon in status bar
   - Ensure you have an active subscription

2. Verify extension is enabled:
   - Go to Extensions
   - Ensure GitHub Copilot is enabled

3. Check settings:
   - Ensure `github.copilot.enable` is true
   - Ensure `editor.inlineSuggest.enabled` is true

### No Suggestions Appearing

1. Wait a moment - Copilot may need time to analyze context
2. Ensure you're in a supported file type
3. Check if file type is disabled in settings
4. Try reloading VS Code window

### Suggestions Not Relevant

1. Update custom instructions in `.github/copilot-instructions.md`
2. Provide more context through comments
3. Ensure file and variable names are descriptive
4. Keep related code nearby for better context

## Performance Optimization

### Reduce CPU Usage

```json
"github.copilot.advanced": {
  "debug.overrideEngine": ""
}
```

### Limit Context

If Copilot is slow, limit the files it analyzes:
- Close unused editor tabs
- Use `.copilotignore` file (if available)
- Disable Copilot for large binary files

## Privacy and Security

### Review Settings

```json
// Disable telemetry if desired
"github.copilot.advanced": {
  "debug.filterLogCategories": []
}
```

### Best Practices

1. Never commit secrets or API keys
2. Review all suggestions before accepting
3. Be aware that code snippets are sent to GitHub
4. Use `.copilotignore` for sensitive files (if supported)

## Team Configuration

### Share Settings

Commit workspace settings to version control:
```
.vscode/
  settings.json
  extensions.json
.github/
  copilot-instructions.md
```

### Onboarding New Team Members

1. They clone the repository
2. VS Code prompts to install recommended extensions
3. Workspace settings are automatically applied
4. Custom instructions are used by Copilot

## Updates and Maintenance

### Keep Extensions Updated

1. Check for updates regularly
2. Enable auto-update for extensions:
   ```json
   "extensions.autoUpdate": true
   ```

### Monitor Copilot Changes

- Follow [GitHub Copilot Blog](https://github.blog/tag/github-copilot/)
- Review release notes for new features
- Update configurations as new options become available

## Additional Tips

1. **Use descriptive commit messages** - Copilot learns from repository history
2. **Maintain consistent code style** - Helps Copilot generate matching code
3. **Write clear comments** - Guides Copilot to generate better code
4. **Provide examples** - Include sample code in custom instructions
5. **Iterate on instructions** - Refine based on the quality of suggestions

## Getting Help

- [GitHub Copilot Documentation](https://docs.github.com/en/copilot)
- [VS Code Documentation](https://code.visualstudio.com/docs)
- [GitHub Community Forum](https://github.community/)
- [Report Issues](https://github.com/community/community/discussions/categories/copilot)
