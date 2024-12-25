/// <reference types="vite/client" />
/// <reference path="vite-plugin-svgr.d.ts" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
