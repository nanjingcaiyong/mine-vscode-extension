import * as vscode from 'vscode';
export const registModuleMenuItem = (context: vscode.ExtensionContext) => {
  let disposable = vscode.commands.registerCommand('rich.module', () => {
    vscode.window.showInformationMessage('create module');
  });

  context.subscriptions.push(disposable);
};