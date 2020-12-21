<script type="ts">
  import { onMount } from 'svelte';

  export let address;
  export let device;
  export let city;
  export let selectedTab = 1;
  export let isResult = false;

  const mockProps = () => ({ address, device, city, selectedTab, isResult });
  const mockTab = () => selectedTab;

  onMount(() => {
    mockProps();
    mockTab();
  });
</script>

<div><h1>it's the Mock Tab</h1></div>
