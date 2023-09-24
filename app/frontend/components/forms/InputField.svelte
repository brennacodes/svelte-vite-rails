<script>
  export let label = "";
  export let placeholder = "";

  let fieldInput = "";
</script>

<div id="{label}-input-group" class="input-with-label">
  <label for={label} id="{label}-label" class="input-label">{label}:</label>
  <input type="text" id="{label}-input" class="field-input" name="email" minLength="8" required bind:value={fieldInput} {placeholder}>
</div>

<style>
  .input-with-label {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  .input-label {
    font-size: min(2vw, 1rem);
    font-weight: 600;
    padding-bottom: 0.25rem;
  }

  .field-input {
    padding: 0.5rem 1rem;
    border: 2px solid var(--text-color-secondary);
    border-radius: 10px;
    background-color: transparent;
    color: var(--text-color-tertiary);
    font-size: min(2vw, 1rem);
    font-weight: 600;
    cursor: pointer;
    text-wrap: nowrap;
  }
</style>