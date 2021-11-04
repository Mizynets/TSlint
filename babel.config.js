module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.json',
          '.native.js',
        ],
        alias: {
          api: './src/api',
          store: './src/store',
          utils: './src/utils',
          hooks: './src/hooks',
          config: './src/config',
          theme: './src/theme',
          contexts: './src/contexts',
          assets: './src/assets',
          screens: './src/screens',
          constants: './src/constants',
          components: './src/components',
          navigation: './src/navigation',
        },
      },
    ],
  ],
};
