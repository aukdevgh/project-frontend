/// <reference types="vite/client" />
/// <reference path="vite-plugin-svgr.d.ts" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_IMAGE_URL: string
  readonly VITE_HOST_NAME: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
