<script type="ts">
    /* eslint-disable import/first */
    import { cookies } from '../core/store';

</script>

<div class="wrapper">
    {#each Object.keys($cookies) as cookieKey}
        <div>
            <span>key: {cookieKey}</span>
            <p>value: {$cookies[cookieKey]}</p>
        </div>
    {/each}
</div>

<style>
    .wrapper {
        padding: 10px;
        word-break: break-all;
    }
</style>
