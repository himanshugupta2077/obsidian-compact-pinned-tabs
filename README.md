# Compact Pinned Tabs

Makes Obsidian's pinned tabs behave more like browser pinned tabs:

- **Shrink to fit.** A pinned tab is exactly as wide as its title instead of taking an equal share of the tab bar.
- **No pin icon.** The pin icon on pinned tabs is hidden. Unpin from the tab's right-click menu.
- **Close-tab hotkey ignores them.** Cmd/Ctrl+W does nothing on a pinned tab. Normally Obsidian unpins it on desktop and closes it on phones.

Unpinned tabs are unchanged.

## Install

Copy `main.js`, `manifest.json` and `styles.css` into `<vault>/.obsidian/plugins/compact-pinned-tabs/`, then enable **Compact Pinned Tabs** under Settings → Community plugins.

## Development

```sh
npm install
VAULTS="/path/to/vault" npm run build   # builds and installs into each vault (colon-separated)
npm run lint
```
