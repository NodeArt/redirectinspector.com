<script type="ts">
  /* eslint-disable import/first */
  import Button from './Button.svelte';
  import Header from './Header.svelte';
</script>

<Header company="RedirectInspector"/>
<main class="bx--content">
  <div class="bx--grid">
    <div class="bx--row bx--center">
      <div class="bx--col">
        <h3> Sorry, Wrong Page!!!</h3>
      </div>
    </div>
    <div class="bx--row bx--center">
      <div class="bx--col">
        <span class="error-code">404</span>
      </div>
    </div>
    <div class="bx--row bx--center">
      <div class="bx--col">
        <Button type="{'ghost'}" size="{'field'}" href="{'/'}">Go To Home Page</Button>
      </div>
    </div>
  </div>
</main>

<style>
  .bx--center {
      text-align: center;
  }
  .error-code {
      font-size: 35em;
  }
</style>
