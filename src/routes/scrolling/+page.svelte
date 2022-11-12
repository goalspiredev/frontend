<script lang="ts">
    import {inview} from 'svelte-inview';
    import ExampleCard from "../../lib/components/cards/ExampleCard.svelte";
    import {onMount} from "svelte";

    let inviewOptions = {
        unobserveOnEnter: false
    }

    let totalDelta = 0;

    let currentCard = null;
    let allChildCards = [];
    let currentCardIndex = 0;
    let cardFlowFinished = false;

    function registerChildCard(card) {
        allChildCards.push(card);
    }

    function lockCard(event) {
        document.body.style.overflow = "hidden";

        // scroll to the parent
        event.target.parentElement.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
        if (cardFlowFinished) {
            currentCard.style.right = "-350px";
            currentCard.style.left = "";
        } else {
            currentCard.style.left = "-350px";
            currentCard.style.right = "";
        }
        currentCard.style.display = "flex";
        document.addEventListener("wheel", onScroll);
    }

    function unlockCard() {
        document.removeEventListener("wheel", onScroll);
        document.body.style.overflowY = "scroll";
    }

    function onScroll(event) {
        totalDelta += event.deltaY;
        currentCard.style.transform = `translateX(${totalDelta}px)`;
        // if (totalDelta > deltaLimits.down || totalDelta < deltaLimits.up) {
        //    unlockCard();
        // }

        // when the card is scrolled out of the screen, remove it
        if (totalDelta > window.innerWidth + 350) {
            switchCardContext(currentCardIndex, false);
        } else if (totalDelta < -window.innerWidth - 350) {
            switchCardContext(currentCardIndex, true);
        }
    }

    function switchCardContext(index, reversed) {
        totalDelta = 0;
        if (reversed) {
            index = allChildCards.length - 1 - index;
        }
        if (index < allChildCards.length - 1 && index >= 0) {
            if (reversed) {
                currentCardIndex--;
            } else {
                currentCardIndex++;
            }
            currentCard = allChildCards[currentCardIndex];
            if (reversed) {
                currentCard.style.right = "-350px";
                currentCard.style.left = "";
            } else {
                currentCard.style.left = "-350px";
                currentCard.style.right = "";
            }
        } else {
            if (!reversed) {
                currentCardIndex = index;
            } else {
                currentCardIndex = 0;
            }
            cardFlowFinished = !cardFlowFinished;
            unlockCard();
        }
    }

    onMount(async () => {
        //wait for currentCard to not be null
        while (allChildCards[0] === null) {
            await new Promise(resolve => setTimeout(resolve, 100));
        }
        currentCard = allChildCards[0];
        for (let card of allChildCards) {
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

      .cardWrapper {
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