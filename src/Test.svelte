<script>
	const getData = (async () => {
		const res = await fetch("https://api.github.com/users/sulthonuladib");
		return await res.json();
	})();
</script>

<main>
	{#await getData}
		<p>waiting ...</p>
	{:then data}
		<h1>Nama: {data.login}</h1>
		<h1>Followers: {data.followers}</h1>
		<img src={data.avatar_url} />
	{:catch error}
		<p>Ini error</p>
	{/await}
</main>
