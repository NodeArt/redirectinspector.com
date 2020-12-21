<script type="ts">
  /* eslint-disable import/first */
  import { goTo } from '../core/helpers/navigator.helper';
  import Button from './Button.svelte';
  import Result from './Result.svelte';
  import SelectableData from './SelectableData.svelte';

  export let address;
  export let device;
  export let city;
  export let selectedTab = 0;
  export let isResult = false;

  const changeSelect = () => {
    const params = {
      urlAddress: address,
      city,
      userAgent: device,
      tab: selectedTab
    };
    goTo(`/result?params=${encodeURI(JSON.stringify(params))}`, { replace: true });
  };

</script>

<div>
  <div>
    <div class="grid">
      <div>
        <label>
          <input class="dx--search-input" bind:value={address}>
        </label>
      </div>
      {#if isResult === false}
        <SelectableData bind:proxy={city} bind:device={device}/>
        <div class="dx--row">
          <Button size="{'field'}" on:click={changeSelect}>Get Redirect History</Button>
        </div>
      {:else}
        <div class="bx--row">
          <div class="bx--col">
            <div><span>Device: </span><span>{device.name}</span></div>
            <div><span>UA: </span><span>{device.ua}</span></div>
          </div>
          <div class="bx--col">
            <p>Country:</p><span>{city.country}</span>
          </div>
        </div>
        <Result/>
      {/if}
    </div>
  </div>
</div>

<style>
    .dx--search-input {
        width: 100%;
        height: 50px;
        border-radius: 5px;
        font-size: xx-large;
    }

</style>
