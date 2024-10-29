import react from '@woohm402/eslint-config-react';

export default [
  {
    ignores: [
      '.yarn',
      'dist',
      'eslint.config.js',
      'node_modules',
      'postcss.config.js',
    ],
  },
  ...react({
    tsconfigRootDir: import.meta.dirname,
  }),
];
