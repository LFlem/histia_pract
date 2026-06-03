const internationalization = {
  "locales": [
    "en",
    "fr"
  ],
  "requiredLocales": [
    "en",
    "fr"
  ],
  "strictMode": "inclusive",
  "defaultLocale": "fr"
};
const routing = {
  "mode": "prefix-no-default",
  "storage": {
    "cookies": [
      {
        "name": "INTLAYER_LOCALE",
        "attributes": {}
      }
    ],
    "headers": [
      {
        "name": "x-intlayer-locale"
      }
    ]
  },
  "basePath": ""
};
const editor = {
  "editorURL": "http://localhost:8000",
  "cmsURL": "https://app.intlayer.org",
  "backendURL": "https://back.intlayer.org",
  "port": 8000,
  "enabled": false,
  "dictionaryPriorityStrategy": "local_first",
  "liveSync": false,
  "liveSyncPort": 4000,
  "liveSyncURL": "http://localhost:4000"
};
const log = {
  "mode": "default",
  "prefix": "\u001b[38;5;239m[intlayer] \u001b[0m"
};
const system = {
  "baseDir": "C:\\Users\\myhan\\Desktop\\Mes Projets\\histia_pract",
  "moduleAugmentationDir": "C:\\Users\\myhan\\Desktop\\Mes Projets\\histia_pract\\.intlayer\\types",
  "unmergedDictionariesDir": "C:\\Users\\myhan\\Desktop\\Mes Projets\\histia_pract\\.intlayer\\unmerged_dictionary",
  "remoteDictionariesDir": "C:\\Users\\myhan\\Desktop\\Mes Projets\\histia_pract\\.intlayer\\remote_dictionary",
  "dictionariesDir": "C:\\Users\\myhan\\Desktop\\Mes Projets\\histia_pract\\.intlayer\\dictionary",
  "dynamicDictionariesDir": "C:\\Users\\myhan\\Desktop\\Mes Projets\\histia_pract\\.intlayer\\dynamic_dictionary",
  "fetchDictionariesDir": "C:\\Users\\myhan\\Desktop\\Mes Projets\\histia_pract\\.intlayer\\fetch_dictionary",
  "typesDir": "C:\\Users\\myhan\\Desktop\\Mes Projets\\histia_pract\\.intlayer\\types",
  "mainDir": "C:\\Users\\myhan\\Desktop\\Mes Projets\\histia_pract\\.intlayer\\main",
  "configDir": "C:\\Users\\myhan\\Desktop\\Mes Projets\\histia_pract\\.intlayer\\config",
  "cacheDir": "C:\\Users\\myhan\\Desktop\\Mes Projets\\histia_pract\\.intlayer\\cache",
  "tempDir": "C:\\Users\\myhan\\Desktop\\Mes Projets\\histia_pract\\.intlayer\\tmp"
};
const content = {
  "fileExtensions": [
    ".content.ts",
    ".content.js",
    ".content.cjs",
    ".content.mjs",
    ".content.json",
    ".content.json5",
    ".content.jsonc",
    ".content.tsx",
    ".content.jsx",
    ".content.md",
    ".content.mdx",
    ".content.yaml",
    ".content.yml"
  ],
  "contentDir": [
    "C:\\Users\\myhan\\Desktop\\Mes Projets\\histia_pract"
  ],
  "codeDir": [
    "C:\\Users\\myhan\\Desktop\\Mes Projets\\histia_pract"
  ],
  "excludedPath": [
    "**/node_modules/**",
    "**/dist/**",
    "**/build/**",
    "**/.intlayer/**",
    "**/.next/**",
    "**/.nuxt/**",
    "**/.expo/**",
    "**/.vercel/**",
    "**/.turbo/**",
    "**/.tanstack/**"
  ],
  "watch": true
};
const ai = {};
const dictionary = {
  "fill": true,
  "contentAutoTransformation": false,
  "location": "local",
  "importMode": "static"
};
const build = {
  "mode": "auto",
  "minify": false,
  "purge": false,
  "traversePattern": [
    "**/*.{tsx,ts,js,mjs,cjs,jsx,vue,svelte,astro}",
    "!**/node_modules/**",
    "!**/dist/**",
    "!**/build/**",
    "!**/.intlayer/**",
    "!**/.next/**",
    "!**/.nuxt/**",
    "!**/.expo/**",
    "!**/.vercel/**",
    "!**/.turbo/**",
    "!**/.tanstack/**",
    "!**/*.config.*",
    "!**/*.test.*",
    "!**/*.spec.*",
    "!**/*.stories.*",
    "!**/*.d.ts",
    "!**/*.d.ts.map",
    "!**/*.map"
  ],
  "outputFormat": [
    "esm",
    "cjs"
  ],
  "cache": true,
  "checkTypes": false
};
const compiler = {
  "enabled": true,
  "dictionaryKeyPrefix": "",
  "noMetadata": false,
  "saveComponents": false
};

export { internationalization, routing, editor, log, system, content, ai, dictionary, build, compiler };
