<script lang="ts">
	import {modals} from "./core/store";

	import CustomUserAgent from "./components/CustomUserAgent.svelte"
	import CookieModal from "./components/CookieModal.svelte"
	import {Router, Route} from "svelte-routing";
	import Result from "./components/Result.svelte";
	import Prepare from "./components/Prepare.svelte";

	import NotFound from "./components/NotFound.svelte";
	import {initApplication, initModals} from "./core/services/init-prepare";
	import Modals from "./components/Modals.svelte";

	export const modalWindows = {
		'customUserAgent': {isActive: false, component: CustomUserAgent},
		'cookie': {isActive: false, component: CookieModal}
	};

	let url = "";
	initApplication();
	initModals(modalWindows);

	const modalList = [
		'customUserAgent',
		'cookie'
	];

</script>

<svelte:head>
	<link rel="stylesheet" href="carbon-components-svelte/css/g10.css">
</svelte:head>
<Router url="{url}" >
	<div>
		<Route path="/"><Prepare/></Route>
		<Route path="/result"><Result /></Route>
		<Route path="**"><NotFound/></Route>
	</div>
</Router>
{#each modalList as modal}
	<Modals modals="{$modals}" toActivate="{modal}"/>
{/each}
