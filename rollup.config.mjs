import pkg from "./package.json" assert { type: "json" };
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import url from "@rollup/plugin-url";
import svgr from "@svgr/rollup";
import terser from "@rollup/plugin-terser";
import { dts } from "rollup-plugin-dts";

export default [
  {
    external: ["react", "react-bootstrap"],
    input: "./src/index.ts",
    output: [
      {
        file: `./${pkg.main}`,
        format: "cjs",
      },
      {
        file: `./${pkg.module}`,
        format: "esm",
      },
    ],
    plugins: [
      typescript({
        tsconfig: "./tsconfig.json",
        rootDir: "./src",
        declarationDir: "dist/types",
      }),
      postcss({
        extract: "index.css",
        modules: true,
        use: ["sass"],
        minimize: true,
      }),
      url(),
      svgr({ icon: true }),
      terser(),
    ],
  },
  {
    input: "./dist/types/index.d.ts",
    output: [{ file: `./${pkg.types}`, format: "esm" }],
    plugins: [dts()],
  },
];
