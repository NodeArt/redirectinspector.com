<script type="ts">
    import {Button, Grid, ComboBox, Row, Column } from "carbon-components-svelte";
    import {changeSelectedUA, cities, modals,selectedUA, userAgents} from "../core/store";
    import {createEventDispatcher, onDestroy} from "svelte";
    import {cutString} from '../core/pipes/format-string.pipe';
    import {getUserAgents} from "../core/helpers/user-agents.helper";
    import {UserAgents} from "../core/services/handle-user-agent-list.service";
    import {Modals} from "../core/services/handle-modals-list.service";
    const dispatch = createEventDispatcher();

    // let device_options = [];
    let countries = [];


    const getIndex = (T, i) => T.findIndex(t => t.id === i);

    export let device;
    export let country;
    const firstTimeCountry = country;
    let needToShowModal = false;

    let selectedDevice = -1;
    let selectedCountry = -1;
    let selected_ua = '';


    const unsubscribeCities = cities.subscribe(data => {
        countries = data;
        selectedCountry = !!firstTimeCountry ? getIndex(countries || [], firstTimeCountry) : -1;
    });

    const unsubscribeSelectedUA = selectedUA.subscribe(data => device = data);


    const formatSelected = (T, i) => (T[i] ? T[i].id : "");

    // $: device = formatSelected(device_options, selectedDevice);
    $: country = formatSelected(countries || [], selectedCountry);
    $: {
      if (device === 'Custom') {
        changeSelectedUA(device);
        Modals.open('customUserAgent');
    }}

    const changeDevice = () => {
        dispatchData();
    };

    const dispatchData = () => {
        dispatch('select');
    };

    onDestroy(() => {
        unsubscribeCities();
        unsubscribeSelectedUA();
    });
</script>

<Row class="dx--row">
    <Column>
        <select bind:value={device} on:change="{changeDevice}" class="device-select">
            <option value="">Select Device</option>
            {#each $userAgents as ua}
                <option title="{`${ua.name} - ${ua.ua}`}" use:cutString value="{ua.ua}">{`${ua.name} - ${ua.ua}`}</option>
            {/each}
        </select>
    </Column>
    <Column sm={1}
            md={1}
            lg={1}/>
    <Column>
        <ComboBox placeholder="Select Country"
                  items={$cities}
                  size="xl"
                  on:select={dispatchData}
                  bind:selectedIndex={selectedCountry}/>
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



