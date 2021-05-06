import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";

const extensions = [".js", ".jsx"];

export default {
  input: "./src/index.js",
  output: {
    file: "./lib/index.js",
    format: "cjs",
    globals: {
      react: "React",
      "react-dom": "ReactDOM",
    },
    exports: "auto",
  },
  external: [
    "react",
    "react-dom",
    /@babel\/runtime/,
    "styled-components",
    /@fortawesome\//,
    "@aiwizo/application-styles",
  ],
  plugins: [
    peerDepsExternal(),
    postcss({
      plugins: [],
    }),
    babel({
      exclude: "node_modules/**",
      presets: [
        [
          "@babel/preset-env",
          {
            targets: {
              esmodules: true,
            },
          },
        ],
        "@babel/preset-react",
      ],
      plugins: ["@babel/transform-runtime"],
      extensions,
      babelHelpers: "runtime",
    }),
    resolve({
      extensions,
    }),
    commonjs(),
  ],
};
