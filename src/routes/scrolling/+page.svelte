<script lang="ts">
    import CardGroup from "../../lib/components/cards/CardGroup.svelte";
    import Card from "$lib/components/cards/Card.svelte";
</script>

<div>
    <div class="otherCard"></div>
    <Card text="
    We are <b><span>Goalspire</span></b>, <br>
the next generation <span>goal-tracking</span> and to-do software. We help <i>you</i> achieve your dreams and goals with a smart <span>self learning technology</span>.
" image="https://picsum.photos/800/1200"></Card>
    <CardGroup/>
    <div class="otherCard"></div>
</div>

<style lang="scss">
  .otherCard {
    width: 100vw;
    height: 100vh;
    background-color: #5f68a0;
  }
</style>