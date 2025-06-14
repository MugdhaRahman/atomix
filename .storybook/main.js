const path = require('path');

module.exports = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  docs: {
    autodocs: 'tag',
  },
  // Serve the entire source directory as static files
  staticDirs: ['../src'],
  webpackFinal: async (config) => {
    if (!config.resolve) config.resolve = {};
    if (!config.resolve.alias) config.resolve.alias = {};
    
    // Add path aliases
    config.resolve.alias['@'] = path.resolve(__dirname, '../src');
    
    // Make sure we have a module and rules
    if (!config.module) config.module = { rules: [] };
    if (!config.module.rules) config.module.rules = [];
    
    // Set target and output configuration to fix chunk format error
    config.target = 'web';
    if (!config.output) config.output = {};
    config.output.chunkFormat = 'array-push';
    
    // Handle TypeScript files
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', { 
            targets: '> 0.5%, last 2 versions, not dead',
            modules: false
          }],
          '@babel/preset-typescript',
          ['@babel/preset-react', { runtime: 'automatic' }]
        ],
      },
    });
    
    // Handle SCSS files
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });
    
    // Handle image files
    config.module.rules.push({
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
    });
    
    // Ensure TypeScript file extensions are handled
    if (!config.resolve.extensions) {
      config.resolve.extensions = ['.js', '.jsx'];
    }
    config.resolve.extensions.push('.ts', '.tsx');
    
    return config;
  }
};