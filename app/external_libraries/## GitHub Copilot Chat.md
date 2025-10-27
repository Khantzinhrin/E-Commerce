## GitHub Copilot Chat

- Extension Version: 0.27.0 (prod)
- VS Code: vscode/1.100.0
- OS: Windows

## Network

User Settings:
```json
  "github.copilot.advanced.debug.useElectronFetcher": true,
  "github.copilot.advanced.debug.useNodeFetcher": false,
  "github.copilot.advanced.debug.useNodeFetchFetcher": true
```

Connecting to https://api.github.com:
- DNS ipv4 Lookup: 20.205.243.168 (145 ms)
- DNS ipv6 Lookup: Error (259 ms): getaddrinfo ENOTFOUND api.github.com
- Proxy URL: None (2 ms)
- Electron fetch (configured): HTTP 200 (1095 ms)
- Node.js https: HTTP 200 (822 ms)
- Node.js fetch: HTTP 200 (1170 ms)
- Helix fetch: HTTP 200 (1091 ms)

Connecting to https://api.individual.githubcopilot.com/_ping:
- DNS ipv4 Lookup: 140.82.112.21 (53 ms)
- DNS ipv6 Lookup: Error (185 ms): getaddrinfo ENOTFOUND api.individual.githubcopilot.com
- Proxy URL: None (13 ms)
- Electron fetch (configured): HTTP 200 (988 ms)
- Node.js https: HTTP 200 (1497 ms)
- Node.js fetch: HTTP 200 (910 ms)
- Helix fetch: HTTP 200 (1024 ms)

## Documentation

In corporate networks: [Troubleshooting firewall settings for GitHub Copilot](https://docs.github.com/en/copilot/troubleshooting-github-copilot/troubleshooting-firewall-settings-for-github-copilot).