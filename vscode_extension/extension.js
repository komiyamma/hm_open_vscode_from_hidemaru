const vscode = require('vscode');

function activate(context) {
    vscode.commands.executeCommand('workbench.view.scm');
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
}
