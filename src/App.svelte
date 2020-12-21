<script lang="ts">
  /* eslint-disable import/first */
  import CookieModal from './components/CookieModal.svelte';
  import CustomUserAgent from './components/CustomUserAgent.svelte';
  import Modals from './components/Modals.svelte';
  import NotFound from './components/NotFound.svelte';
  import Prepare from './components/Prepare.svelte';
  import Routing from './components/Routing.svelte';
  import { initModals } from './core/services/init-prepare';
  import { modals } from './core/store';

  export const modalWindows = {
    customUserAgent: { isActive: false, component: CustomUserAgent },
    cookie: { isActive: false, component: CookieModal }
  };

  initModals(modalWindows);
  const modalList = [
    'customUserAgent',
    'cookie'
  ];
</script>

<Routing>
    <div slot="/"><Prepare /></div>
    <div slot="/result"><Prepare isResult="{true}"/></div>
    <div slot="**"><NotFound/></div>
</Routing>

{#each modalList as modal}
	<Modals modals="{$modals}" toActivate="{modal}"/>
{/each}
