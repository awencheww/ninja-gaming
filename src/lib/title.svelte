<script>
  export let title = 'Ninja Gaming'
</script>

<div class="title">
  <img src="/game-controller-svgrepo-com.svg" alt="site logo" width="50px" height="50px">
  <h1>{title}</h1>
</div>

<style>
  .title {
    display: flex;
    align-items: center;
    justify-content: center;
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