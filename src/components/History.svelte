<script type="ts">
    import { Cookie } from '../core/services/handle-cookie.service';
    import { Modals } from '../core/services/handle-modals-list.service';

    export let history = [];
    const openModal = (cookie) => {
      return () => {
        Cookie.update(cookie);
        Modals.open('cookie');
      };
    };
</script>
<div class="history-wrapper">
    {#each history as _history, i}
        <div>
            <h3 class="history-title" title="_history.url">{_history.url}</h3>
            {#if i < history.length}
                <div class="data-flow">
                    <div class="arrow">
                        <div></div>
                    </div>
                    {#if _history.cookie !== null}
                        <div class="data-flow-cookie">
                            <div class="cookie"
                                 title="{JSON.stringify(_history.cookie)}"
                                 on:click={openModal(_history.cookie)}>+</div>
                        </div>
                    {/if}
                </div>
            {/if}
        </div>
    {/each}
</div>

<style type="text/scss">
    .history-wrapper {
        white-space: nowrap;
        overflow: hidden;
        text-align: left;
        padding: 11px;
    }
    .history-title {
         text-overflow: ellipsis;
        overflow: hidden;
    }

    .arrow {
        cursor: pointer;
        position: relative;
        width: 50px;
        height: 80px;
        margin: 20px;
    }
    .arrow div {
        position: relative;
        bottom: 22px;
        width: 10px;
        height: 90px;
        background-color: var(--black-color);;
        box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
        left: 0;
        display: block;
    }
    .arrow div::after {
        content: '';
        position: absolute;
        width: 40px;
        height: 10px;
        top: 76px;
        right: -26px;
        background-color: var(--black-color);
        transform: rotate(-45deg);
    }
    .arrow div::before {
        content: '';
        position: absolute;
        width: 40px;
        height: 10px;
        top: 76px;
        right: -4px;
        background-color: var(--black-color);
        box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
        transform: rotate(45deg);
    }

    .cookie {
        width: 2em;
        height: 2em;
        border: 2px solid var(--black-color);
        border-radius: 50%;
        line-height: 1.8em;
        text-align: center;
        font-size: 55px;
    }

    .data-flow {
      display: flex;
    }

    .data-flow-cookie {
      display: flex;
      justify-content: center;
      width: 500px;
    }
</style>
