import { join } from "path";

const context = join(__dirname, "src");

export default {
  context,
  entry: "./index",
  output: {
    path: join(__dirname, "dist"),
    library: "microLib",
    libraryTarget: "umd",
    globalObject: "this",
  },
  mode: "none",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
        include: context,
      },
    ],
  },
};
