<script>
	import schedulesStore from '$lib/stores/schedules';
</script>

<section
	id="hero"
	class="hero flex flex-col items-center p-4 lg:flex-row lg:justify-around lg:min-h-[75vh] lg:p-11"
>
	<div class="hero-text text-center w-full h-full lg:w-1/2">
		<h1 class="text-4xl lg:text-5xl font-bold text-charcoal-gray">Dallas Thunder Kitties</h1>
		<p class="text-medium-gray font-bold my-4 mx-auto w-full lg:w-4/5">
			The Thunder Kitties, a Dallas-based softball team, proudly participates in the Pegasus Slow
			Pitch Softball League. If you're interested in joining our team or exploring sponsorship
			opportunities, please don't hesitate to get in touch with us.
		</p>
		<a href="#contact">
			<button
				class="cta-button bg-honey-yellow text-charcoal-gray py-2 px-6 mb-4 rounded-lg font-bold transition-colors duration-200 hover:bg-snapchat-yellow"
			>
				Contact Us!
			</button>
		</a>
	</div>
	<div class="hero-image flex justify-center items-center w:11/12 lg:w-1/2">
		<img src="/images/tk_hero.jpg" alt="Thunder Kitties Softball Team" />
	</div>
</section>

<section id="about" class="py-12">
	<h2 class="text-2xl font-bold mb-6">About Us</h2>

	<div class="about-container grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
		<div class="about-image">
			<img
				src="/images/tk_team.jpg"
				alt="Thunder Kitties Softball Team"
				class="w-full rounded-lg shadow-md leading-relaxed"
			/>
		</div>
		<div
			class="about-text w-full p-4 lg:p-6 lg:h-full bg-light-gray rounded-lg shadow-md leading-relaxed"
		>
			<p class="text-base xl:text-xl mb-6 2xl:mt-24 2xl:text-2xl 2xl:mx-4">
				The Thunder Kitties proudly compete in the E Division of PSSA, a Dallas-based league focused
				on creating an inclusive environment for the LGBTQIA community. As silver medalists in the
				2019 NAGAAA World Series and participants in 2021, our team has a strong track record of
				success. We are immensely grateful for the support of our fantastic host bar, The Hidden
				Door.
			</p>
			<p class="text-base xl:text-xl 2xl:text-2xl 2xl:mx-4">
				New players interested in joining our team are always welcome and encouraged to reach out to
				us through the form provided below.
			</p>
		</div>
	</div>
</section>

<section id="events" class="py-12">
	<h2 class="text-2xl font-bold mb-6">Our Events</h2>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
		<div>
			<img src="https://via.placeholder.com/300" alt="Event 1" class="event-image w-full h-auto" />
		</div>
		<div>
			<img src="https://via.placeholder.com/300" alt="Event 2" class="event-image w-full h-auto" />
		</div>
	</div>
</section>

<section id="schedule" class="py-12">
	<h2 class="text-2xl font-bold mb-6">Upcoming Schedule</h2>

	<!-- create a table using tailwind css with headers for Description, Location, Date, Time -->
	<table class="table-auto w-full">
		<thead class="bg-charcoal-gray text-white">
			<tr>
				<th class="px-4 py-2">Description</th>
				<th class="px-4 py-2">Field</th>
				<th class="px-4 py-2">Date</th>
				<th class="px-4 py-2">Time</th>
			</tr>
		</thead>
		<tbody>
			{#each $schedulesStore as schedule}
				<tr class="bg-white even:bg-gray-100 odd:bg-white">
					<td class="border px-2 py-2 text-center"
						><a href={`/schedule/${schedule.id}`}>{schedule.description}</a></td
					>
					<td class="border px-2 py-2 text-center">{schedule.field}</td>
					<td class="border px-2 py-2 text-center">{schedule.date}</td>
					<td class="border px-2 py-2 text-center">{schedule.time}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</section>

<section id="contact" class="py-12">
	<h2 class="text-2xl font-bold mb-6">Contact Us</h2>
	<form
		action="#"
		class="w-full max-w-lg mx-auto"
		on:submit={(e) => {
			e.preventDefault();
			// Handle form submission
		}}
	>
		<div class="mb-4">
			<label for="name" class="block text-charcoal-gray font-bold mb-2"> Name </label>
			<input
				id="name"
				type="text"
				class="shadow appearance-none border rounded w-full py-2 px-3 text-charcoal-gray leading-tight focus:outline-none focus:shadow-outline"
				placeholder="Your Name"
			/>
		</div>
		<div class="mb-4">
			<label for="email" class="block text-charcoal-gray font-bold mb-2"> Email </label>
			<input
				id="email"
				type="email"
				class="shadow appearance-none border rounded w-full py-2 px-3 text-charcoal-gray leading-tight focus:outline-none focus:shadow-outline"
				placeholder="Your Email"
			/>
		</div>
		<div class="mb-6">
			<label for="message" class="block text-charcoal-gray font-bold mb-2"> Message </label>
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
