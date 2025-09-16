<script>
	export const prerender = true;
	import favicon from "$lib/assets/favicon.svg";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}

<style>
	/* Reset */
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	button,
	input,
	select,
	textarea {
		font-family: inherit;
		font-size: 100%;
	}
</style>
