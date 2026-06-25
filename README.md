# GitHub API Proxy Worker

This Cloudflare Worker proxies requests to the GitHub API to improve connectivity.

> **Note**: This directory allows you to manually deploy and customize the worker. If you prefer a **One-Click Deploy** experience, use the button in the [documentation](https://docs.moire.blog/advanced/api-proxy), which uses the dedicated [github-api-proxy](https://github.com/moirelog/github-api-proxy) repository.

## Deployment

1.  Navigate to this directory:
    ```bash
    cd worker
    ```

2.  Login to Cloudflare (if not already logged in):
    ```bash
    npx wrangler login
    ```

3.  Deploy:
    ```bash
    npx wrangler deploy
    ```

## Configuration

Modify `wrangler.json` if you need to change the worker name or compatibility date.
