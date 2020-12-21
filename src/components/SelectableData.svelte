<script type="ts">
  /* eslint-disable import/first */
  import { Row, Column } from 'carbon-components-svelte';
  import { createEventDispatcher } from 'svelte';
  import { emptyProxy, emptyUA } from '../core/mocks';
  import { cutString } from '../core/pipes/format-string.pipe';
  import { Cities } from '../core/services/handle-cities-list.service';
  import { Modals } from '../core/services/handle-modals-list.service';
  import { changeSelectedUA, cities, selectedUA, selectedProxy, userAgents, changeSelectedProxy } from '../core/store';

  const dispatch = createEventDispatcher();

  export let device = emptyUA;
  export let proxy = emptyProxy;

  changeSelectedUA(device);
  changeSelectedProxy(proxy);

  $: {
    changeSelectedUA(device);
    if (device.ua === 'Custom') {
      Modals.open('customUserAgent');
    }
  }

  const dispatchData = () => {
    dispatch('select');
  };

  const isSelectedCProxyCity = Cities.getIsSelectedCity;

</script>
<!-- svelte-ignore a11y-no-onchange -->
<Row class="dx--row">
    <Column>
        <label>
            <select bind:value="{device}" on:change="{dispatchData}" class="device-select">
                <option value="">Select Device</option>
                {#each $userAgents as ua}
                    <option title="{`${ua.name} - ${ua.ua}`}" use:cutString
                            selected="{$selectedUA.name === ua.name}"
                            value="{ua}">{`${ua.name} - ${ua.ua}`}</option>
                {/each}
            </select>
        </label>
    </Column>
    <Column sm={1}
            md={1}
            lg={1}/>
    <Column>
        <label>
            <select bind:value="{proxy}" on:change="{dispatchData}" class="device-select">
                <option value="">Select Country</option>
                {#each $cities as proxyCity}
                    <option title="{`${proxyCity.host} - ${proxyCity.country}, ${proxyCity.city}`}" use:cutString
                            selected="{isSelectedCProxyCity($selectedProxy, proxyCity)}"
                            value="{proxyCity}">{`${proxyCity.country}, ${proxyCity.city}`}</option>
                {/each}
            </select>
        </label>
    </Column>
</Row>

<style type="text/scss">
  .device-select {
    display: block;
    width: 100%;
    height: 50px;
    border-radius: 5px;
    font-size: large;
  }
</style>



