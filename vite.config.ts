import RubyPlugin from 'vite-plugin-ruby'
import FullReload from 'vite-plugin-full-reload'
import { defineConfig } from 'vite'
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { sveltePreprocess } from 'svelte-preprocess/dist/autoProcess';

export default defineConfig({
	plugins: [
    svelte(),
    RubyPlugin(),
    FullReload(['config/routes.rb', 'app/views/**/*']),
  ],
});
