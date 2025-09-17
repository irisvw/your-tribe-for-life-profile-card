<script>
	export const prerender = true;
	import favicon from "$lib/assets/favicon.svg";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Jersey+20&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

{@render children?.()}

<style>
	/* Reset */
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:global {
		body {
			background: repeating-conic-gradient(
					rgb(255, 255, 255) 0 25%,
					#fcf3ff 0 50%
				)
				50% / 60px 60px;
		}
	}

	button,
	input,
	select,
	textarea {
		font-family: inherit;
		font-size: 100%;
	}
</style>
