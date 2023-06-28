import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import pkg from "./package.json" assert { type: "json" };
import typescript from "rollup-plugin-typescript2";
import scss from "rollup-plugin-scss";
import { babel } from '@rollup/plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';


export default {
  input: "stories/main.js",
  /****  pkg.main and pkg.module refer to properties in the package.json file of your project
  These properties define the output file paths for the bundled code.
   pkg.main: This property specifies the entry point for your package/module. It is typically the CommonJS (CJS) module format.
   pkg.module: This property specifies the entry point for the module in ECMAScript module (ESM) format.
   ***/
  output: [
    { file: pkg.main, format: "cjs" ,   sourcemap: true }, // CJS is short for CommonJS
    { file: pkg.module, format: "esm" , sourcemap: true}, // ES Modules (or short: ESM)
  ],

  plugins: [
    peerDepsExternal(),
    resolve(), // so Rollup can find `ms`
    commonjs(), // so Rollup can convert `ms` to an ES module
    typescript(),
    // scss(),
    scss({
      output: 'dist/bundle.css',
    }),
    babel({ babelHelpers: "bundled" }),
  ],
  external: Object.keys(pkg.peerDependencies || {}),
};

