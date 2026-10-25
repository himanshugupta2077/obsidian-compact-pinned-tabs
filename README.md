# Compact Pinned Tabs

Makes Obsidian's pinned tabs behave more like browser pinned tabs:

- **Shrink to fit.** A pinned tab is exactly as wide as its title instead of taking an equal share of the tab bar.
- **No pin icon.** The pin icon on pinned tabs is hidden. Unpin from the tab's right-click menu.
- **Close-tab hotkey ignores them.** Cmd/Ctrl+W does nothing on a pinned tab. Normally Obsidian unpins it on desktop and closes it on phones.

On phones, which have no tab bar, the tab switcher puts pinned tabs first and marks them with an accent outline, an accent pin badge and an accent title.

Unpinned tabs are unchanged.

## Install

Download `main.js`, `manifest.json` and `styles.css` from the [latest release](https://github.com/himanshugupta2077/obsidian-compact-pinned-tabs/releases/latest) into `<vault>/.obsidian/plugins/compact-pinned-tabs/`, then enable **Compact Pinned Tabs** under Settings → Community plugins.

## Development

```sh
npm install
VAULTS="/path/to/vault" npm run build   # builds and installs into each vault (colon-separated)
npm run lint
```
