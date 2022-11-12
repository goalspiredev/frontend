<script lang="ts">
    import {TranslateColor} from "../../../utils/TranslateColor";
    import {onMount} from "svelte";

    export let name: string;
    export let bgColor: string;

    let color: string;

    onMount(() => {
        color = TranslateColor(bgColor);
    });
</script>

<div class="card" style="background-color: {color}">
    <p>{name}</p>
</div>


<style lang="scss">
  .card {
    border-radius: 4px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    padding: 1rem;
    margin: 1rem;

    width: 300px;
    height: 250px;

    display: flex;
    align-items: center;
    justify-content: center;

    p {
      font-size: 5rem;
      font-weight: 900;
      color: white;
    }
  }
</style>