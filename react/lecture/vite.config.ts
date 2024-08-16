import react from '@vitejs/plugin-react-swc';
import fs from 'fs/promises';
import { defineConfig, Plugin } from 'vite';

const lecturePlugin = (): Plugin => {
  const virtualModuleId = 'virtual:lecture-contents';

  return {
    name: 'lecture-plugin',
    resolveId(id) {
      if (id === virtualModuleId) return virtualModuleId;
    },
    async load(id) {
      if (id === virtualModuleId) {
        const folders = await fs.readdir('./contents').catch(() => []);

        const foldersWithFiles = await Promise.all(
          folders.map(async (folder) => {
            const files = (
              await fs.readdir(`./contents/${folder}`).catch(() => [])
            )
              .filter((file) => file.endsWith('.md'))
              .sort();

            const markdowns = await Promise.all(
              files.map(async (file) => {
                const markdown = await fs.readFile(
                  `./contents/${folder}/${file}`,
                  'utf-8',
                );
                return markdown;
              }),
            );

            return { folder, markdowns };
          }),
        );

        return `export const contents = ${JSON.stringify(foldersWithFiles)};`;
      }
    },
  };
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), lecturePlugin()],
  server: { port: 3025 },
  resolve: { alias: { '@': '/src' } },
  assetsInclude: ['**/*.md'],
});
