#!/bin/bash

# Tathya Technologies Website Deployment Script
# This script builds and deploys the website using Docker

set -e  # Exit on any error

echo "🚀 Starting Tathya Technologies Website Deployment..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    print_error "Docker is not installed. Please install Docker first."
    exit 1
fi

# Check if Docker Compose is installed
if ! command -v docker-compose &> /dev/null; then
    print_error "Docker Compose is not installed. Please install Docker Compose first."
    exit 1
fi

# Create logs directory if it doesn't exist
mkdir -p logs/nginx

print_status "📦 Building Docker image..."
docker-compose build --no-cache

print_status "🛑 Stopping existing containers..."
docker-compose down

print_status "🚀 Starting the application..."
docker-compose up -d

print_status "⏳ Waiting for the application to start..."
sleep 10

# Check if the application is running
if curl -f http://localhost/health > /dev/null 2>&1; then
    print_success "✅ Application is running successfully!"
    print_success "🌐 Website is available at: http://localhost"
    print_success "📊 Health check endpoint: http://localhost/health"
else
    print_warning "⚠️  Application might still be starting up. Please wait a moment and try again."
    print_status "📋 Checking container logs..."
    docker-compose logs
fi

print_status "📋 Deployment Summary:"
echo "   - Container name: tathya-website"
echo "   - Ports: 80 (HTTP), 443 (HTTPS)"
echo "   - Health check: http://localhost/health"
echo "   - Logs: ./logs/nginx/"

print_success "🎉 Deployment completed!"
