module.exports = {
    entry: [
        './resources/react/app.js'
    ],
    output: {
        path: __dirname +'/public/js/',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel'
            }
        ]
    }
};