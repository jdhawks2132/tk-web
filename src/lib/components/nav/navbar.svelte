<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let open = false;
</script>

<nav class="bg-charcoal-gray text-light-gray">
	<div class="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
		<div class="flex justify-between items-center">
			<div>
				<a href="/" class="text-2xl font-bold text-light-gray hover:text-snapchat-yellow"
					>Thunder Kitties</a
				>
			</div>
			<div>
				<button
					on:click={() => (open = !open)}
					class="text-light-gray hover:text-snapchat-yellow md:hidden focus:outline-none"
				>
					<svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
						{#if open}
							<path
								fill-rule="evenodd"
								d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-5.364-5.364-5.364 5.364a1 1 0 1 1-1.414-1.414l5.364-5.364-5.364-5.364a1 1 0 0 1 1.414-1.414l5.364 5.364 5.364-5.364a1 1 0 0 1 1.414 1.414l-5.364 5.364 5.364 5.364z"
							/>
						{:else}
							<path
								fill-rule="evenodd"
								d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
							/>
						{/if}
					</svg>
				</button>
			</div>
		</div>
		<div class="md:flex items-center" class:hidden={!open} transition:fade={{ duration: 200 }}>
			<div class="flex flex-col md:flex-row md:mx-6 text-center">
				<a href="#about" class="my-1 md:mx-4 md:my-0 hover:text-snapchat-yellow"> About </a>
				<a href="#events" class="my-1 md:mx-4 md:my-0 hover:text-snapchat-yellow"> Events </a>
				<a href="#schedule" class="my-1 md:mx-4 md:my-0 hover:text-snapchat-yellow"> Schedule </a>
				<a href="#contact" class="my-1 md:mx-4 md:my-0 hover:text-snapchat-yellow"> Contact </a>
			</div>
		</div>
	</div>
</nav>
