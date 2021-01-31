import Routing from './routing/Routing.svelte';

const app = new Routing({
	target: document.body,
	hydrate: true
});

export default app;
