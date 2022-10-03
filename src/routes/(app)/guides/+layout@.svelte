<!-- Main layout-->
<script>
  import Title from "$lib/title.svelte";
  import Footer from "$lib/footer.svelte";
  import '../../../styles/global.css';
</script>

<header>
  <nav>
    <Title title="Ninja Gaming Guides" />
    <div class="links">
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/guides">Guides</a>
    </div>
  </nav>
</header>
<main>
  <!-- Page content goes here in <slot> tag -->
  <slot></slot>
</main>

<Footer />

<style>
  header {
    text-align: center;
    background: rgba(0,0,0,0.1);
  }
  main {
    max-width: 960px;
    margin: 20px auto;
  }
  .links {
    margin-left: auto;
  }
  a {
    margin-left: 10px;
  }
  nav {
    display: flex;
    align-items: center;
    max-width: 960px;
    margin: 0 auto;
  }
</style>