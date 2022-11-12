<script lang="ts">
    import {inview} from 'svelte-inview';
    import ExampleCard from "../../lib/components/cards/ExampleCard.svelte";
    import {onMount} from "svelte";

    let inviewOptions = {
        unobserveOnEnter: true
    }

    let totalDelta = 0;
    let currentTarget = null;

    let currentCard = null;
    let allChildCards = [];
    let currentCardIndex = 0;

    function registerChildCard(card) {
        allChildCards.push(card);
    }

    function lockCard(event) {
        document.body.style.overflow = "hidden";

        // scroll to the parent
        event.target.parentElement.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
        currentTarget = event.target;

        document.addEventListener("wheel", onScroll);
    }

    function unlockCard() {
        document.removeEventListener("wheel", onScroll);
        document.body.style.overflowY = "scroll";
        currentCard.parentNode.removeChild(currentCard);
    }

    function onScroll(event) {
        totalDelta += event.deltaY;
        currentCard.style.transform = `translateX(${totalDelta}px)`;
        // if (totalDelta > deltaLimits.down || totalDelta < deltaLimits.up) {
        //    unlockCard();
        // }

        // when the card is scrolled out of the screen, remove it
        if (totalDelta > window.innerWidth + 350 || totalDelta < -window.innerWidth) {
            // unlockCard();
            switchCardContext(currentCardIndex);
        }
    }

    function switchCardContext(index)
    {
        console.log(allChildCards.length);
        totalDelta = 0;
        currentCard.parentNode.removeChild(currentCard);

        if (index < allChildCards.length - 1) {
            currentCardIndex++;
            currentCard = allChildCards[currentCardIndex];
        } else {
            currentCardIndex = 0;
            unlockCard();
        }
    }

    onMount(async () => {
        //wait for currentCard to not be null
        while (allChildCards[0] === null) {
            await new Promise(resolve => setTimeout(resolve, 100));
        }
        currentCard = allChildCards[0];
        for (let card of allChildCards)
        {
            card.style.left = "-350px";
        }
    })
</script>

<div class="container">
    <div class="card2">
    </div>
    <div class="card1">
        <div class="cardWrapper" bind:this={allChildCards[0]}>
            <ExampleCard name="1" bgColor="red"/>
        </div>
        <div class="cardWrapper" bind:this={allChildCards[1]}>
            <ExampleCard name="2" bgColor="green"/>
        </div>
        <div class="cardWrapper" bind:this={allChildCards[2]}>
            <ExampleCard name="3" bgColor="blue"/>
        </div>
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

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .cardWrapper{
        position: absolute;
        width: auto;
        height: auto;
      }

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