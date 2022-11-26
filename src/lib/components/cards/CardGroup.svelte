<script lang="ts">
    import {inview} from 'svelte-inview';
    import {onMount} from "svelte";
    import Card from "$components/cards/Card.svelte";

    type CardContent = {
        title: string;
        cards: CardData[];
    };

    type CardData = {
        image: string;
        text: string;
    }

    export let cardsContent: CardContent = null;

    let inviewOptions = {
        unobserveOnEnter: false
    }

    let triggerPoint: HTMLElement = null;

    let totalDelta: number = 0;
    let currentCard: HTMLElement = null;
    let allChildCards: HTMLElement[] = [];
    let currentCardIndex: number = 0;
    let cardFlowFinished: boolean = false;
    let currentLock: NodeJS.Timer = null;

    let offsetConstant: number = 850;

    // above or under
    let currentState: string = "above";

    function lockCard(event) {
        document.body.style.overflow = "hidden";
        currentLock = setInterval(() => event.target.parentElement.scrollIntoView({
            behavior: "auto",
            block: "center"
        }), 10);

        if (cardFlowFinished) {
            currentCard.style.right = -offsetConstant + "px";
            currentCard.style.left = "";
        } else {
            currentCard.style.left = -offsetConstant + "px";
            currentCard.style.right = "";
        }
        currentCard.style.display = "flex";
        document.addEventListener("wheel", onScroll, {passive: false});
    }

    function unlockCard() {
        document.removeEventListener("wheel", onScroll);
        clearInterval(currentLock);
        document.body.style.overflowY = "scroll";
        currentState = currentState === "above" ? "under" : "above";

        if (currentState == "under") {
            triggerPoint.style.top = "3%";
        } else {
            triggerPoint.style.top = "97%";
        }
    }

    function onScroll(event) {
        totalDelta += event.deltaY;
        currentCard.style.transform = `translateX(${totalDelta}px)`;

        // when the card is scrolled out of the screen, remove it
        if (totalDelta > window.innerWidth + offsetConstant) {
            switchCardContext(currentCardIndex, false);
        } else if (totalDelta < -window.innerWidth - offsetConstant) {
            switchCardContext(currentCardIndex, true);
        }
    }

    function switchCardContext(index, reversed) {
        totalDelta = 0;
        if (reversed) {
            index = allChildCards.length - 1 - index;
        }
        if (index < allChildCards.length - 1 && index >= 0) {
            reversed ? currentCardIndex-- : currentCardIndex++;
            currentCard = allChildCards[currentCardIndex];

            if (reversed) {
                currentCard.style.right = -offsetConstant + "px";
                currentCard.style.left = "";
            } else {
                currentCard.style.left = -offsetConstant + "px";
                currentCard.style.right = "";
            }
        } else {
            reversed ? currentCardIndex = 0 : currentCardIndex = index;
            cardFlowFinished = !cardFlowFinished;
            unlockCard();
        }
    }

    onMount(async () => {
        while (allChildCards[0] === null) {
            await new Promise(resolve => setTimeout(resolve, 100));
        }
        currentCard = allChildCards[0];
        for (let card of allChildCards) {
            card.style.left = -offsetConstant + "px";
        }
    })
</script>

<div class="container">
    <div class="cardGroup" id="group">
        <h2>{cardsContent.title}</h2>
        {#each cardsContent.cards as card, i}
            <div class="cardWrapper" bind:this={allChildCards[i]}>
                <Card text={card.text} image={card.image}/>
            </div>
        {/each}
        <div class="onViewTriggerPoint" use:inview={inviewOptions} on:enter={(a) => lockCard(a)}
             bind:this={triggerPoint}></div>
    </div>
</div>

<style lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    //gap: 100px;
    width: 100vw;

    .cardGroup {
      background-color: black;
      width: 100%;
      height: 100vh;
      position: relative;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      h2{
        color: white;
        font-size: 3rem;
        position: absolute;
        top: 10%;

        font-family: Comfortaa, sans-serif;
      }

      .cardWrapper {
        position: absolute;
        width: auto;
        height: auto;
      }

      .onViewTriggerPoint {
        position: absolute;
        top: 97%;
        left: 50%;
        width: 1px;
        height: 1px;
      }
    }
  }
</style>