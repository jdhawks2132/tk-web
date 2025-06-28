<script>
	const year = new Date().getFullYear();
</script>

<footer class="bg-charcoal-gray text-light-gray py-6">
	<div class="container mx-auto px-6">
		<!-- Sponsor Label -->
		<div class="text-center mb-2">
			<p class="text-base font-semibold tracking-wide text-honey-yellow uppercase">
				Proudly Sponsored By
			</p>
		</div>
		<!-- Sponsor Logos Row -->
		<div class="flex flex-col md:flex-row items-center justify-center gap-6 mb-4">
			<a
				href="https://www.hiddendoor.bar/"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Hidden Door sponsor"
			>
				<img
					src="/images/hiddenDoorLogo.jpg"
					alt="Hidden Door Logo"
					class="h-14 max-w-xs object-contain transition-opacity hover:opacity-80"
					loading="lazy"
				/>
			</a>
			<a
				href="https://collisionrescue.com"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Collision Rescue sponsor"
			>
				<img
					src="/images/collisionRescueLogo.jpg"
					alt="Collision Rescue Logo"
					class="h-14 max-w-xs object-contain transition-opacity hover:opacity-80"
					loading="lazy"
				/>
			</a>
		</div>
		<!-- Copyright -->
		<div class="text-center">
			<p class="text-sm">&copy; {year} Thunder Kitties. All rights reserved.</p>
		</div>
	</div>
</footer>
