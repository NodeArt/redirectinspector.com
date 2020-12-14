<script type="ts">
    import {Button, Grid, ComboBox, Row, Column, Content} from "carbon-components-svelte";
    import Header from "./Header.svelte";
    import queryString from "query-string";
    import {navigate} from "svelte-routing";
    import {getHistory} from "../core/services/api-requests.service";
    import Buttonn from "./Buttonn.svelte";
    import History from "./History.svelte";

    const {city, urlAddress, userAgent} = queryString.parse(window.location.search);

    const goBack = (useParams = false) => () => {
        navigate(`/${!useParams ? '' : window.location.search}`, {replace: true});
    };
    let redirectHistory = [];
    getHistory({url: urlAddress, city, "user-agent": userAgent}).then(data => redirectHistory = data.history);
</script>

<Header company="RedirectInspector" pageName="Result"/>
<main class="bx--content">
    <Grid>
        <Row class="ta--center">
            <Column>
                <h1>Result of inspection</h1>
            </Column>
        </Row>
        <Row>
            <Column class="ta--right">
                <Button on:click={goBack()}>Back Home</Button>
            </Column>
            <Column>
                <Button on:click={goBack(true)}>Edit Params</Button>
            </Column>
        </Row>
    </Grid>

    <div class="grid bx--grid">
        <div>
            <div>
                <History history="{redirectHistory}"/>
            </div>
        </div>
        <div class="grid bx--row">
            <div class="bx--col">
                <Buttonn on:click={goBack()} size="{'sm'}">Back Home</Buttonn>
            </div>
            <div></div>
            <Buttonn type="ghost" size="{'field'}" href="{`/${window.location.search}`}">Edit Params</Buttonn>
        </div>
    </div>
</main>

<style type="text/scss">
    .grid {
        display: grid;

        &.bx {
            &--grid {
                grid-template-columns: auto;
                grid-template-rows: auto;
            }

            &--row {
                /*grid-template-columns: 160px 400px 160px;*/
                /*grid-template-rows: auto;*/
                display: flex;
                flex-wrap: wrap;
                margin-right: -1rem;
                margin-left: -1rem;
            }

            &--col {
                flex-basis: 0;
                flex-grow: 1;
                max-width: 100%;
            }
        }
    }
    .ta--center {
        text-align: center;
    }
    .ta--right {
        text-align: right;
    }


</style>
