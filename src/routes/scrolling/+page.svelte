<script lang="ts">
    import {inview} from 'svelte-inview';

    let inviewOptions= {
        unobserveOnEnter: true
    }

    let deltaLimits = {
        up: -1000,
        down: 1000
    }

    let totalDelta = 0;
    let currentTarget = null;

    function lockCard(event) {
        console.log(event);
        document.body.style.overflowY = "hidden";

        // scroll to the parent
        event.target.parentElement.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
        currentTarget = event.target;

        document.addEventListener("wheel", onScroll);
    }

    function unlockCard() {
        document.removeEventListener("wheel", onScroll);
        document.body.style.overflowY = "scroll";
    }

    function onScroll(event) {
        totalDelta += event.deltaY;
        currentTarget.parentElement.style.backgroundColor = `rgb(${totalDelta/5}, ${totalDelta/5}, ${totalDelta/5})`;
        if (totalDelta > deltaLimits.down || totalDelta < deltaLimits.up) {
            unlockCard();
        }
    }
</script>

<div class="container">
    <div class="card2">
    </div>
    <div class="card1">
        <div class="onViewTriggerPoint" use:inview={inviewOptions} on:enter={(a) => lockCard(a)}></div>
    </div>
    <div class="card2"></div>
</div>

<style lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    //gap: 100px;
    width: 100vw;

    .card1 {
      background-color: black;
      width: 100%;
      height: 100vh;
      position: relative;

      .onViewTriggerPoint {
        // In the middle of the card, not affecting any other elements
        position: absolute;
        top: 97%;
        left: 50%;
        width: 1px;
        height: 1px;
      }
    }

    .card2 {
      background-color: blue;
      width: 100%;
      height: 100vh;

      .onViewTriggerPoint {
        // In the middle of the card, not affecting any other elements
        position: absolute;
        top: 50%;
        left: 50%;
        width: 1px;
        height: 1px;
      }
    }
  }

</style>