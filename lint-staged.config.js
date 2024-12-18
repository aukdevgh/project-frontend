export default {
  '**/*.{ts,tsx}': (filenames) => [
    `eslint --cache --cache-location ./node_modules/.cache/.eslintcache --fix ${filenames.join(' ')}`,
    `prettier  --loglevel warn --cach --write ${filenames.join(' ')}`,
  ],
  '*.scss': (filenames) => [
    `stylelint --cache --cache-location ./node_modules/.cache/.stylelintcache --fix ${filenames.join(' ')}`,
    `prettier  --loglevel warn --cach --write ${filenames.join(' ')}`,
  ],
  '*.{json,yml}': (filenames) => `prettier  --loglevel warn --cach --write ${filenames.join(' ')}`,
}
