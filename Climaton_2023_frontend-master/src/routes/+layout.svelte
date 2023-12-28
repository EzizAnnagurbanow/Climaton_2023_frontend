<script lang="ts">
	export let data;
	import { goto, invalidateAll } from "$app/navigation";
	const resetCookieAndRefresh = async () => {
		document.cookie = `user=`;
        await goto(`/login`, { replaceState: true });
		invalidateAll();
	};
</script>

<header id="home">
	<nav id="#navbar" class="navbar dark dark navbar-expand-lg position-fixed top-0 w-100 py-2">
		<div class="container">
			<a class="navbar-brand" href="/"><img src="./img/logo-blog.png" alt="" /></a>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
				<i class="fas fa-bars"></i>
			</button>
			<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
				<div class="navbar-nav ms-auto">
					<a class="nav-link" href="/">home</a>
					<a class="nav-link" href="/about">about</a>
					<a class="nav-link" href="/contact">contact</a>
					<a class="nav-link" href="/blog">Blog</a>

					{#if data.user == null}
						<a class="nav-link" href="/login">Login</a>
					{:else}
						<div class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								{data.user.name}
							</a>
							<div class="dropdown-menu" aria-labelledby="navbarDropdown">
								<a class="dropdown-item text-center" href="/newpost">New Post</a>
								<div class="dropdown-divider"></div>
								<button class="dropdown-item text-center" on:click={() => resetCookieAndRefresh()}>Log out</button>
							</div>
						</div>
					{/if}
				</div>
			</div>
		</div>
	</nav>
</header>

<slot />
