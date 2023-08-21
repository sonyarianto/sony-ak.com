<script lang="ts">
	import { dev } from '$app/environment';
</script>

<svelte:head>
	<title>Sony AK a.k.a Sony Arianto Kurniawan</title>
	<meta
		name="description"
		content="Sony AK is a member of technical staff living in Jakarta, Indonesia."
	/>
	{#if !dev}
		<script async src="https://www.googletagmanager.com/gtag/js?id=G-YCW4JPDBJM"></script>
		<script>
			window.dataLayer = window.dataLayer || [];
			function gtag() {
				dataLayer.push(arguments);
			}
			gtag('js', new Date());

			gtag('config', 'G-YCW4JPDBJM');
		</script>
	{/if}
</svelte:head>

<div
	class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12"
>
	<img
		src="https://play.tailwindcss.com/img/beams.jpg"
		alt=""
		class="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
		width="1308"
	/>
	<div
		class="absolute inset-0 bg-[url(https://play.tailwindcss.com/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"
	></div>
	<div
		class="relative bg-white px-6 pb-8 pt-10 shadow ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10"
	>
		<div class="mx-auto max-w-md">
			<img
				src="https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci84MjY0ODJlMzBmMmJmMDAxNTk2ZjZlYjkwODA4MjdjMz9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.ANFeUy_WPf1KrjHbaEIXRPdhekzE_PhlNU6j8PTVsuc"
				alt="Sony AK"
				class="block h-[88px] w-[88px] rounded-lg border-[3px] border-solid border-slate-300 object-cover"
			/>
			<h1
				class="rainbow-based-on-hellonext mt-1 bg-clip-text text-2xl font-extrabold text-gray-800 text-transparent"
			>
				Sony AK
			</h1>
			<p class="mt-1 text-gray-600 text-sm">Member of Technical Staff</p>
			<div class="divide-y divide-gray-300/50">
				<div class="space-y-6 py-8 text-base leading-7 text-gray-600">
					<ul class="space-y-2">
						<li class="flex items-center">
							<a href="https://github.com/sonyarianto" target="_blank">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									version="1.1"
									xmlns:xlink="http://www.w3.org/1999/xlink"
									x="0"
									y="0"
									viewBox="0 0 100 100"
									xml:space="preserve"
									class="h-6 w-6"
								>
									<g
										><path
											d="M35.913 90c2.845 0 3.621-1.122 3.621-2.504 0-1.237-.044-4.513-.066-8.854-14.741 3.14-17.85-6.986-17.85-6.986-2.411-6.01-5.896-7.618-5.896-7.618-4.8-3.228.371-3.162.371-3.162 5.322.362 8.117 5.366 8.117 5.366 4.725 7.962 12.405 5.662 15.435 4.332.477-3.37 1.842-5.662 3.356-6.964-11.769-1.303-24.139-5.781-24.139-25.733 0-5.684 2.054-10.329 5.454-13.973-.596-1.316-2.385-6.611.464-13.783 0 0 4.438-1.396 14.573 5.339 4.24-1.157 8.744-1.731 13.249-1.758 4.505.026 9.009.601 13.249 1.758 10.069-6.735 14.507-5.339 14.507-5.339 2.848 7.172 1.06 12.467.53 13.783 3.378 3.643 5.432 8.289 5.432 13.973 0 20.005-12.387 24.408-24.179 25.689 1.855 1.563 3.577 4.756 3.577 9.636 0 6.969-.066 12.569-.066 14.26 0 1.365.59 2.473 3.643 2.473z"
										></path></g
									>
								</svg>
							</a>
							<a href="https://github.com/sonyarianto" target="_blank">
								<p class="ml-4">
									GitHub, <span class="text-purple-600">educational materials and experiments.</span
									>
								</p></a
							>
						</li>
						<li class="flex items-center">
							<a href="https://youtube.com/@bljdev" target="_blank">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									version="1.1"
									xmlns:xlink="http://www.w3.org/1999/xlink"
									x="0"
									y="0"
									viewBox="0 0 409.592 409.592"
									xml:space="preserve"
									class="h-6 w-6"
								>
									<g
										><path
											d="M403.882 107.206c-2.15-17.935-19.052-35.133-36.736-37.437a1316.32 1316.32 0 0 0-324.685 0C24.762 72.068 7.86 89.271 5.71 107.206c-7.613 65.731-7.613 129.464 0 195.18 2.15 17.935 19.052 35.149 36.751 37.437a1316.32 1316.32 0 0 0 324.685 0c17.684-2.284 34.586-19.502 36.736-37.437 7.614-65.71 7.614-129.449 0-195.18zM170.661 273.074V136.539l102.4 68.27-102.4 68.265z"
										></path></g
									></svg
								></a
							>
							<a href="https://youtube.com/@bljdev" target="_blank"
								><p class="ml-4">
									BLJ, <span class="text-orange-600">demo of some educational materials.</span>
								</p></a
							>
						</li>
						<li class="flex items-center">
							<a href="https://youtube.com/@adayangtanya" target="_blank">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									version="1.1"
									xmlns:xlink="http://www.w3.org/1999/xlink"
									x="0"
									y="0"
									viewBox="0 0 409.592 409.592"
									xml:space="preserve"
									class="h-6 w-6"
								>
									<g
										><path
											d="M403.882 107.206c-2.15-17.935-19.052-35.133-36.736-37.437a1316.32 1316.32 0 0 0-324.685 0C24.762 72.068 7.86 89.271 5.71 107.206c-7.613 65.731-7.613 129.464 0 195.18 2.15 17.935 19.052 35.149 36.751 37.437a1316.32 1316.32 0 0 0 324.685 0c17.684-2.284 34.586-19.502 36.736-37.437 7.614-65.71 7.614-129.449 0-195.18zM170.661 273.074V136.539l102.4 68.27-102.4 68.265z"
										></path></g
									>
								</svg>
							</a>
							<a href="https://youtube.com/@adayangtanya" target="_blank"
								><p class="ml-4">
									ada yang tanya, <span class="text-emerald-600">demo in Bahasa Indonesia.</span>
								</p></a
							>
						</li>
						<li class="flex items-center">
							<a href="https://www.google.com/search?q=Sony+AK+vs+Sony+corporation" target="_blank">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									version="1.1"
									xmlns:xlink="http://www.w3.org/1999/xlink"
									x="0"
									y="0"
									viewBox="0 0 512 512"
									xml:space="preserve"
									class="h-6 w-6"
								>
									<g
										><path
											d="M497 301h-19.843l-50.995-124.988C440.825 168.587 451 153.531 451 136c0-8.291-6.709-15-15-15s-15 6.709-15 15c0 8.276-6.724 15-15 15-7.808 0-11.646-2.871-19.6-9.36C375.736 132.938 361.117 121 331 121c-20.438 0-34.109 5.581-43.383 13.039-4.644-4.596-10.342-8.038-16.617-10.276v-5.526c17.422-6.213 30-22.707 30-42.237 0-19.175-22.837-55.69-32.651-69.914-5.625-8.115-19.072-8.115-24.697 0C233.837 20.31 211 56.825 211 76c0 19.53 12.578 36.024 30 42.237v5.526c-6.275 2.238-11.973 5.68-16.617 10.276C215.109 126.581 201.438 121 181 121c-30.117 0-44.736 11.938-55.4 20.64-7.954 6.489-11.792 9.36-19.6 9.36-8.276 0-15-6.724-15-15 0-8.291-6.709-15-15-15s-15 6.709-15 15c0 17.531 10.175 32.587 24.838 40.012L34.843 301H15c-8.291 0-15 6.709-15 15 0 41.353 33.647 75 75 75h61c41.353 0 75-33.647 75-75 0-8.291-6.709-15-15-15h-19.843l-49.75-124.376c7.359-3.248 13.204-7.689 18.162-11.737C153.695 157.431 161.576 151 181 151c27.393 0 29.81 12.656 30 15.366.002.106.062.192.068.298.286 19.235 12.713 35.433 29.932 41.572v216.526c-17.422 6.213-30 22.707-30 42.237 0 8.276-6.724 15-15 15h-30c-8.291 0-15 6.709-15 15s6.709 15 15 15h180c8.291 0 15-6.709 15-15s-6.709-15-15-15h-30c-8.276 0-15-6.724-15-15 0-19.53-12.578-36.024-30-42.237V208.237c17.241-6.149 29.681-22.377 29.94-41.644.004-.06.042-.108.046-.168C301.161 163.861 303.388 151 331 151c19.424 0 27.305 6.431 36.431 13.887 4.958 4.048 10.803 8.489 18.162 11.737L335.843 301H316c-8.291 0-15 6.709-15 15 0 41.353 33.647 75 75 75h61c41.353 0 75-33.647 75-75 0-8.291-6.709-15-15-15zm-429.842 0L106 206.393 143.842 301zm301 0L406 206.393 444.842 301z"
										></path></g
									>
								</svg>
							</a>
							<a href="https://www.google.com/search?q=Sony+AK+vs+Sony+corporation" target="_blank"
								><p class="ml-4">
									case study, <span class="text-sky-600">my domain vs Sony Corporation.</span>
								</p></a
							>
						</li>
					</ul>
					<p>
						Keep learning, stay relevant, relevancy increases value. Comfortable with being
						uncomfortable.
					</p>
					<p class="text-sm text-gray-400">
						&copy; 2003 - {new Date().getFullYear()} by Sony Arianto Kurniawan - All rights reserved.
					</p>
				</div>
			</div>
		</div>
	</div>
	<div class="relative mt-3 w-full px-3 text-center text-xs text-gray-400 sm:mx-auto sm:max-w-lg">
		This website is administrated by Sony Arianto Kurniawan and not related to Sony Corporation or
		its affiliate at all.
	</div>
</div>
