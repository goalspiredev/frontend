<script lang="ts">
    import {createEventDispatcher} from "svelte";

    const dispatch = createEventDispatcher();

    let self: HTMLElement;

    export function change(isSelected: boolean) {
        if (isSelected) {
            self.style.backgroundColor = "#FFFFFF";
            self.style.width = "4rem";
        } else {
            self.style.backgroundColor = "#CCCCCC";
            self.style.width = "2rem";
        }
    }

    function onClick() {
        dispatch("onSelected");
    }
</script>

<a href="" on:click={onClick}>
    <div class="control" bind:this={self}>
    </div>
</a>

<style lang="scss">
  a {
    .control {
      width: 2rem;
      height: 1rem;
      border-radius: 10px;
      background-color: #CCCCCC;
      transition: all 0.15s ease-in-out;
    }
  }
</style>