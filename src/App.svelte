<script>
	import { onMount } from "svelte";
	import { cekStorage } from "./tools/localStorage.svelte";
	import { navigate } from "svelte-routing";
	onMount(async () => {
		if (!(await cekStorage())) {
			navigate("/", { replace: true });
		}
	});
</script>

<main>
	<div class="jumbotron">
		<h1 class="display-4">Hello, world!</h1>
		<p class="lead">
			This is a simple hero unit, a simple jumbotron-style component for
			calling extra attention to featured content or information.
		</p>
		<hr class="my-4" />
		<p>
			It uses utility classes for typography and spacing to space content
			out within the larger container.
		</p>
		<a class="btn btn-primary btn-lg" href="/" role="button">Learn more</a>
	</div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
