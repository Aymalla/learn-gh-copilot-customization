# Dev Container Configuration

This directory contains the development container configuration for the GitHub Copilot Customization Demo repository.

## What's Included

### Base Image
- **Universal Image**: `mcr.microsoft.com/devcontainers/universal:2`
  - Includes common development tools and utilities
  - Pre-configured for multiple languages

### Features
- **Node.js LTS**: Latest long-term support version
- **Python 3.11**: Latest stable Python version
- **GitHub CLI**: For GitHub integration and operations

### VS Code Extensions (Pre-installed)
- **GitHub Copilot**: AI-powered code completion
- **GitHub Copilot Chat**: Interactive AI assistant
- **Python**: Python language support
- **Black Formatter**: Python code formatter
- **ESLint**: JavaScript/TypeScript linter
- **Prettier**: Code formatter for JavaScript/TypeScript

### Tools Installed on Creation
- **Prettier**: Code formatter (global)
- **ESLint**: Linting tool (global)
- **Black**: Python code formatter

## Using the Dev Container

### First Time Setup

1. **Prerequisites:**
   - Install [Docker Desktop](https://www.docker.com/products/docker-desktop/)
   - Install [VS Code](https://code.visualstudio.com/)
   - Install the [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

2. **Open the project:**
   ```bash
   git clone https://github.com/Aymalla/learn-gh-copilot-customization.git
   cd learn-gh-copilot-customization
   code .
   ```

3. **Launch the container:**
   - VS Code will detect the dev container configuration
   - Click "Reopen in Container" when prompted
   - Or use: `Ctrl+Shift+P` → "Dev Containers: Reopen in Container"

4. **Wait for setup:**
   - First launch takes 2-3 minutes to build and configure
   - Subsequent launches are much faster

### What Happens Automatically

1. **Container builds** using the specified base image
2. **Features install** (Node.js, Python, GitHub CLI)
3. **VS Code extensions install** automatically
4. **Post-create commands run** to install formatters and linters
5. **Workspace opens** with all settings applied

### Benefits

✅ **Consistent Environment**: Everyone on the team uses the same setup  
✅ **Zero Configuration**: All tools pre-installed and configured  
✅ **Isolated**: Doesn't affect your local machine  
✅ **Quick Start**: Go from clone to coding in minutes  
✅ **Copilot Ready**: GitHub Copilot configured and enabled  

## Customizing the Dev Container

To modify the dev container configuration, edit `.devcontainer/devcontainer.json`:

### Add a Feature
```json
"features": {
  "ghcr.io/devcontainers/features/your-feature:1": {}
}
```

### Add an Extension
```json
"customizations": {
  "vscode": {
    "extensions": [
      "publisher.extension-name"
    ]
  }
}
```

### Change Post-Create Commands
```json
"postCreateCommand": "your-command-here"
```

## Troubleshooting

### Container Won't Start
- Ensure Docker Desktop is running
- Check Docker has enough resources allocated (RAM/CPU)
- Try rebuilding: `Ctrl+Shift+P` → "Dev Containers: Rebuild Container"

### Extensions Not Installing
- Rebuild the container
- Check internet connection
- Manually install from Extensions view

### Slow Performance
- Increase Docker Desktop resource allocation
- Close unused applications
- Use Docker's performance tuning options

## Resources

- [Dev Containers Documentation](https://code.visualstudio.com/docs/devcontainers/containers)
- [Dev Container Features](https://containers.dev/features)
- [Dev Container Specification](https://containers.dev/)
