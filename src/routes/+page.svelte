<script>
	import schedulesStore from '$lib/stores/schedules';
	console.log('hi, kitty devs ;-)');
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
			opportunities, please don't hesitate to get in touch.
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
				src="/images/kitties_first_game_2024.jpg"
				alt="Thunder Kitties Softball Team"
				class="w-full rounded-lg shadow-md leading-relaxed"
			/>
		</div>
		<div
			class="items-center justify center about-text w-full p-4 lg:p-6 lg:h-full bg-light-gray rounded-lg shadow-md leading-relaxed"
		>
			<p class="text-base xl:text-xl mb-6 2xl:text-2xl">
				The Thunder Kitties proudly compete in the E Division of PSSA, a Dallas-based league focused
				on creating an inclusive environment for the LGBTQIA community. As silver medalists in the
				2019 NAGAAA World Series and participants in 2021, our team has a strong track record of
				success. Having placed first in the 2023 PSSA Spring Season, we are excited to represent
				Dallas in the 2023 NAGAAA World Series in Minneapolis, MN!
			</p>
			<p class="text-base xl:text-xl 2xl:text-2xl">
				New players interested in joining our team are always welcome and encouraged to reach out to
				us via <a href="/#contact" class="text-yellow-600 hover:underline"
					><strong>Email or Facebook</strong></a
				>.
			</p>
		</div>
	</div>
</section>

<section id="events" class="py-12">
	<h2 class="text-2xl font-bold mb-6">Our Events</h2>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
		<div>
			<a href="/events/2">
				<img
					src="/images/extraInnings.jpg"
					alt="extra innings"
					class="event-image w-full h-auto hover:shadow-lg transition-shadow duration-200 hover:shadow-pink-300"
				/>
			</a>
		</div>
	</div>
</section>

<section id="schedule" class="py-12">
	<h2 class="text-2xl font-bold mb-6">Upcoming Games and Practices:</h2>

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
						><a href={`/schedule/${schedule.id}`} class="text-yellow-700 hover:underline"
							>{schedule.description}</a
						></td
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
	<div
		class="contact-card flex flex-col md:flex-row items-center justify-around bg-gray-100 rounded-md"
	>
		<div class="contact-card-image m-4 flex items-center justify-center">
			<img src="/images/tk_hero.jpg" alt="Thunder Kitties Logo" class="w-64 shadow-lg" />
		</div>
		<div class="flex flex-col h-11/12">
			<div class="staff">
				<h3 class="text-2xl mb-6">Coach: John Blizzard</h3>
			</div>
			<div class="facebook-link flex justify-center items-center">
				<a
					href="https://www.facebook.com/DallasThunderKitties/"
					target="_blank"
					rel="noopener noreferrer"
					class="hover:text-snapchat-yellow flex items-center mb-4"
				>
					<i class="fab fa-facebook-f text-4xl" />
					<span class="ml-4">Thunder Kitties Facebook</span>
				</a>
			</div>
			<div class="email-link flex justify-start items-center">
				<a
					href="mailto:thunder.kitties.e@gmail.com"
					target="_blank"
					rel="noopener noreferrer"
					class="hover:text-snapchat-yellow flex items-center mb-4"
				>
					<i class="fas fa-envelope text-4xl" />
					<span class="ml-4">Email us!</span>
				</a>
			</div>
		</div>
	</div>
</section>
