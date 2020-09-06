const path = require('path')

const postCSSPlugins = [
    require('postcss-import'),
    require('postcss-mixins')({
        mixinDir: path.join(__dirname, 'mixins')
    }
    ),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer')
]

module.exports = {
    target: 'web',
    entry: {
        app: ['./app/assets/scripts/App.js']
    },
    output: {
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'app')
    },
    mode: 'development',
    watch: true,
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader?url=false', {loader: 'postcss-loader', options: {plugins: postCSSPlugins} }]
            }
        ]
    }
}