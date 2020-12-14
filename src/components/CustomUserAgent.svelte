<script type="ts">
    import {localStorageProp} from "../core/config";
    import {UserAgents} from "../core/services/handle-user-agent-list.service";
    import {changeSelectedUA} from "../core/store";
    import {getCustomUserAgents} from "../core/helpers/custom-user-agents.helper";

    let ua_alias;
    let ua_string;
    let customUA = [];
    let updateLS = true;

    const cleanData = () => {
        ua_alias = '';
        ua_string = '';
        updateLS = false;

    };

    $: if (updateLS) {
        customUA = getCustomUserAgents(localStorageProp);
        cleanData();
    }

    const add = () => {
        changeSelectedUA(ua_string);
        UserAgents.add({ua: ua_string, name: ua_alias});
        updateLS = true;
    };

    const deleteUA = (index) => {
      return () => {
        UserAgents.remove(index);
          updateLS = true;
      }
    }
</script>

<div class="custom-ua-modal">
    <div class="user-agent-fields">
        <input placeholder="UA alias" bind:value={ua_alias}/>
        <input placeholder="UA string" bind:value={ua_string} />
    </div>
    <div><button on:click={add}>Add</button></div>
    <div class="local-storage-field">
        <ul>
            {#each customUA as ua, i}
                <li class="list-element">
                    <p class="user-agent-data">{`${ua.name} - ${ua.ua}`}</p>
                    <p class="delete-btn" on:click={deleteUA(i)}>-</p>
                </li>
            {/each}
        </ul>
    </div>
</div>

<style type="text/scss">
    .custom-ua-modal {
        margin: 45px 10px;
    }
    input {
        width: 100%;
        margin-bottom: 20px;
    }

    .local-storage-field {
        height: 200px;
        margin: 50px 0;
        border: 3px solid;
        padding: 2px;
        overflow: auto;

        & > ul > li.list-element {
            text-decoration: none;
            display: flex;
            justify-content: space-between;
            padding-left: 3px;

            & > .user-agent-data {
                padding-top: 8px;
            }

            & > .delete-btn {
                font-size: 2em;
                width: 20px;
                text-align: center;
                background-color: var(--black-color);
                cursor: pointer;
            }

            &:hover {
                background-color: var(--black-color);

                & > .delete-btn {
                    background-color: grey;
                    color: black;
                }
            }
        }
    }

</style>
