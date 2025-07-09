#!/bin/bash

# Tathya Technologies Website SSL Deployment Script
# This script builds and deploys the website with SSL support

set -e  # Exit on any error

echo "🔒 Starting Tathya Technologies Website SSL Deployment..."

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

# Check for SSL certificates
if [ ! -f "./ssl/cert.pem" ] || [ ! -f "./ssl/key.pem" ]; then
    print_warning "SSL certificates not found in ./ssl/ directory."
    print_status "Creating self-signed certificate for development..."

    # Create ssl directory
    mkdir -p ssl

    # Generate self-signed certificate
    openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
        -keyout ssl/key.pem -out ssl/cert.pem \
        -subj "/C=IN/ST=State/L=City/O=Tathya Technologies/CN=localhost"

    print_success "Self-signed certificate created for development use."
    print_warning "For production, replace with valid SSL certificates."
fi

# Create logs directory if it doesn't exist
mkdir -p logs/nginx

print_status "📦 Building Docker image with SSL support..."
docker-compose -f docker-compose.prod.yml build --no-cache

print_status "🛑 Stopping existing containers..."
docker-compose -f docker-compose.prod.yml down

print_status "🚀 Starting the application with SSL..."
docker-compose -f docker-compose.prod.yml up -d

print_status "⏳ Waiting for the application to start..."
sleep 15

# Check if the application is running
if curl -f -k https://localhost/health > /dev/null 2>&1; then
    print_success "✅ Application is running successfully with SSL!"
    print_success "🌐 Website is available at: https://localhost"
    print_success "📊 Health check endpoint: https://localhost/health"
else
    print_warning "⚠️  Application might still be starting up. Please wait a moment and try again."
    print_status "📋 Checking container logs..."
    docker-compose -f docker-compose.prod.yml logs
fi

print_status "📋 SSL Deployment Summary:"
echo "   - Container name: tathya-website-prod"
echo "   - Ports: 80 (HTTP redirect), 443 (HTTPS)"
echo "   - SSL certificates: ./ssl/"
echo "   - Health check: https://localhost/health"
echo "   - Logs: ./logs/nginx/"

print_success "🔒 SSL Deployment completed!"
print_warning "⚠️  Remember to replace self-signed certificates with valid ones for production."
