<script>
    import {cookies} from '../core/store';

    let cookie = null;
    cookies.subscribe(data => cookie = data);
</script>

<div class="wrapper">
    {#each Object.keys($cookies) as cookieKey}
        <div>
            <span>key: {cookieKey}</span>
            <p>value: {cookie[cookieKey]}</p>
        </div>
    {/each}
</div>

<style>
    .wrapper {
        padding: 10px;
        word-break: break-all;
    }
</style>
