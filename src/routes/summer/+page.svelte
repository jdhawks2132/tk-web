<script>
	import summerScheduleStore from '$lib/stores/summerSchedule';
</script>

<div class="container mx-auto px-6 lg:px-12">
	<!-- HERO: Summer Ball -->
	<section
		id="hero"
		class="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh] items-center container mx-auto px-6 lg:px-12 mb-12"
	>
		<!-- Text panel -->
		<div class="flex flex-col justify-center space-y-6">
			<h1 class="text-5xl lg:text-6xl font-extrabold leading-tight text-charcoal-gray">
				Summer Ball
			</h1>
			<p class="text-lg lg:text-xl text-medium-gray max-w-lg">
				All info for the 2025 Thunder Puss Summer Ball season!
				<br />
				<br />
				Games will be held at Mike Lewis Park in Grand Prairie, TX. Location and schedule details can
				be found below. Jerseys will be distributed at our first game on Wednesday, July 9th.
			</p>
		</div>

		<!-- Logo panel -->
		<div class="flex items-center justify-center">
			<div
				class="w-full lg:w-[85%] aspect-w-1 aspect-h-1 overflow-hidden rounded-xl shadow-lg bg-white flex items-center justify-center"
			>
				<img
					src="/images/thunderPuss.jpg"
					alt="Thunder Puss Summer Ball Logo"
					class="object-contain w-full h-full p-8"
					loading="lazy"
				/>
			</div>
		</div>
	</section>

	<!-- FIELD LOCATION -->
	<section class="mb-12">
		<h2 class="text-3xl font-bold mb-4">Field Location</h2>
		<div class="bg-white rounded-xl shadow p-6 flex flex-col sm:flex-row gap-6 items-start w-full">
			<img
				src="/images/mike_lewis.jpg"
				alt="Mike Lewis Park"
				class="w-52 h-40 object-cover rounded-lg shadow-md"
			/>
			<div>
				<h3 class="text-xl font-semibold text-charcoal-gray mb-1">
					Mike Lewis Park – Grand Prairie
				</h3>
				<p class="text-base text-medium-gray mb-1 leading-snug">
					2600 N Carrier Pkwy<br />
					Grand Prairie, TX 75050
				</p>
				<p class="mb-2">
					<a
						href="https://g.co/kgs/KhbNkt3"
						target="_blank"
						rel="noopener noreferrer"
						class="text-honey-yellow font-medium hover:underline"
					>
						View in Google Maps
					</a>
				</p>
				<p class="text-sm text-medium-gray">
					Rainout updates: <a
						href="https://rainoutline.com/search/dnis/4694055505"
						target="_blank"
						rel="noopener noreferrer"
						class="text-honey-yellow font-medium hover:underline">Rainout Line</a
					>
				</p>
			</div>
		</div>
	</section>

	<!-- SCHEDULE -->
	<section class="mb-12">
		<h2 class="text-3xl font-bold mb-4">Schedule</h2>

		<!-- Mobile: Card List -->
		<div class="md:hidden grid gap-4">
			{#each $summerScheduleStore as schedule}
				<div class="bg-white rounded-xl shadow p-4 flex flex-col w-full">
					<div class="relative w-full h-40 rounded overflow-hidden mb-2">
						<img
							src={schedule.imageUrl}
							alt={schedule.description}
							class="object-cover w-full h-full"
						/>
					</div>
					<div class="flex justify-between items-center mb-2">
						<h3 class="text-lg font-semibold text-charcoal-gray">
							{schedule.description}
						</h3>
						{#if schedule.isGame}
							<span
								class="px-2 py-1 text-xs font-medium uppercase bg-red-100 text-red-600 rounded-full"
								>Game</span
							>
						{:else}
							<span
								class="px-2 py-1 text-xs font-medium uppercase bg-green-100 text-green-600 rounded-full"
								>Practice</span
							>
						{/if}
					</div>
					<p class="text-sm text-medium-gray mb-1">{schedule.date} {schedule.time}</p>
					<p class="text-sm text-medium-gray mb-1">{schedule.location} (Field {schedule.field})</p>
					<a
						href={schedule.googleMapsLink}
						target="_blank"
						rel="noopener noreferrer"
						class="mt-auto inline-flex items-center text-sm font-medium text-honey-yellow hover:underline"
					>
						<i class="fas fa-map-marker-alt mr-1" />
						View Map
					</a>
				</div>
			{/each}
		</div>

		<!-- Desktop: Table -->
		<div class="hidden md:block overflow-x-auto bg-white rounded-xl shadow">
			<table class="w-full table-auto divide-y divide-gray-200">
				<thead class="bg-charcoal-gray text-white">
					<tr>
						<th class="px-6 py-4 text-left text-sm font-semibold uppercase">Description</th>
						<th class="px-6 py-4 text-left text-sm font-semibold uppercase">Date & Time</th>
						<th class="px-6 py-4 text-left text-sm font-semibold uppercase">Location</th>
					</tr>
				</thead>
				<tbody class="bg-white divide-y divide-gray-100">
					{#each $summerScheduleStore as schedule}
						<tr class="hover:bg-gray-50 transition">
							<td class="px-6 py-4">{schedule.description}</td>
							<td class="px-6 py-4">{schedule.date} {schedule.time}</td>
							<td class="px-6 py-4">{schedule.location}, Field {schedule.field}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</section>

	<!-- Add below your schedule or hero section -->
	<section class="mb-12">
		<div class="bg-white rounded-xl shadow p-6 flex items-center gap-4 max-w-lg">
			<i class="fas fa-calendar-alt text-3xl text-honey-yellow" />
			<div>
				<h3 class="text-lg font-semibold text-charcoal-gray mb-1">
					Add Summer Ball to your Calendar!
				</h3>
				<a
					href="/calendar/thunder-kitties-summer-ball-2025.ics"
					download
					class="inline-block mt-1 px-4 py-2 bg-honey-yellow text-charcoal-gray font-bold rounded-md shadow hover:bg-yellow-400 transition"
				>
					Download Schedule (.ics)
				</a>
			</div>
		</div>
	</section>

	<!-- SUMMER COACHES CONTACT -->
	<section class="mb-8">
		<h2 class="text-3xl font-bold mb-4">Summer Ball Contacts</h2>
		<div class="flex flex-col md:flex-row gap-8">
			<!-- Rommel Carlos -->
			<div
				class="bg-white rounded-xl shadow p-6 flex flex-col sm:flex-row items-center sm:items-start gap-4 w-full"
			>
				<div
					class="w-20 h-20 bg-yellow-300 rounded-full flex items-center justify-center text-3xl font-bold text-charcoal-gray mb-2 sm:mb-0"
				>
					RC
				</div>
				<div class="text-center sm:text-left">
					<h3 class="text-xl font-semibold text-charcoal-gray">
						Rommel Carlos <span class="text-base text-medium-gray font-normal">(Head Coach)</span>
					</h3>
					<p class="text-base">
						<a
							href="mailto:carlos_rommel@yahoo.com"
							class="hover:underline text-honey-yellow font-medium">carlos_rommel@yahoo.com</a
						>
					</p>
				</div>
			</div>
			<!-- Joshua Hawks -->
			<div
				class="bg-white rounded-xl shadow p-6 flex flex-col sm:flex-row items-center sm:items-start gap-4 w-full"
			>
				<div
					class="w-20 h-20 bg-yellow-300 rounded-full flex items-center justify-center text-3xl font-bold text-charcoal-gray mb-2 sm:mb-0"
				>
					JH
				</div>
				<div class="text-center sm:text-left">
					<h3 class="text-xl font-semibold text-charcoal-gray">Joshua Hawks</h3>
					<p class="text-base">
						<a href="mailto:jdhawks@gmail.com" class="hover:underline text-honey-yellow font-medium"
							>jdhawks@gmail.com</a
						>
					</p>
				</div>
			</div>
		</div>
	</section>
</div>
