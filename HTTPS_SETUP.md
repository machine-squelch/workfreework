# HTTPS Setup for GitHub Pages

## Current Status
GitHub Pages automatically provides HTTPS for custom domains. The site is configured with:
- Custom domain: `workfreework.com` (via `public/CNAME`)
- DNS configured to point to GitHub Pages
- Static export enabled (`output: 'export'` in next.config.js)

## Steps to Enable HTTPS

### 1. Verify DNS Configuration
Ensure your domain registrar has these DNS records:

```
A     @     185.199.108.153
A     @     185.199.109.153
A     @     185.199.110.153
A     @     185.199.111.153
CNAME www   machine-squelch.github.io.
```

### 2. Enable HTTPS in GitHub Pages Settings

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under "Custom domain", verify `workfreework.com` is set
4. Check the box for **"Enforce HTTPS"**

### 3. Wait for Certificate Provisioning
- GitHub automatically provisions a Let's Encrypt SSL certificate
- This usually takes 10-60 minutes after DNS propagation
- You'll see a checkmark when ready

### 4. Verify HTTPS is Working

Test these URLs:
- https://workfreework.com (should work)
- http://workfreework.com (should redirect to HTTPS)
- https://www.workfreework.com (should work)
- http://www.workfreework.com (should redirect to HTTPS)

## Troubleshooting

### "Certificate not yet created"
- DNS propagation can take up to 48 hours
- Verify DNS records are correct
- Remove and re-add the custom domain in GitHub Pages settings

### "Certificate mismatch"
- Clear your browser cache
- Try in incognito/private mode
- Check DNS propagation: https://www.whatsmydns.net/

### Mixed Content Warnings
All external resources should use HTTPS:
- ✅ Google Fonts: https://fonts.googleapis.com
- ✅ Plausible Analytics: https://plausible.io
- ✅ Images and assets: served from your domain

## Security Headers
The site already includes comprehensive security headers via middleware:
- Strict-Transport-Security (HSTS)
- Content-Security-Policy (CSP)
- X-Frame-Options
- X-Content-Type-Options

## Monitoring
Check your HTTPS configuration:
- SSL Labs Test: https://www.ssllabs.com/ssltest/analyze.html?d=workfreework.com
- Security Headers: https://securityheaders.com/?q=workfreework.com

## Certificate Renewal
GitHub Pages automatically renews Let's Encrypt certificates before expiration. No action required.
