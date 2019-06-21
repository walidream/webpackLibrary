const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');  //清除

module.exports = {
	mode:'production',
	entry:{
		main:'./src/index.js',  
    },
    externals:'loadsh',
	plugins: [
		new CleanWebpackPlugin()
	],	
	output:{
        path: path.resolve(__dirname,'dist'),
        filename: 'library.js',
        library: 'library',
        libraryTarget: 'umd'
	}
}
