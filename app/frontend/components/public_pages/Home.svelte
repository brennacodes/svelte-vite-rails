<script>
    import Header from "./Header.svelte";
    import Footer from "./Footer.svelte";
</script>

<Header />

<slot />

<Footer />

<style>
  .home {
    display: flex;
    flex: 1;
    flex-direction: column;
    box-sizing: border-box;
    width: 100%;
  }
</style>
