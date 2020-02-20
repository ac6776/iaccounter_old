const path = require("path");

module.exports = {
    entry: path.join(__dirname, "src", "main", "resources", "assets", "scripts", "index.js"),
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            // {
            //     test: /\.(eot|svg|ttf|woff|woff2)$/,
            //     exclude: /(node_modules)/,
            //     use: ["file-loader"]
            // }
        ]
    },
    resolve: {
        modules: [
            path.join(__dirname, "src", "main", "resources", "assets", "scripts"),
            path.join(__dirname, "node_modules")
        ]
    }
};
