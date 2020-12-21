<script type="ts">
  /* eslint-disable import/first */
  import { getCustomUserAgents } from '../core/helpers/custom-user-agents.helper';
  import { UserAgents } from '../core/services/handle-user-agent-list.service';
  import { changeSelectedUA } from '../core/store';

  let uaAlias;
  let uaString;
  let customUA = [];
  let updateLS = true;

  const cleanData = () => {
    uaAlias = '';
    uaString = '';
    updateLS = false;
  };

  $: if (updateLS) {
    customUA = getCustomUserAgents();
    cleanData();
  }

  const add = () => {
    const userAgent = { ua: uaString, name: uaAlias };
    UserAgents.add(userAgent);
    changeSelectedUA(userAgent);
    updateLS = true;
  };

  const deleteUA = (index) => {
    return () => {
      UserAgents.remove(index);
      updateLS = true;
    };
  };
</script>

<div class="custom-ua-modal">
  <div class="user-agent-fields">
    <label>
      <input placeholder="UA alias" bind:value={uaAlias}/>
    </label>
    <label>
      <input placeholder="UA string" bind:value={uaString}/>
    </label>
  </div>
  <div>
    <button on:click={add}>Add</button>
  </div>
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

<style>
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
    }

    .local-storage-field > ul > li.list-element {
        text-decoration: none;
        display: flex;
        justify-content: space-between;
        padding-left: 3px;
    }

    .local-storage-field > ul > li.list-element > .user-agent-data {
        padding-top: 8px;
    }

    .local-storage-field > ul > li.list-element > .delete-btn {
        font-size: 2em;
        width: 20px;
        text-align: center;
        background-color: var(--black-color);
        cursor: pointer;
    }

    .local-storage-field > ul > li.list-element:hover {
        background-color: var(--black-color);
    }

    .local-storage-field > ul > li.list-element:hover > .delete-btn {
        background-color: grey;
        color: black;
    }

    .user-agent-fields {
    }
</style>
