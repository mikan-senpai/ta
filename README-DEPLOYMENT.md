# Tathya Technologies Website - Deployment Guide

This guide will help you deploy the Tathya Technologies website using Docker on your own server.

## 🚀 Quick Start

### Prerequisites

1. **Docker** (version 20.10 or higher)
2. **Docker Compose** (version 2.0 or higher)
3. **Git** (to clone the repository)

### Installation

1. **Clone the repository** (if not already done):
   ```bash
   git clone <your-repository-url>
   cd ta
   ```

2. **Make deployment scripts executable**:
   ```bash
   chmod +x deploy.sh
   chmod +x deploy-ssl.sh
   ```

3. **Deploy the application**:
   ```bash
   # For HTTP deployment
   ./deploy.sh

   # For HTTPS deployment (with SSL)
   ./deploy-ssl.sh
   ```

## 📋 Deployment Options

### Option 1: HTTP Deployment (Development/Testing)

Use the basic deployment for development or testing environments:

```bash
./deploy.sh
```

**Features:**
- HTTP on port 80
- Basic nginx configuration
- Health check endpoint
- Logging to `./logs/nginx/`

### Option 2: HTTPS Deployment (Production)

Use SSL-enabled deployment for production environments:

```bash
./deploy-ssl.sh
```

**Features:**
- HTTP to HTTPS redirect
- SSL/TLS encryption
- Security headers
- Resource limits
- Read-only filesystem
- Health monitoring

## 🔧 Manual Deployment

If you prefer manual deployment:

### 1. Build the Docker Image

```bash
docker-compose build --no-cache
```

### 2. Start the Application

```bash
# For HTTP
docker-compose up -d

# For HTTPS with production settings
docker-compose -f docker-compose.prod.yml up -d
```

### 3. Check Status

```bash
# Check container status
docker-compose ps

# View logs
docker-compose logs -f

# Health check
curl http://localhost/health
```

## 🔒 SSL Configuration

### Using Self-Signed Certificates (Development)

The `deploy-ssl.sh` script automatically generates self-signed certificates for development.

### Using Valid SSL Certificates (Production)

1. **Obtain SSL certificates** from your certificate authority
2. **Place certificates** in the `./ssl/` directory:
   ```
   ssl/
   ├── cert.pem    # Your SSL certificate
   └── key.pem     # Your private key
   ```
3. **Deploy with SSL**:
   ```bash
   ./deploy-ssl.sh
   ```

### Let's Encrypt Integration

For automatic SSL certificate management:

1. **Install Certbot** on your server
2. **Obtain certificates**:
   ```bash
   certbot certonly --standalone -d yourdomain.com
   ```
3. **Copy certificates** to the ssl directory:
   ```bash
   cp /etc/letsencrypt/live/yourdomain.com/fullchain.pem ./ssl/cert.pem
   cp /etc/letsencrypt/live/yourdomain.com/privkey.pem ./ssl/key.pem
   ```
4. **Deploy**:
   ```bash
   ./deploy-ssl.sh
   ```

## 🛠️ Management Commands

### View Application Status

```bash
# Check container status
docker-compose ps

# View real-time logs
docker-compose logs -f

# Check resource usage
docker stats
```

### Restart Application

```bash
# Restart the application
docker-compose restart

# Rebuild and restart
docker-compose up -d --build
```

### Stop Application

```bash
# Stop the application
docker-compose down

# Stop and remove volumes
docker-compose down -v
```

### Update Application

```bash
# Pull latest code
git pull

# Rebuild and restart
docker-compose up -d --build
```

## 📊 Monitoring

### Health Check

The application includes a health check endpoint:

```bash
# HTTP
curl http://localhost/health

# HTTPS
curl -k https://localhost/health
```

### Logs

Application logs are stored in `./logs/nginx/`:

```bash
# View access logs
tail -f logs/nginx/access.log

# View error logs
tail -f logs/nginx/error.log
```

### Resource Monitoring

```bash
# Check container resource usage
docker stats tathya-website

# Check disk usage
docker system df
```

## 🔧 Configuration

### Environment Variables

The application uses the following environment variables:

- `NODE_ENV=production` - Sets production mode

### Nginx Configuration

The nginx configuration is optimized for:
- **Performance**: Gzip compression, caching
- **Security**: Security headers, SSL/TLS
- **SEO**: Proper routing for SPA
- **Monitoring**: Health check endpoint

### Custom Domain

To use a custom domain:

1. **Update nginx configuration**:
   ```bash
   # Edit nginx.conf or nginx.ssl.conf
   # Replace 'localhost' with your domain
   server_name yourdomain.com;
   ```

2. **Rebuild and restart**:
   ```bash
   docker-compose up -d --build
   ```

## 🚨 Troubleshooting

### Common Issues

#### 1. Port Already in Use

```bash
# Check what's using port 80
sudo netstat -tulpn | grep :80

# Stop conflicting service
sudo systemctl stop apache2  # or nginx
```

#### 2. Permission Issues

```bash
# Fix log directory permissions
sudo chown -R $USER:$USER logs/

# Fix SSL certificate permissions
chmod 600 ssl/key.pem
chmod 644 ssl/cert.pem
```

#### 3. SSL Certificate Issues

```bash
# Check certificate validity
openssl x509 -in ssl/cert.pem -text -noout

# Regenerate self-signed certificate
./deploy-ssl.sh
```

#### 4. Container Won't Start

```bash
# Check container logs
docker-compose logs

# Check nginx configuration
docker exec tathya-website nginx -t
```

### Debug Commands

```bash
# Enter container shell
docker exec -it tathya-website sh

# Check nginx status
docker exec tathya-website nginx -t

# View nginx configuration
docker exec tathya-website cat /etc/nginx/nginx.conf
```

## 📈 Performance Optimization

### Production Recommendations

1. **Use HTTPS**: Always use SSL in production
2. **Set up monitoring**: Use tools like Prometheus/Grafana
3. **Configure backups**: Regular backups of logs and data
4. **Set up logging**: Centralized logging with ELK stack
5. **Use CDN**: For static assets in global deployments
6. **Load balancing**: For high-traffic deployments

### Resource Limits

The production configuration includes resource limits:
- **Memory**: 512MB limit, 256MB reservation
- **CPU**: 0.5 cores limit, 0.25 cores reservation

## 🔐 Security Considerations

### Security Features

- **Read-only filesystem**: Prevents container modification
- **No new privileges**: Security hardening
- **Security headers**: XSS protection, content type options
- **SSL/TLS**: Encrypted communication
- **Resource limits**: Prevents resource exhaustion

### Security Checklist

- [ ] Use valid SSL certificates in production
- [ ] Regularly update Docker images
- [ ] Monitor application logs
- [ ] Set up firewall rules
- [ ] Use strong passwords for server access
- [ ] Regular security updates

## 📞 Support

For deployment issues or questions:

1. **Check logs**: `docker-compose logs`
2. **Verify configuration**: `docker exec tathya-website nginx -t`
3. **Test connectivity**: `curl http://localhost/health`

## 📝 License

This deployment configuration is part of the Tathya Technologies website project.
