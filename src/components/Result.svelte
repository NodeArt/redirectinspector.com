<script type="ts">
  import { getParsedParams } from '../core/helpers/get-params-parse.helper';
  import { goTo } from '../core/helpers/navigator.helper';
  import { getHistory } from '../core/services/api-requests.service';
  import Button from './Button.svelte';
  import History from './History.svelte';

  const { city, urlAddress, userAgent } = getParsedParams();

  const goBack = (useParams = false) => () => {
    goTo(`/${!useParams ? '' : window.location.search}`, { replace: true });
  };

  const history = getHistory({ url: urlAddress, city: city.host, 'user-agent': userAgent.ua });

</script>

<main class="bx--content">
    <div class="bx--grid">
        <div class="bx--row bx--border">
            <div class="bx--col">
                {#await history}
                   <h1>...loading</h1>
                {:then result}
                    <History history="{result.history}"/>
                {/await}
            </div>
        </div>
        <div class="bx--row">
            <div class="bx--col">
                <Button on:click={goBack()} size="{'field'}">Back Home</Button>
            </div>
            <div class="bx--col">
                <Button size="{'field'}" href="{`/${window.location.search}`}">Edit Params</Button>
            </div>
        </div>
    </div>
</main>

<style type="text/scss">
  .bx--row.bx--border {
    margin: 10px -60px;
    border: 2px solid;
  }
</style>
