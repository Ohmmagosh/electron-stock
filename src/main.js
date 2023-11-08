const { app, BrowserWindow } = require('electron')
const path = require('path')

const createWindow = () => {
	const win = new BrowserWindow({
		title: 'Stocks',
		width: 800,
		height: 600
	})

	win.loadFile(path.join(__dirname,'./renderer/index.html'));
}

app.whenReady().then(() => {
	createWindow()
	app.on('activate', () => {
		if (BrowserWindow.getAllWindows().length === 0) {
			createWindow()
		}
	});
	console.log('hello')
});

