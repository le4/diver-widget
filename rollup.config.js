import typescript2 from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs'; // 插件将CommonJS模块转换为 ES2015 提供给 Rollup 处理 
import resolve from '@rollup/plugin-node-resolve'; // 帮助 Rollup 查找外部模块，然后安装
import babel from 'rollup-plugin-babel'; // 方便使用 javascript 的新特性,es新特性的解析
import pkg from './package.json';
import { terser } from "rollup-plugin-terser";
import postcss from 'rollup-plugin-postcss'

let plugins = [
  postcss({
    extensions: ['.css']
  }),
  resolve(),
  typescript2({useTsconfigDeclarationDir:true}),
  babel({
    exclude: '**/node_modules/**',
    runtimeHelpers: true
  }),
  commonjs(),
  terser()
]

export default {
  input: 'index.tsx',
  moduleName: 'diver-widget',
  external: [...Object.keys(pkg.dependencies)],
  // 外部引用 防止将某些 import 的包(package)打包到bundle 中，而是在运行时(runtime)再去从外部获取这些扩展依赖

  globals: {
    react: 'React',
    "react-dom": "ReactDOM",
  },
  output: [
    { file: pkg.browser, format: 'umd', name: 'DingteamHelper' },
    { file: pkg.main, format: 'cjs', exports: 'named' },
    { file: pkg.module, format: 'esm' }
  ],
  plugins
}