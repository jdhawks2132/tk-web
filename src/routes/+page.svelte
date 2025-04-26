<script>
	import schedulesStore from '$lib/stores/schedules';
	console.log('hi, kitty devs ;-)');
</script>

<!-- HERO -->
<section
	id="hero"
	class="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh] items-center container mx-auto px-6 lg:px-12"
>
	<!-- Text panel -->
	<div class="flex flex-col justify-center space-y-6">
		<h1 class="text-5xl lg:text-6xl font-extrabold leading-tight text-charcoal-gray">
			Dallas Thunder Kitties
		</h1>
		<p class="text-lg lg:text-xl text-medium-gray max-w-lg">
			The Thunder Kitties proudly represent Dallas in the Pegasus Slow Pitch Softball League.
			Interested in joining or sponsoring? We’d love to hear from you.
		</p>
		<a href="#contact">
			<button
				class="inline-block bg-honey-yellow text-charcoal-gray font-bold py-3 px-7 rounded-lg shadow-sm transition-transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-honey-yellow/50"
			>
				Contact Us
			</button>
		</a>
	</div>

	<!-- Image panel -->
	<div class="flex items-center justify-center">
		<div class="w-full lg:w-[85%] aspect-w-4 aspect-h-3 overflow-hidden rounded-xl shadow-lg">
			<img
				src="/images/tk_hero.jpg"
				alt="Thunder Kitties Softball Team"
				class="object-cover w-full h-full"
			/>
		</div>
	</div>
</section>

<!-- ABOUT -->
<section id="about" class="py-16 bg-light-gray">
	<div class="container mx-auto px-4 lg:px-8 max-w-7xl space-y-8">
		<h2 class="text-3xl font-bold text-center lg:text-left">About Us</h2>

		<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
			<div class="about-image">
				<img
					src="/images/kitties_first_game_2025.jpg"
					alt="First Game 2025"
					class="w-full rounded-lg shadow-lg"
				/>
			</div>
			<div class="about-text space-y-6 text-base lg:text-lg xl:text-xl">
				<p>
					The Thunder Kitties proudly compete in the E Division of PSSA, a Dallas-based league
					focused on creating an inclusive environment for the LGBTQIA community. As silver
					medalists in the 2019 NAGAAA World Series and participants in 2021 and 2023, our team has
					a strong track record. In 2025, we were silver medalists in the Dallas Easter Classic!
				</p>
				<p>
					New players are always welcome. Reach out via
					<a href="/#contact" class="font-semibold underline text-yellow-600 hover:text-yellow-700">
						Email or Facebook
					</a>
					— we’d love to have you!
				</p>
			</div>
		</div>
	</div>
</section>

<!-- SCHEDULE -->
<section id="schedule" class="py-16">
	<div class="container mx-auto px-4 lg:px-8 max-w-7xl space-y-6">
		<h2 class="text-3xl font-bold">Upcoming Games & Practices</h2>

		<div class="overflow-x-auto">
			<table class="min-w-full divide-y divide-gray-200">
				<thead class="bg-charcoal-gray text-white">
					<tr>
						<th class="px-6 py-3 text-left text-sm font-medium uppercase">Description</th>
						<th class="px-6 py-3 text-left text-sm font-medium uppercase">Field</th>
						<th class="px-6 py-3 text-left text-sm font-medium uppercase">Date</th>
						<th class="px-6 py-3 text-left text-sm font-medium uppercase">Time</th>
					</tr>
				</thead>
				<tbody class="bg-white divide-y divide-gray-100">
					{#each $schedulesStore as schedule}
						<tr class="hover:bg-gray-50 transition">
							<td class="px-6 py-4 whitespace-nowrap">
								<a
									href={`/schedule/${schedule.id}`}
									class="text-yellow-700 font-medium hover:underline"
								>
									{schedule.description}
								</a>
							</td>
							<td class="px-6 py-4 whitespace-nowrap">{schedule.field}</td>
							<td class="px-6 py-4 whitespace-nowrap">{schedule.date}</td>
							<td class="px-6 py-4 whitespace-nowrap">{schedule.time}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</section>

<!-- EVENTS -->
<section id="events" class="py-16 bg-light-gray">
	<div class="container mx-auto px-4 lg:px-8 max-w-7xl">
		<h2 class="text-3xl font-bold mb-8">Our Events</h2>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			<div
				class="group border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-200"
			>
				<a href="/events/6" class="block relative aspect-w-4 aspect-h-3">
					<img
						src="/images/extraInnings.jpg"
						alt="Extra Innings"
						class="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
					/>
				</a>
			</div>
		</div>
	</div>
</section>

<!-- CONTACT -->
<section id="contact" class="py-16">
	<div class="container mx-auto px-4 lg:px-8 max-w-4xl">
		<h2 class="text-3xl font-bold text-center mb-8">Contact Us</h2>

		<div
			class="flex flex-col md:flex-row items-center gap-8 bg-gradient-to-br from-white to-gray-100 p-8 rounded-xl shadow-lg"
		>
			<div class="contact-card-image flex-shrink-0">
				<img
					src="/images/tk_hero.jpg"
					alt="Thunder Kitties Logo"
					class="w-48 rounded-full shadow-md object-cover"
				/>
			</div>
			<div class="flex-1 space-y-6 text-center md:text-left">
				<div>
					<h3 class="text-2xl font-semibold">Coach: John Blizzard</h3>
				</div>
				<div class="flex justify-center md:justify-start items-center space-x-4">
					<a
						href="https://www.facebook.com/DallasThunderKitties/"
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center space-x-2 hover:text-snapchat-yellow transition"
					>
						<i class="fab fa-facebook-f text-2xl" />
						<span class="font-medium">Thunder Kitties Facebook</span>
					</a>
				</div>
				<div class="flex justify-center md:justify-start items-center space-x-2">
					<a
						href="mailto:thunder.kitties.e@gmail.com"
						class="flex items-center space-x-2 hover:text-snapchat-yellow transition"
					>
						<i class="fas fa-envelope text-2xl" />
						<span class="font-medium">Email us!</span>
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
