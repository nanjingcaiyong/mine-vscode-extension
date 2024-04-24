import * as vscode from 'vscode';
import * as os from 'os';

enum PlatForm {
	darwin = 'darwin', // mac
	linux = 'linux',  // linux
	windows = 'win32' // windows
}

const platform = os.platform();

export function activate(context: vscode.ExtensionContext) {
	
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "cupshe-element" is now active!');

	let disposable = vscode.commands.registerCommand('cupshe-element.helloWorld', () => {

		if (platform === PlatForm.darwin) {
			vscode.window.showInformationMessage(`${PlatForm.darwin}`);
		}
	});
	context.subscriptions.push(disposable);
}

export function deactivate() {}
