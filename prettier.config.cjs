module.exports = {
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  importOrder: [
    'server-only',
    '<THIRD_PARTY_MODULES>',
    '^@/(.*)$',
    '^[./]',
    '^@/schemas(.*)$',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  tailwindFunctions: ['clsx', 'tw', 'cva'],
  plugins: [
    require.resolve('@trivago/prettier-plugin-sort-imports'),
    require.resolve('prettier-plugin-astro'),
    require.resolve('prettier-plugin-tailwindcss'),
    // require.resolve('prettier-plugin-organize-imports'),
  ],
  overrides: [
    {
      files: '*.astro',
      options: { parser: 'astro' },
    },
  ],
}
