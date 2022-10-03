<!-- Main layout-->
<script>
  import Footer from "$lib/footer.svelte";
  import '../../styles/global.css';
  
  export let title = 'Ninja Gaming'
</script>

<header>
  <div class="title">
    <img src="/game-controller-svgrepo-com.svg" alt="site logo" width="50px" height="50px">
    <h1>{title}</h1>
  </div>
</header>

<main>
  <!-- Page content goes here in <slot> tag -->
  <slot></slot>
</main>

<Footer />

<style>
  header{ 
    display: flex;
  }
  main {
    max-width: 960px;
    margin: 20px auto;
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
  }
  .title img {
    display: inline-block;
    filter: invert(88%) sepia(18%) saturate(886%) hue-rotate(199deg) brightness(100%) contrast(90%);
    padding: 10px;
  }
  .title h1 {
    margin-left: 10px;
  }
</style>