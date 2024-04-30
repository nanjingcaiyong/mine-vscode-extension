import * as vscode from 'vscode';
import * as fs from 'fs';


export const registApiCompletion = (context: vscode.ExtensionContext) => {
	/**
	 * javascript
	 * typescript
	 * html
	 * css
	 * vue
	 * plaintext
	 * markdown
	 */
	const provider1 = vscode.languages.registerCompletionItemProvider(['vue', 'typescript'], {

		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {

			const apiCharacterCompletion = new vscode.CompletionItem('APIS');
			apiCharacterCompletion.commitCharacters = ['.'];
			apiCharacterCompletion.documentation = new vscode.MarkdownString('Press `.` to get `apis`');

			return [
				apiCharacterCompletion
			];
		}
	});

	const provider2 = vscode.languages.registerCompletionItemProvider(['vue', 'typescript'], {
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

				const linePrefix = document.lineAt(position).text.slice(0, position.character);
				if (!linePrefix.endsWith('APIS.')) {
					return undefined;
				}
				const rootPath = vscode.workspace.workspaceFolders?.[0]?.uri?.path;
				const path = rootPath + '/src/server/apis/apis.json';
				const content = fs.readFileSync(path, {
					encoding: 'utf-8'
				});
				const list = JSON.parse(content);
				return list.map((item: any) => {
					const command = new vscode.CompletionItem(item.name, vscode.CompletionItemKind.Method);
					command.insertText = new vscode.SnippetString(`${item.name}`+'(${0})');
					return command;
				});
			}
		},
		'.' // triggered whenever a '.' is being typed
	);

	context.subscriptions.push(provider1, provider2);
};