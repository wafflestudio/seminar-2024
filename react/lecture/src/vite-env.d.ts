/// <reference types="vite/client" />

declare module 'virtual:lecture-contents' {
  export const contents: { folder: string; markdowns: string[] }[];
}
