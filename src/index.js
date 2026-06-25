export default {
  async fetch(request) {
    const url = new URL(request.url);
    
    // Forward request to GitHub API
    const githubUrl = `https://api.github.com${url.pathname}${url.search}`;
    
    const githubRequest = new Request(githubUrl, {
      method: request.method,
      headers: request.headers,
      body: request.body,
    });
    
    return await fetch(githubRequest);
  }
}
