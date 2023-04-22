<script>
	import eventsStore from '$lib/stores/events';
	export let data;
	const { eventId } = data;
	const event = $eventsStore.find((event) => event.id == eventId);
</script>

<section class="bg-white p-6 rounded-lg shadow-md w-11/12 my-11 mx-auto flex flex-col xl:flex-row">
	<div class="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg w-11/12 xl:w-1/2 mx-auto">
		<img src={event.imageUrl} alt={event.title} class="w-full h-full object-cover" />
	</div>
	<div class="mt-6 w-full xl:w-1/2 p-11 flex flex-col mx-auto">
		<h2 class="text-3xl font-bold text-gray-800 tracking-wide">{event.title}</h2>
		<h3 class="text-xl font-bold text-gray-800 tracking-wide mt-4">
			Date: <span class="font-normal">{event.date}</span>
		</h3>
		<h3 class="text-xl font-bold text-gray-800 tracking-wide mt-4">
			Time: <span class="font-normal">{event.time}</span>
		</h3>
		<div class="mt-6">
			<h3 class="text-xl font-semibold text-gray-800 tracking-wider">Details</h3>
			<ul class="list-disc list-inside pl-4 mt-2 text-gray-600">
				{#each event.info as infoItem}
					<li class="mt-1 list-outside">{infoItem}</li>
				{/each}
			</ul>
		</div>
		<div class="mt-6">
			<h3 class="text-xl font-semibold text-gray-800 tracking-wider">Location</h3>
			<p class="text-gray-600 mt-2">{event.location}</p>
		</div>
		<div class="mt-8">
			<a
				href={event.googleMapsLink}
				target="_blank"
				rel="noopener noreferrer"
				class="inline-block bg-blue-600 text-white text-lg font-semibold py-3 px-8 rounded hover:bg-blue-800 w-11/12 text-center my-2"
			>
				Google Maps
			</a>
			<a
				href="/#events"
				target="_blank"
				rel="noopener noreferrer"
				class="inline-block bg-blue-600 text-white text-lg font-semibold py-3 px-8 rounded hover:bg-blue-800 w-11/12 text-center"
			>
				Home Page
			</a>
		</div>
	</div>
</section>
