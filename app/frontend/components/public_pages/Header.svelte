<script>
  import { users } from "~/api";

  const newPath = async () => await users.new();

  import PillFill from "../buttons/PillFill.svelte";
  import PillOutline from "../buttons/PillOutline.svelte";
  import LinkHover from "../buttons/LinkHover.svelte";
</script>

<nav class="public-header">
    <div class="header-logo">
        <img height="50" src="/images/logo.png" alt="logo">
    </div>

    <ul class="header-beginning">
        <li><LinkHover text="Home" href="_top" /></li>
        <li><LinkHover text="About" href="#about" /></li>
        <li><LinkHover text="Explore" href="#explore" /></li>
    </ul>

    <ul class="header-end">
      <li><PillFill text="Sign In" /></li>
      <li><PillOutline text="Sign Up" on:click={newPath}/></li>
    </ul>
</nav>

<style>
  .public-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    left: 0;
    padding: .25rem;
    height: 8svh;
    background-color: var(--bg-color);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .header-logo {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .header-beginning {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: min(2vw, 1rem);
  }

  .header-end {
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: min(2vw, 1rem);
  }

</style>
