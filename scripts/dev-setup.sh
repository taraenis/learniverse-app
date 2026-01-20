#!/bin/bash

set -e
echo "Starting developer environment setup..."

if ! command -v node &> /dev/null
then
    echo "Node.js not found. Please install Node.js (v18+ recommended) first."
    exit 1
fi

if ! command -v pnpm &> /dev/null
then
    echo "pnpm not found. Installing pnpm globally..."
    npm install -g pnpm
else
    echo "pnpm is already installed."
fi

echo "Installing project dependencies with pnpm..."
pnpm install

echo "Setup complete! You can now start developing."
echo "Run 'pnpm dev'"
