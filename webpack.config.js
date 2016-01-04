var path = require("path");

module.exports = {
    
    context: path.resolve(__dirname, "client"),
    entry: "./app",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader' },
            // **IMPORTANT** This is needed so that each bootstrap js file required by
            // bootstrap-webpack has access to the jQuery object
            { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },

            // Needed for the css-loader when [bootstrap-webpack](https://github.com/bline/bootstrap-webpack)
            // loads bootstrap's css.
            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
            {
                test: /\.less$/,
                loader: "style!css!less"
            },
            {
                test: /\.scss$/,
                loader: "style-loader!css-loader!sass-loader"
            },

            {
                //IMAGE LOADER
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'file'
            }
            //{
            //    test: /\.html$/,
            //    loader: 'ngtemplate?pathSep=\\!html'
            //}
            //{
            //    test: /\.html$/,
            //    loader: 'ngtemplate?relativeTo=' + (path.resolve(__dirname, './app')) + '/!html'
            //}
        ]
    }
}