import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		appDir: 'app',
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html', // Enable client-side routing for deep links!
			precompress: false,
			strict: false
		}),
		paths: {
			base: process.env.BASE_PATH || ''
		}
	}
};

export default config;