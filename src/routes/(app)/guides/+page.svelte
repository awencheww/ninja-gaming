<!-- Getting all page data P.S. all props data has a default data properties -->
<script>
  /** @type {import('./$types').PageData} */
  export let data
</script>

<div class="guides">
  <ul>
    <li>
      {#each data.guides as guide}
        <li>
          <a data-sveltekit-prefetch href={`/guides/${guide.id}`}>{guide.title}</a>
        </li>
      {/each}
    </li>
  </ul>
</div>

<style>
  .guides {
    margin-top: 20px;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  a {
    display: inline-block;
    margin-top: 10px;
    padding: 10px;
    border: 1px dotted rgba(255,255,255,0.2);
  }
</style>