<script lang="ts">
    export let placeholderText: string;
    export let value: string;
</script>


<div class="textInput">
    <input type="text" bind:value placeholder={placeholderText} />
</div>

<style lang="scss">
  .textInput {
    width: 300px;
    min-height: 50px;

    border: 1px solid #ccc;
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;

    input{
      width: 100%;
      padding: 0 10px;
    }
  }
</style>