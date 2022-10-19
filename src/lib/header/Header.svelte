<script lang="ts">
	import { page } from '$app/stores';
</script>

<header>
	<nav data-sveltekit-prefetch>
		<ul>
			<li class:active={$page.url.pathname === '/'}>
				<a href="/">Home</a>
			</li>
			<li class:active={$page.url.pathname === '/about'}>
				<a href="/about">About</a>
			</li>
			<!--TEST ROUTES-->
			<li class:active={$page.url.pathname === '/blog'}>
				<a href="/blog">Blog</a>
			</li>
			<li class:active={$page.url.pathname === '/contacts'}>
				<a href="/contacts">Contacts</a>
			</li>
			<!--TEST ROUTES-->
		</ul>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}
</style>
