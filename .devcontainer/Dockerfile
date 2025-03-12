# Use the official TypeScript Node.js image as a base
FROM mcr.microsoft.com/devcontainers/typescript-node:1-22-bookworm

# Install esbuild globally via npm
RUN npm install -g esbuild

# Set the working directory to the mounted volume
WORKDIR /workspace

# Create a volume for the current folder (binds automatically in devcontainer)
VOLUME ["/workspace"]