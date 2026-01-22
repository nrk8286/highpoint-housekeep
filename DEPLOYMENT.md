# Deployment Guide

This document describes how to deploy the HighPoint Housekeep application to Cloudflare Pages for the `highpoints.work` domain.

## Overview

The application is an Expo React Native app that can be deployed as a static web application to Cloudflare Pages. The web version is exported as static HTML/CSS/JS files and served via Cloudflare's global CDN.

## Prerequisites

1. **Cloudflare Account**: Sign up at [cloudflare.com](https://cloudflare.com) if you don't have an account
2. **Domain Configuration**: Ensure `highpoints.work` domain is added to your Cloudflare account
3. **Node.js**: Version 20 or higher
4. **API Credentials**: Cloudflare API token and Account ID

## Configuration Files

### 1. MCP Server Configuration (`.mcp.json`)

This file configures the Model Context Protocol server for AI assistant integration. It allows Claude and other AI tools to interact with the project files.

```json
{
  "mcpServers": {
    "highpoint-housekeep": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/project"],
      "description": "HighPoint Housekeep project filesystem access"
    }
  }
}
```

### 2. Cloudflare Configuration (`wrangler.toml`)

This file contains the Cloudflare Pages deployment configuration:
- Project name
- Build command and output directory
- Custom domain mappings
- Security headers
- Caching rules
- SPA routing rules

### 3. Static Files Configuration (`public/`)

The `public/` directory contains static configuration files that will be copied to the deployment:

- `_headers`: HTTP security and caching headers
- `_redirects`: SPA routing configuration (redirects all routes to index.html)
- `_routes.json`: Cloudflare Pages routing configuration

## Deployment Methods

### Method 1: Automated Deployment via GitHub Actions (Recommended)

The repository includes a GitHub Actions workflow (`.github/workflows/cloudflare-pages.yml`) that automatically deploys to Cloudflare Pages on every push to the `main` branch.

#### Setup Steps:

1. **Get Cloudflare API Token**:
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/profile/api-tokens)
   - Click "Create Token"
   - Use the "Edit Cloudflare Workers" template or create a custom token with:
     - Permissions: `Account.Cloudflare Pages:Edit`
   - Copy the generated token

