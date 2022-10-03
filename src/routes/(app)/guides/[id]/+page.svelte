<script>
  /** @type {import('./$types').PageData}  */
  export let data
</script>

<div class="guide">
  <h2>{data.guides.title}</h2>
  <p>{data.guides.body}</p>
</div>

<style>
  .guide {
    margin-top: 40px;
    padding: 10px;
    border: 1px dotted rgba(255,255,255, 0.2);
  }
</style>