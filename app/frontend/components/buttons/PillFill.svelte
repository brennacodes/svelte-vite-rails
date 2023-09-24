<script>
  export let text = "Button";
</script>

<button class="button-fill" type="button" on:click>
    { text }
</button>

<style>
  .button-fill {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 2rem;
    background-color: var(--text-color);
    color: var(--bg-color);
    font-size: min(2vw, 1rem);
    font-weight: 600;
    text-wrap: nowrap;
  }

  .button-fill:hover {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.4rem 0.9rem;
    border: 2px solid var(--text-color);
    border-radius: 2rem;
    background-color: transparent;
    color: var(--text-color);
    font-size: min(2vw, 1rem);
    font-weight: 600;
    text-wrap: nowrap;
  }
</style>