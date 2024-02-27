import { type } from "os";
import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {

    const typesctiptLoader = {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
    
    }

  return [
    typesctiptLoader,
  ];
}