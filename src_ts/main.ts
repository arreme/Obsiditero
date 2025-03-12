import { App, Plugin, PluginSettingTab, Setting } from 'obsidian';

export default class Obsiditero extends Plugin {
	settings: ObsiditeroSettings;

	async onload() {
		await this.loadSettings();

		// This adds a simple command that can be triggered anywhere
		this.addCommand({
			id: 'obsiditero_refresh_sql',
			name: 'Refresh Zotero Database',
			callback: () => {
				//obsiditero.loadZoteroDB(fs.readFileSync(this.settings.zoteroPath));
			}
		});

		// This adds a settings tab so the user can configure various aspects of the plugin
		this.addSettingTab(new ObsiditeroSettingsTab(this.app, this));
	}

	onunload() {
	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}

class ObsiditeroSettingsTab extends PluginSettingTab {
	plugin: Obsiditero;

	constructor(app: App, plugin: Obsiditero) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const {containerEl} = this;

		containerEl.empty();

		new Setting(containerEl)
			.setName('Zotero Data Folder Path')
			.setDesc('Where your zotero data is stored')
			.addText(text => text
				.setPlaceholder('../../ZoteroData')
				.setValue(this.plugin.settings.zoteroPath)
				.onChange(async (value) => {
					this.plugin.settings.zoteroPath = value;
					await this.plugin.saveSettings();
				}));
	}
}
