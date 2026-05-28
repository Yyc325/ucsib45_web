const fs = require('fs');
const path = require('path');

export function getFileContent(pathUrl) {
	return new Promise((resolve, reject) => {
		const filePath = path(__dirname, pathUrl)

		fs.readFile(filePath, 'utf-8', (err, data) => {
			if (err) return;
			console.log(data)
			resolve(data)
		})
	})

}
