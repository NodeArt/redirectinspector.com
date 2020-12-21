<script type="ts">
    /* eslint-disable import/first */
    import { route } from '../core/store/route';

    let url;
    $: url = window?.location?.pathname ?? '/';
</script>

{#if $route === '/'}
    <slot name="/"/>
{:else if $route === '/result'}
    <slot name="/result"/>
{:else }
    <slot name="**"/>
{/if}
