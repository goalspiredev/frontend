<script lang="ts">
    import CarouselControl from "../controls/CarouselControl.svelte";
    import {onMount} from "svelte";

    export let items: string[] = [];

    let imgElement: HTMLElement = null;

    let controlSelectionHandles: CarouselControl[] = [];

    function changeImageContext(i: number) {
        if (imgElement != null) {
            let wasFirst = false;
            if (imgElement.style.backgroundImage == "") {
                wasFirst = true;
                imgElement.style.backgroundImage = `url(${items[i]})`;
            }

            if (!wasFirst) {
                // lerp between the two images
                imgElement.style.transition = "opacity 0.4s ease-in-out";
                imgElement.style.opacity = "0";
                setTimeout(() => {
                    imgElement.style.opacity = "1";
                    imgElement.style.backgroundImage = `url(${items[i]})`;
                }, 400);
            }
        }
        controlSelectionHandles.forEach((handle, index) => {
            if (handle != null) {
                if (index === i) {
                    handle.change(true);
                } else {
                    handle.change(false);
                }
            }
        });
    }

    onMount(() => {
        // TODO: Preload these images
        items = ["https://img.freepik.com/free-photo/shiraito-waterfall-autumn-japan_335224-193.jpg?w=2000",
            "https://img.freepik.com/free-photo/beautiful-scenery-road-forest-with-lot-colorful-autumn-trees_181624-30942.jpg?w=2000",
            "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111-1500x1000.jpg",
            "https://i.insider.com/624d878bdf9dd800183f305c?width=1136&format=jpeg"];
        setTimeout(() => {
            changeImageContext(0)
        }, 250);
    });
</script>

<div class="carousel">
    <div class="imageWrapper" bind:this={imgElement}>

    </div>

    <div class="carouselControls">
        {#each items as item, i}
            <CarouselControl bind:this={controlSelectionHandles[i]} on:onSelected={() => changeImageContext(i)}/>
        {/each}
    </div>
</div>

<style lang="scss">
  .carousel {
    width: 100%;
    height: 100%;
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    position: relative;

    .imageWrapper {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 1;

      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }

    .carouselControls {
      z-index: 2;
      width: 30%;
      height: 10%;
      margin-bottom: 30px;

      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;

    }
  }
</style>