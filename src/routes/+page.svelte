<script>
	import { fly, scale } from 'svelte/transition';
</script>

<section
	id="hero"
	class="hero lg:min-h-[75vh] flex flex-col lg:flex-row lg:justify-around items-center p-11"
>
	<div class="hero-text text-center w-ful lg:w-1/2">
		<h1
			class="text-4xl lg:text-5xl font-bold text-charcoal-gray"
			transition:fly={{ y: -50, duration: 1000 }}
		>
			Dallas Thunder Kitties
		</h1>
		<p class="text-medium-gray font-bold my-4 mx-auto w-full lg:w-4/5">
			The Thunder Kitties, a Dallas-based softball team, proudly participates in the Pegasus Slow
			Pitch Softball League. If you're interested in joining our team or exploring sponsorship
			opportunities, please don't hesitate to get in touch with us.
		</p>
		<button
			class="cta-button bg-honey-yellow text-charcoal-gray py-2 px-6 rounded-lg font-bold transition-colors duration-200 hover:bg-snapchat-yellow"
			on:click={() => alert('Customize your action')}
		>
			Contact Us!
		</button>
	</div>
	<div class="hero-image flex justify-center items-center w:11/12 lg:w-1/2">
		<img src="/images/tk_hero.jpg" alt="Thunder Kitties Softball Team" />
	</div>
</section>

<section id="about" class="py-12">
	<h2 class="text-2xl font-bold mb-6" transition:fly={{ y: -50, duration: 1000, delay: 200 }}>
		About Us
	</h2>
	<p class="text-base" transition:scale={{ duration: 500, delay: 400 }}>
		The Thunder Kitties proudly compete in the E Division of PSSA, a Dallas-based league focused on
		creating an inclusive environment for the LGBTQIA community. As silver medalists in the 2019
		NAGAAA World Series and participants in the 2021, our team has a strong track record of success.
		We are immensely grateful for the support of our fantastic host bar, the Hidden Door. New
		players interested in joining our team are always welcome and encouraged to reach out to us
		through the form provided below.
	</p>
</section>

<section id="events" class="py-12">
	<h2 class="text-2xl font-bold mb-6" transition:fly={{ y: -50, duration: 1000, delay: 200 }}>
		Our Events
	</h2>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
		<div>
			<img
				src="https://via.placeholder.com/300"
				alt="Event 1"
				class="event-image w-full h-auto"
				transition:scale={{ duration: 500, delay: 400 }}
			/>
		</div>
		<div>
			<img
				src="https://via.placeholder.com/300"
				alt="Event 2"
				class="event-image w-full h-auto"
				transition:scale={{ duration: 500, delay: 600 }}
			/>
		</div>
	</div>
</section>

<section id="contact" class="py-12">
	<h2 class="text-2xl font-bold mb-6" transition:fly={{ y: -50, duration: 1000, delay: 200 }}>
		Contact Us
	</h2>
	<form
		action="#"
		class="w-full max-w-lg mx-auto"
		on:submit={(e) => {
			e.preventDefault();
			// Handle form submission
		}}
	>
		<div class="mb-4">
			<label for="name" class="block text-medium-gray font-bold mb-2"> Name </label>
			<input
				id="name"
				type="text"
				class="shadow appearance-none border rounded w-full py-2 px-3 text-charcoal-gray leading-tight focus:outline-none focus:shadow-outline"
				placeholder="Your Name"
			/>
		</div>
		<div class="mb-4">
			<label for="email" class="block text-medium-gray font-bold mb-2"> Email </label>
			<input
				id="email"
				type="email"
				class="shadow appearance-none border rounded w-full py-2 px-3 text-charcoal-gray leading-tight focus:outline-none focus:shadow-outline"
				placeholder="Your Email"
			/>
		</div>
		<div class="mb-6">
			<label for="message" class="block text-medium-gray font-bold mb-2"> Message </label>
			<textarea
				id="message"
				rows="5"
				class="shadow appearance-none border rounded w-full py-2 px-3 text-charcoal-gray leading-tight focus:outline-none focus:shadow-outline"
				placeholder="Your Message"
			/>
		</div>
		<div class="flex items-center justify-between">
			<button
				class="cta-button bg-honey-yellow text-charcoal-gray py-2 px-6 rounded-lg font-bold transition-colors duration-200 hover:bg-snapchat-yellow"
				type="submit"
			>
				Send Message
			</button>
		</div>
	</form>
</section>
