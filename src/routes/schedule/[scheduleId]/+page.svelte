<script>
  import scheduleStore from '$lib/stores/schedules';
  export let data;
  const { scheduleId } = data;
  const schedule = $scheduleStore.find((s) => s.id == scheduleId);
</script>

<div class="container mx-auto px-4 lg:px-8 py-12">
  <div class="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
    <!-- Image Panel -->
    <div class="md:w-1/2">
      <a href={schedule.googleMapsLink} target="_blank" rel="noopener noreferrer">
        <div class="aspect-w-4 aspect-h-3">
          <img
            src={schedule.imageUrl}
            alt={schedule.description}
            class="object-cover w-full h-full"
          />
        </div>
      </a>
    </div>

    <!-- Details Panel -->
    <div class="md:w-1/2 p-6 flex flex-col justify-center">
      <h2 class="text-3xl font-bold text-charcoal-gray mb-4">
        {schedule.description}
      </h2>
      <div class="space-y-3 text-gray-700">
        <p><span class="font-semibold">Location:</span> {schedule.location}</p>
        <p><span class="font-semibold">Field:</span> {schedule.field}</p>
        <p><span class="font-semibold">Date:</span> {schedule.date}</p>
        <p><span class="font-semibold">Time:</span> {schedule.time}</p>
        {#if schedule.isGame}
          <p class="text-red-600 font-semibold">
            * Game – please arrive 30 minutes early
          </p>
        {/if}
        <p><span class="font-semibold">Jersey Color:</span> {schedule.jersey}</p>
        <p>
          <span class="font-semibold">Map:</span>
          <a
            href={schedule.googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            class="text-honey-yellow hover:underline"
          >
            View on Google Maps
          </a>
        </p>
      </div>

      <div class="mt-6">
        <a
          href="/#schedule"
          class="inline-block bg-honey-yellow text-charcoal-gray font-bold py-2 px-6 rounded-lg transition-transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-honey-yellow/50"
        >
          Back to Schedule
        </a>
      </div>
    </div>
  </div>
</div>
