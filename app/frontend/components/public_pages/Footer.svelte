<script>
  import LinkHover from "../buttons/LinkHover.svelte";

</script>

<footer class="public-footer">
    <div class="footer-brand">
        <img class="footer-logo" src="/images/logo.png" alt="logo">
    </div>

    <ul class="footer-links">
      <div class="footer-beginning">
        <li><LinkHover text="Home" href="/" /></li>
        <li><LinkHover text="About" href="/about" /></li>
        <li><LinkHover text="Explore" href="/explore" /></li>
      </div>
      <div class="footer-end">
        <li><LinkHover text="Home" href="/" /></li>
        <li><LinkHover text="About" href="/about" /></li>
        <li><LinkHover text="Explore" href="/explore" /></li>
      </div>
    </ul>
</footer>

<style>
  .public-footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    padding: .25rem;
    height: 15svh;
    width: 100%;
    box-sizing: border-box;
    background-color: var(--bg-color);
  }

  .footer-brand {
    flex: 1;
    display: flex;
    align-items: center;
    height: inherit;
  }

  .footer-logo {
    display: flex;
    align-items: center;
    width: 25vw;
    height: auto;
  }

  .footer-links {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 50%;
  }

  .footer-beginning {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .footer-end {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>
