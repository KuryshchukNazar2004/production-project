import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            "style-loader",
            "css-loader",
            "sass-loader",
        ],
    }

    const typesctiptLoader = {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
    }

  return [
    typesctiptLoader,
    cssLoader,
  ];
}