<script lang="ts">
  /* eslint-disable import/order */
  import { Tabs, Tab, TabContent } from 'carbon-components-svelte';
  import { initApplication } from '../core/services/init-prepare';
  import { getParsedParams } from '../core/helpers/get-params-parse.helper';
  import Header from './Header.svelte';
  import TabMock from './TabMock.svelte';
  import Single from './Single.svelte';


  const { city, urlAddress, userAgent, tab } = getParsedParams();
  export let isResult = false;

  if (!isResult) {
    initApplication();
  }

  let selectedTab = Number(tab) || 0;
  const tabs = [
    { text: 'One', component: Single, index: 0 },
    { text: 'multi', component: TabMock, index: 1 },
  ];
</script>

<Header company="RedirectInspector"/>
<main class="bx--content">
    <div class="grid">
        <div>
            <Tabs type="container" bind:selected={selectedTab}>
                {#each tabs as tab }
                    {#if tab.text === 'multi'}
                        <Tab disabled="true" label="multi"/>
                    {:else}
                        <Tab label="{tab.text}"/>
                    {/if}
                {/each}
                <div slot="content" class="dx--tabs-content">
                    {#each tabs as tab }
                        <TabContent>
                            <svelte:component
                                    this={tab.component}
                                    selectedTab="{selectedTab}"
                                    device={userAgent}
                                    city={city}
                                    address={urlAddress}
                                    isResult="{isResult}"
                                    />
                        </TabContent>
                    {/each}
                </div>
            </Tabs>
        </div>
    </div>
</main>

<style>
    div {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    .dx--tabs-content {
        border: 1px solid;
    }

    div.grid {
        padding-right: 1rem;
        padding-left: 1rem;
        margin-right: auto;
        margin-left: auto;
        max-width: 99rem;
    }

    @media (min-width: 640px) {
        div {
            max-width: none;
        }
    }

    @media (min-width: 42rem) {
        div.grid {
            padding-right: 2rem;
            padding-left: 2rem;
        }
    }

    @media (min-width: 99rem) {
        div.grid {
            padding-right: 2.5rem;
            padding-left: 2.5rem;
        }
    }
</style>
