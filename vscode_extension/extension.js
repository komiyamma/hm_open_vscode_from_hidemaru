const vscode = require('vscode');
const fs = require('fs');
const path = require('path');

// 一時フォルダのパス (OSによって異なるので注意)
const tempDir = process.env.TEMP || process.env.TMP;

// ファイル名
const fileName = 'HmOpenVSCodeFromHidemaru.txt';

// ファイルのフルパス
const fileFullPath = path.join(tempDir, fileName);

function activate(context) {

    // ファイルの存在を確認し、存在すれば削除する
    fs.access(fileFullPath, fs.constants.F_OK, (err) => {
        if (err) {
            ; // ファイルは存在しない
        } else {
            // ソースリポジトリの表示
            vscode.commands.executeCommand('workbench.view.scm');

            // ファイルが存在する場合は削除する
            fs.unlink(fileFullPath, (err) => { });
         }
    });
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
}
