export default {
  '**/*.{ts,tsx}': (filenames) => [
    `eslint --cache --cache-location ./node_modules/.cache/.eslintcache --fix ${filenames
      .map((file) => `"${file}"`)
      .join(' ')}`,
    `prettier --loglevel warn --cache --write ${filenames.map((file) => `"${file}"`).join(' ')}`,
  ],
  '*.scss': (filenames) => [
    `stylelint --cache --cache-location ./node_modules/.cache/.stylelintcache --fix ${filenames
      .map((file) => `"${file}"`)
      .join(' ')}`,
    `prettier --loglevel warn --cache --write ${filenames.map((file) => `"${file}"`).join(' ')}`,
  ],
  '*.{json,yml}': (filenames) =>
    `prettier --loglevel warn --cache --write ${filenames.map((file) => `"${file}"`).join(' ')}`,
}
