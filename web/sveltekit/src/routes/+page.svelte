<script lang="ts">
	import { dev } from '$app/environment';
</script>

<svelte:head>
	<title>Sony AK a.k.a Sony Arianto Kurniawan</title>
	<meta
		name="description"
		content="Sony AK is a principal full-stack engineer and system integrator living in Jakarta, Indonesia."
	/>
	{#if !dev}
		<!-- Global site tag (gtag.js) - Google Analytics -->
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

<div id="page-wrapper">
	<div id="header-wrapper" />

	<div id="banner-wrapper">
		<div id="banner" class="box container">
			<div class="row">
				<div class="col-7 col-12-medium">
					<header id="header" class="container">
						<div id="logo">
							<img
								style="width:120px;height:120px;border:5px solid #cecece;border-radius:100px;display:block;object-fit:cover;"
								src="https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci84MjY0ODJlMzBmMmJmMDAxNTk2ZjZlYjkwODA4MjdjMz9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.ANFeUy_WPf1KrjHbaEIXRPdhekzE_PhlNU6j8PTVsuc"
								alt="Sony AK"
							/>
						</div>
					</header>
					<h2>
						<span class="rainbow-based-on-hellonext text-transparent bg-clip-text"
							>Hi. I'm Sony AK.</span
						>
					</h2>
					<p class="opa">Principal Full-Stack Engineer. System Integrator.</p>
					<div style="height:15px;" />
					<iframe
						src="https://github.com/sponsors/sonyarianto/button"
						title="Sponsor sonyarianto"
						height="32"
						width="114"
						style="border: 0; border-radius: 6px;"
					/>
				</div>
				<div class="col-5 col-12-medium">
					<ul>
						<li>
							<a
								target="_blank"
								rel="noreferrer"
								href="https://github.com/sonyarianto"
								class="button large icon brands fa-github">GitHub</a
							>
						</li>
						<li>
							<a
								target="_blank"
								rel="noreferrer"
								href="https://youtube.com/@bljdev"
								class="button large icon brands fa-youtube">BLJ</a
							>
						</li>
						<li>
							<a
								target="_blank"
								rel="noreferrer"
								href="https://youtube.com/@adayangtanya"
								class="button large icon brands fa-youtube">ada yang tanya</a
							>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>

	<div id="footer-wrapper">
		<footer id="footer" class="container">
			<div class="row">
				<div class="col-12">
					<div id="copyright">
						<ul class="menu">
							<li>&copy; 2003-{new Date().getFullYear()} Sony AK</li>
							<li>Made with <span style="color:red;">&#10084;</span> in Jakarta</li>
							<li>
								Design based on <a
									target="_blank"
									rel="noreferrer"
									href="https://html5up.net/uploads/demos/verti">Verti</a
								>
							</li>
							<li>
								Crafted using <a target="_blank" rel="noreferrer" href="https://kit.svelte.dev"
									>SvelteKit</a
								>
							</li>
							<li>
								Hosted at <a target="_blank" rel="noreferrer" href="https://vercel.com">Vercel</a>
							</li>
							<li>
								DNS by <a target="_blank" rel="noreferrer" href="https://cloudflare.com"
									>Cloudflare</a
								>
							</li>
							<li>
								Repository by <a target="_blank" rel="noreferrer" href="https://github.com"
									>GitHub</a
								>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	</div>
</div>
