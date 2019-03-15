import path from 'path'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

const rootDir = path.resolve(__dirname)
const dstDir = path.join(rootDir, 'dist')

const extensions = ['.ts', '.js', 'tsx']

export default {
  input: {
    index: 'src/index.js'
  },
  output: {
    dir: dstDir,
    format: 'cjs',
    name: 'Xrm.Test'
  },
  plugins: [
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        'node_modules/react/index.js': [
          'Component',
          'PureComponent',
          'Fragment',
          'Children',
          'createElement'
        ]
      }
    }),
    resolve({
      jsnext: true,
      extensions
    }),
    babel({
      extensions
    })
  ]
}
