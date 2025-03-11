# Use the official TypeScript Node.js image as a base
FROM mcr.microsoft.com/devcontainers/typescript-node:1-22-bookworm

# Ensure required tools are installed
RUN apt-get update && apt-get install -y \
    build-essential \
    pkg-config \
    libssl-dev \
    && rm -rf /var/lib/apt/lists/*

# Install Rust using rustup (default profile + aarch64 target)
RUN curl https://sh.rustup.rs -sSf | sh -s -- -y --profile default \
  && . "$HOME/.cargo/env" \
  && rustup target add aarch64-unknown-linux-gnu

ENV PATH="/root/.cargo/bin:${PATH}"
RUN curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh

# Install esbuild globally via npm
RUN npm install -g esbuild

# Set the working directory to the mounted volume
WORKDIR /workspace

# Create a volume for the current folder (binds automatically in devcontainer)
VOLUME ["/workspace"]