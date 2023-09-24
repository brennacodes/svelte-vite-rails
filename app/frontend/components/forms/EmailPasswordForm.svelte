<script>
  import InputField from "./InputField.svelte";
  import PillFill from "../buttons/PillFill.svelte";
  import PillOutline from "../buttons/PillOutline.svelte";

  export let email = "";
  export let password = "";

  export let formType = "Sign In";
</script>

<div id="{formType}-form" class="form">
  <h1>{formType}</h1>
  <InputField label="Email" placeholder="Enter your email" bind:fieldInput={email} />
  <InputField label="Password" placeholder="Enter your password" bind:fieldInput={password} />

  <div class="form-buttons">
    <PillFill text={formType} href="/signin" />
    <PillOutline text={formType} href="/" />
  </div>
</div>

<style>
  .form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 1rem;
    gap: 1rem;
  }
</style>