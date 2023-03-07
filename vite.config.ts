import { sveltekit } from '@sveltejs/kit/vite'
import { configDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		globals: true,
		environment: 'jsdom',
		include: ['src/**/*.{test,spec}.{js,ts}'],
		setupFiles: './setupTests.ts',
		coverage: {
			all: true,
			reporter: ['text', 'html'],
			src: ['./src'],
			exclude: configDefaults.coverage.exclude?.concat(['setupTest.ts']),
		},
		// Exclude playwright tests folder
		exclude: [...configDefaults.exclude, 'tests'],
	},
})
