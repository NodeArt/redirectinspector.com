<script type="ts">
  import { createEventDispatcher } from 'svelte';
  import { goTo } from '../core/helpers/navigator.helper';

  export let isRounded = true;
  export let isCentered = true;
  export let type = 'primary'; // 'primary' | 'ghost' | 'tertiary'
  export let size = 'default'; // 'default' | 'sm' | 'field'
  export let href = '';

  const isSm = size === 'sm';
  const isField = size === 'field';
  const isPrimary = type === 'primary';
  const isGhost = type === 'ghost';
  const dispatch = createEventDispatcher();

  const madeAction = () => {
    if (href !== '') {
      goTo(href, { replace: true });
    } else {
      dispatch('click');
    }
  };
</script>
<button on:click="{madeAction}"
        class="btn--btn"
        class:btn--btn--sm={isSm}
        class:btn--btn--field={isField}
        class:btn--btn--primary={isPrimary}
        class:btn--btn--ghost={isGhost}
        class:btn--btn--rounded={isRounded}
        class:btn--btn--centered={isCentered}
>
  <slot/>
</button>

<style>
    button.btn--btn {
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.29;
        letter-spacing: 0.16px;
        position: relative;
        display: inline-flex;
        flex-shrink: 0;
        align-items: center;
        justify-content: space-between;
        max-width: 20rem;
        min-height: 3rem;
        margin: 0;
        padding: calc(0.875rem - 3px) 63px calc(0.875rem - 3px) 15px;
        text-align: left;
        text-decoration: none;
        vertical-align: top;
        border-radius: 0;
        outline: none;
        cursor: pointer;
        transition: background 70ms cubic-bezier(0, 0, 0.38, 0.9), box-shadow 70ms cubic-bezier(0, 0, 0.38, 0.9), border-color 70ms cubic-bezier(0, 0, 0.38, 0.9), outline 70ms cubic-bezier(0, 0, 0.38, 0.9);
    }

    button.btn--btn--sm {
        min-height: 2rem;
        padding: calc(.375rem - 3px) 60px calc(.375rem - 3px) 12px;
    }

    button.btn--btn--field {
        min-height: 2.5rem;
        padding: calc(.675rem - 3px) 60px calc(.675rem - 3px) 12px;
    }

    button.btn--btn--primary {
        color: #fff;
        background-color: #28a745;
        border-color: #28a745;
    }

    button.btn--btn--primary:hover {
        background-color: #218838;
        border-color: #1e7e34;
    }

    button.btn--btn--ghost {
        color: #0f62fe;
        background-color: transparent;
        padding: calc(.875rem - 3px) 16px;
        border: 1px solid transparent;
    }

    button.btn--btn--ghost:hover {
        background-color: #e5e5e5;
        color: #0043ce;
    }

    button.btn--btn--centered {
        padding: calc(.375rem - 3px) 16px;
    }

    button.btn--btn--rounded {
        border-radius: 5px;
    }
</style>
