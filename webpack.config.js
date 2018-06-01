const path=require("path");
const HtmlWebpackPlugin=require("html-webpack-plugin");


module.exports={
	entry : "./src/main.js",
	output:	{
		path:path.resolve(__dirname,"dist"),
		filename: "main.js"
	},
	plugins:[
	new HtmlWebpackPlugin({
		"filename" : "newIdex.html",
   		 "template":	"dist/index.html"
	})
	]
};