export default {
  '**/*.{ts,tsx}': (filenames) => [
    `eslint --cache --cache-location ./node_modules/.cache/.eslintcache ${filenames.join(' ')}`,
    `prettier  --loglevel warn --cach --write ${filenames.join(' ')}`,
  ],
}
