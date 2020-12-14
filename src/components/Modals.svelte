<script type="ts">
    import {Modals} from "../core/services/handle-modals-list.service";

    let needToShowModal;
    export let modals = {};
    export let toActivate;

    const closeModal = () => Modals.close(toActivate);

    $: needToShowModal = modals[toActivate]?.isActive === true;
</script>

<div class:active={needToShowModal === true} class="modal">
    <div id="modal-window" class="modal-window">
        <svelte:component this="{modals[toActivate]?.component}"/>
    </div>
    <div class="mist" on:click="{closeModal}"></div>
</div>

<style type="text/scss">
    .modal {
        display: none;
        top: 0;
        position: absolute;
        width: 100%;
        height: 100%;

        &.active {
            display: initial;
        }

        & >.mist {
            position: absolute;
            background-color: black;
            opacity: .6;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: 9999;
        }

        & > .modal-window {
            width: 400px;
            background-color: #444044;
            position: relative;
            z-index: 9999999;
            margin: 400px auto;
            height: 500px;
            border-radius: 5px;
            padding: 10px;
        }
    }
</style>
