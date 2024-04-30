import * as vscode from 'vscode';
import { registLinkBaidu } from './commands';
import { registModuleMenuItem } from './menus';
import { registApiCompletion } from './completions';

export function activate(context: vscode.ExtensionContext) {
	// 注册命令
	registLinkBaidu(context);
	// 注册菜单
	registModuleMenuItem(context);
	// 注册补全
	registApiCompletion(context);
}