2. **Get Cloudflare Account ID**:
   - Go to your [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Select your account
   - Copy the Account ID from the right sidebar

3. **Configure GitHub Secrets**:
   - Go to your GitHub repository settings
   - Navigate to Secrets and Variables → Actions
   - Add the following secrets:
     - `CLOUDFLARE_API_TOKEN`: Your Cloudflare API token
     - `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare Account ID

4. **Deploy**:
   - Push changes to the `main` branch
   - GitHub Actions will automatically build and deploy
   - Check the Actions tab for deployment status

### Method 2: Manual Deployment via Wrangler CLI

You can also deploy manually using the Wrangler CLI:

1. **Install Wrangler**:
   ```bash
   npm install -g wrangler
   ```

2. **Authenticate**:
   ```bash
   wrangler login
   ```

3. **Build the web app**:
   ```bash
   npm run build:web
   ```

4. **Deploy**:
   ```bash
   wrangler pages deploy dist --project-name=highpoint-housekeep
   ```

### Method 3: Direct Upload via Cloudflare Dashboard

For quick testing or one-off deployments:

1. **Build the web app**:
   ```bash
   npm run build:web
   ```

2. **Upload to Cloudflare**:
   - Go to [Cloudflare Pages Dashboard](https://dash.cloudflare.com/)
   - Click "Create a project"
   - Choose "Direct Upload"
   - Drag and drop the `dist/` folder
   - Click "Deploy"

## Custom Domain Configuration

### Setting up highpoints.work

1. **Add Domain to Cloudflare Pages**:
   - Go to your Cloudflare Pages project
   - Navigate to "Custom domains"
   - Click "Set up a custom domain"
   - Enter `highpoints.work` and `www.highpoints.work`
   - Follow the DNS configuration instructions

2. **DNS Configuration**:
   - The domain should already be on Cloudflare
   - Cloudflare will automatically create the necessary CNAME records
   - Typical setup:
     - `highpoints.work` → CNAME to `highpoint-housekeep.pages.dev`
     - `www.highpoints.work` → CNAME to `highpoint-housekeep.pages.dev`

3. **SSL/TLS**:
   - Cloudflare automatically provisions SSL certificates
   - Ensure SSL/TLS mode is set to "Full (strict)" in Cloudflare SSL/TLS settings

## Build Process

The build process is defined in `package.json`:

```json
{
  "scripts": {
    "build:web": "npx expo export --platform web"
  }
}
```

This command:
1. Exports the Expo app for web platform
2. Generates static HTML, CSS, and JavaScript files
3. Outputs to the `dist/` directory
4. Includes all assets and images

## Application Configuration

The Expo app is configured for static web export in `app.json`:

```json
{
  "expo": {
    "web": {
      "output": "static"
    }
  }
}
```

This ensures the app is built as a static site suitable for Cloudflare Pages.

## Routing

The application uses Expo Router for navigation. For proper SPA (Single Page Application) routing:

1. All routes are handled client-side
2. The `_redirects` file ensures all requests go to `index.html`
3. Expo Router handles the routing logic in the browser

## Security Headers

The deployment includes security headers configured in `public/_headers`:

- `X-Frame-Options`: Prevents clickjacking
- `X-Content-Type-Options`: Prevents MIME type sniffing
- `X-XSS-Protection`: Enables XSS filtering
- `Referrer-Policy`: Controls referrer information
- `Permissions-Policy`: Restricts browser features

## Caching Strategy

Optimized caching is configured for different file types:

- **Long-term cache** (1 year) for:
  - `/_expo/*` - Expo framework files
  - `/static/*` - Static assets
  - `/assets/*` - Images and media
  - `*.js` and `*.css` files with hashes

- **No cache** for:
  - `index.html` - Ensures users get the latest app version

## Troubleshooting

### Build Fails

- Check Node.js version (should be 20+)
- Clear cache: `rm -rf node_modules package-lock.json && npm install`
- Check for TypeScript errors: `npm run lint`

### Deployment Fails

- Verify Cloudflare API token has correct permissions
- Check Cloudflare Account ID is correct
- Ensure project name matches in GitHub Actions and Cloudflare

### Routing Issues

- Verify `_redirects` file is present in the `dist/` directory after build
- Check Cloudflare Pages Functions logs for routing errors
- Ensure `web.output` is set to `"static"` in `app.json`

### Domain Not Working

- Verify DNS records are correctly configured in Cloudflare
- Check SSL/TLS settings (should be "Full (strict)")
- Wait up to 24 hours for DNS propagation
- Check custom domain status in Cloudflare Pages dashboard

## Monitoring and Logs

- **Build Logs**: Available in GitHub Actions (for automated deployments)
- **Deployment Logs**: Available in Cloudflare Pages dashboard
- **Analytics**: Enable Cloudflare Web Analytics in the dashboard
- **Error Tracking**: Consider integrating Sentry or similar service

## Environment Variables

If you need to add environment variables:

1. For GitHub Actions:
   - Add to repository secrets
   - Reference in workflow file

2. For Cloudflare Pages:
   - Go to project settings → Environment variables
   - Add variables for Production and Preview environments

3. In your code:
   - Access via `process.env.VARIABLE_NAME`
   - Must be prefixed with `EXPO_PUBLIC_` to be available in the client

## Rollback

If you need to rollback a deployment:

1. Go to Cloudflare Pages dashboard
2. Select your project
3. Click on "Deployments"
4. Find the previous successful deployment
5. Click "Rollback to this deployment"

## Additional Resources

- [Expo Documentation](https://docs.expo.dev/)
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Wrangler CLI Documentation](https://developers.cloudflare.com/workers/wrangler/)
- [Model Context Protocol](https://modelcontextprotocol.io/)

## Support

For issues related to:
- **Expo build**: Check [Expo forums](https://forums.expo.dev/)
- **Cloudflare deployment**: Check [Cloudflare Community](https://community.cloudflare.com/)
- **Application bugs**: Open an issue on GitHub
