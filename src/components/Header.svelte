<script>
    export let company;
    export let pageName;
</script>
<header role="banner" aria-label="RedirectInspector " class="bx--header">
    <a class="bx--header__name">
        <span class="bx--header__name--prefix">
            {company}&nbsp;</span>
        {pageName}</a>
</header>
<style type="text/scss">
    .bx--header {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        z-index: 8000;
        display: flex;
        align-items: center;
        height: 3rem;
        background-color: #161616;
        border-bottom: 1px solid #393939;

        &__name {
            font-size: 0.875rem;
            display: flex;
            align-items: center;
            height: 100%;
            padding: 0 2rem 0 1rem;
            font-weight: 600;
            line-height: 1.25rem;
            letter-spacing: 0.1px;
            text-decoration: none;
            border: 0.125rem solid transparent;
            outline: none;
            transition: border-color 110ms;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;

            &--prefix {
                font-weight: 400;
            }
        }
    }
</style>
