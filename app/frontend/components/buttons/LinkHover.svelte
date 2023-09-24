<script>
  export let text = "Link";
  export let href = "/";
</script>

<a class="link-hover" href={ href }>
    { text }
</a>

<style>
  .link-hover {
    color: var(--text-color);
    font-size: min(3vw, 1.5rem);
    font-weight: 600;
  }

  .link-hover:hover {
    font-size: min(3vw, 1.5rem);
    font-weight: 800;
    color: var(--text-color-tertiary);
  }
</style>
