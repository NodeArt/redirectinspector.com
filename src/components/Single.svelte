<script type="ts">
    import {Button, TextInput} from "carbon-components-svelte";
    import SelectableData from "./SelectableData.svelte";
    import { navigate } from "svelte-routing";

    export let props = {};
    export let selectedTab = 0;

    let address = props.urlAddress;
    let device = props.userAgent;
    let city = props.city;

    const checkData = () => {
    };

    const changeSelect = () => {
        navigate(`/result?urlAddress=${encodeURI(address)}&city=${encodeURI(city)}&userAgent=${encodeURI(device)}&tab=${selectedTab}`,
                { replace: true });
    }

</script>

<div>
    <div>
        <div class="grid">
            <div>
                <input class="dx--search-input" bind:value={address}>
            </div>
            <SelectableData bind:country={city} bind:device={device} on:select={checkData}/>
            <div class="dx--row">
                <Button on:click={changeSelect}>Button</Button>
            </div>
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
