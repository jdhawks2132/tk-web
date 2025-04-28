<script>
	import eventsStore from '$lib/stores/events';
	export let data;
	const { eventId } = data;
	const event = $eventsStore.find((e) => e.id == eventId);
</script>

<div class="container mx-auto px-4 lg:px-8 py-12">
	<div class="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col xl:flex-row">
		<!-- Image Panel -->
		<div class="xl:w-1/2">
			<a href={event.googleMapsLink} target="_blank" rel="noopener noreferrer" class="block">
				<div class="aspect-w-16 aspect-h-9">
					<img src={event.imageUrl} alt={event.title} class="object-cover w-full h-full" />
				</div>
			</a>
		</div>

		<!-- Details Panel -->
		<div class="xl:w-1/2 p-6 flex flex-col justify-center text-gray-700">
			<h2 class="text-3xl font-bold text-charcoal-gray mb-4">{event.title}</h2>

			<p class="text-lg mb-2">
				<span class="font-semibold">Date:</span>
				{event.date}
			</p>
			<p class="text-lg mb-6">
				<span class="font-semibold">Time:</span>
				{event.time}
			</p>

			<div class="mb-6">
				<h3 class="text-xl font-semibold text-charcoal-gray mb-2">Details</h3>
				<ul class="list-disc list-inside space-y-1 text-gray-600">
					{#each event.info as infoItem}
						<li>{infoItem}</li>
					{/each}
				</ul>
			</div>

			<div class="mb-6">
				<h3 class="text-xl font-semibold text-charcoal-gray mb-2">Location</h3>
				<p class="text-gray-600">{event.location}</p>
			</div>

			<div class="mt-auto flex flex-col sm:flex-row gap-4">
				<a
					href={event.googleMapsLink}
					target="_blank"
					rel="noopener noreferrer"
					class="w-full sm:w-auto inline-block bg-honey-yellow text-charcoal-gray font-bold py-3 px-6 rounded-lg shadow transition-transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-honey-yellow/50 text-center"
				>
					View on Google Maps
				</a>
				<a
					href="/#events"
					class="w-full sm:w-auto inline-block bg-honey-yellow text-charcoal-gray font-bold py-3 px-6 rounded-lg shadow transition-transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-honey-yellow/50 text-center"
				>
					Back to Events
				</a>
			</div>
		</div>
	</div>
</div>
