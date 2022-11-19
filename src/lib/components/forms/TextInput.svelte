<script lang="ts">
    export let value: string = '';

    let labelText: HTMLElement;
    let parent: HTMLElement;

    function focus() {
        labelText.style.top = "0px";
        labelText.style.color = "#EB4F4F";
        labelText.style.fontSize = "0.9rem";
    }

    function leave() {
        if (value.length == 0) {
            labelText.style.top = "25%";
            labelText.style.color = "#000000";
            labelText.style.fontSize = "1rem";
        }
    }
</script>

<div class="textInput" bind:this={parent}>
    <label bind:this={labelText}>
        <slot/>
    </label>
    <input type="text" bind:value on:focusin={focus} on:focusout={leave}/>
</div>

<style lang="scss">
  .textInput {
    position: relative;

    max-width: 480px;
    width: 100%;
    min-width: 300px;
    height: 48px;

    border: 1px solid #ccc;
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    label {
      position: absolute;
      top: 25%;
      padding-left: 10px;
      transition: all 0.2s ease-in-out;
      font-size: 1rem;
    }

    input {
      width: 100%;
      padding: 20px 10px 0;
      height: 100%;
    }
  }
</style>
