const config = {
 //webpack folder's entry js - excluded from jekyll's build process.
    entry:'./webpack/entry.js',
    output: {
      path: __dirname + "/assets/js/",
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules)/,
          use: [
            {
              loader: 'babel-loader',
              query: {
                presets: ['react', 'es2015'],
                plugins: ['transform-class-properties']
              }
            }
          ]
        }
      ]
    }
};

module.exports = config;
