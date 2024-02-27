import webpack from "webpack";
import { BuildOptions } from "./types/config";
import { buildResolvers } from "./buildResolvers";
import { buildPlugins } from "./buildPlugins";
import path from "path";
import { buildLoaders } from "./buildLoaders";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const { paths, mode } = options;
    return {
        mode: mode === "development" ? "development" : "production",
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(options), 
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolvers(),
    };
}