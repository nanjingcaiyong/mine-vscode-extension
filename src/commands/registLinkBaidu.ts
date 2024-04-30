import * as vscode from 'vscode';
import * as os from 'os';
import { exec } from 'child_process';
enum PlatForm {
    darwin = 'darwin', // mac
    linux = 'linux',  // linux
    windows = 'win32' // windows
}
const platform = os.platform();

export const registLinkBaidu = (context: vscode.ExtensionContext) => {
  let disposable = vscode.commands.registerCommand('rich.registLinkBaidu', () => {
      vscode.window.showInformationMessage('是否前往百度', '是', '否', '不再提示')
        .then(res => {
            if (res === '是') {
                platform === PlatForm.darwin ? exec(`open https://www.baidu.com/`) : exec(`star thttps://www.baidu.com/`);
            }
        });
    });
    context.subscriptions.push(disposable);
};