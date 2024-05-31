import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json'; // Import the JSON plugin

export default {
  input: 'src/producer.ts',
  output: {
    dir: 'dist',
    format: 'esm',
    entryFileNames: '[name].mjs',
  },
  plugins: [resolve(), commonjs(), json(), typescript()], // Add the JSON plugin here
};
