<script>
	import scheduleStore from '$lib/stores/schedules';
	export let data;
	const { scheduleId } = data;
	const schedule = $scheduleStore.find((schedule) => schedule.id == scheduleId);
</script>

<div class="bg-gray-100 p-4 rounded-lg shadow-lg mt-11">
	<div class="flex flex-col md:flex-row">
		<div class="md:w-1/2">
			<a href={schedule.googleMapsLink} target="_blank" rel="noopener noreferrer">
				<img src={schedule.imageUrl} alt={schedule.description} />
			</a>
		</div>
		<div class="flex flex-col items-center text-center mt-4 md:mt-0 md:w-1/2 md:pl-4">
			<h2 class="text-3xl font-bold mb-6">{schedule.description}</h2>
			<p class="mb-6 text-xl"><strong>Location:</strong> {schedule.location}</p>
			<p class="mb-6 text-xl"><strong>Field:</strong> {schedule.field}</p>
			<p class="mb-6"><strong>Date:</strong> {schedule.date}</p>
			<p class="mb-1">
				<strong>Time:</strong>
				{schedule.time}
				{schedule.isGame ? '*' : ''}
			</p>
			<p class="text-red-600 mb-6">
				{schedule.isGame ? '* Game! report 30 mins before' : ''}
			</p>
			<p class="mb-6"><strong>Jersey Color:</strong> {schedule.jersey}</p>
			<p class="mb-6">
				<strong>Google Maps Link:</strong>
				<a
					href={schedule.googleMapsLink}
					class="text-yellow-800"
					target="_blank"
					rel="noopener noreferrer">{schedule.location}</a
				>
			</p>
			<a
				href="/#schedule"
				class="bg-honey-yellow text-charcoal-gray py-2 px-6 my-4 rounded-lg font-bold transition-colors duration-200 hover:bg-snapchat-yellow"
			>
				Back to Schedule
			</a>
		</div>
	</div>
</div>
