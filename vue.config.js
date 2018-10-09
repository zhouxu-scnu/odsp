const path = require('path');
const SpritesmithPlugin = require('webpack-spritesmith');
module.exports = {
	configureWebpack: {
		plugins: [
			new SpritesmithPlugin({
				src: {
					cwd: path.resolve(__dirname, 'src/assets/images/icons/'),
					glob: '*.png'
				},
				target: {
					image: path.resolve(__dirname, 'src/assets/css/sprite.png'),
					css: path.resolve(__dirname, 'src/assets/css/sprite.css')
				},
				apiOptions: {
					cssImageRef: './sprite.png'
				}
			})
		]
	}
}