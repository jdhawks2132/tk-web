<script>
	import '../../src/app.css';
	import Navbar from '../lib/components/nav/navbar.svelte';
	import Footer from '../lib/components/nav/footer.svelte';
</script>

<svelte:head>
	<title>Dallas Thunder Kitties</title>
	<meta name="description" content="Hidden Door Thunder Kitties - Softball Team from Dallas, TX" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="theme-color" content="#ffffff" />
	<link rel="icon" type="image/png" href="/favicon.png" />
</svelte:head>

<div class="main-container">
	<Navbar />
	<main class="content p-2 lg:p-11">
		<slot />
	</main>
	<Footer />
</div>

<style>
	.main-container {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	.content {
		flex-grow: 1;
	}
</style>
