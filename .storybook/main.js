const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

const publicPath = "http://localhost:6006/";
module.exports = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-actions",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "storybook-addon-designs",
    "@storybook/preset-scss",
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push(
      {
        // this is for both less and scss
        test: /.*\.(?:le|c|sc)ss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              url: false,
            },
          },
          {
            loader: "scss-loader",
            options: {
              modules: true,
              url: false,
            },
          },
        ],
      },
      {
        test: /\.(jpg|gif|png|svg|ico)$/i,
        include: path.join(__dirname, "public"),
        loader: "url-loader?name=/public/images/[name].[ext]",
        // use: ['url-loader', {
        //   loader: 'file-loader',
        //   // options: {
        //   //   publicPath: path.join(__dirname, "public")
        //   // }
        // }],
      }
    );
    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: "[name]-[contenthash].css",
        chunkFilename: "[id]-[contenthash].css",
      })
    );
    // config.output.publicPath = path.resolve(__dirname, "http:localhost:6006/");
    return config;
  },
};
