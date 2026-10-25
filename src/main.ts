import { Command, Plugin, WorkspaceLeaf } from "obsidian";

// Internals the plugin relies on; none of these are in Obsidian's public typings.
interface Commands {
	commands: Record<string, Command>;
}
interface WorkspaceInternals {
	activeLeaf: WorkspaceLeaf | null;
	isInSidebar(leaf: WorkspaceLeaf): boolean;
}
interface PinnableLeaf extends WorkspaceLeaf {
	pinned?: boolean;
}

export default class CompactPinnedTabsPlugin extends Plugin {
	onload() {
		this.app.workspace.onLayoutReady(() => this.guardCloseCommand());
	}

	/**
	 * Obsidian's close-tab hotkey (Cmd/Ctrl+W) unpins a pinned tab on desktop and closes it on phones.
	 * Wrap the command so it does nothing at all when the tab it would act on is pinned.
	 */
	private guardCloseCommand() {
		const command = (this.app as unknown as { commands: Commands }).commands.commands["workspace:close"];
		const original = command?.checkCallback;
		if (!command || !original) return;

		command.checkCallback = (checking: boolean) => {
			if (this.closeTarget()?.pinned) return true; // swallow the hotkey so nothing else handles it
			return original.call(command, checking);
		};
		this.register(() => {
			command.checkCallback = original;
		});
	}

	/** The leaf `workspace:close` would act on: a focused sidebar leaf, otherwise the most recent main-area tab. */
	private closeTarget(): PinnableLeaf | null {
		const workspace = this.app.workspace;
		const internals = workspace as unknown as WorkspaceInternals;
		const active = internals.activeLeaf;
		if (active && internals.isInSidebar(active)) return active;
		return workspace.getMostRecentLeaf(workspace.rootSplit);
	}
}
