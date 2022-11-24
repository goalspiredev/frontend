<script lang="ts">
    import CardGroup from "../../lib/components/cards/CardGroup.svelte";
    import cardsContent from '$assets/cardsContent.json';
</script>

<div>
    <div class="otherCard"></div>
    <CardGroup cardsContent={cardsContent}/>
    <div class="otherCard"></div>
</div>

<style lang="scss">
  .otherCard {
    width: 100vw;
    height: 100vh;
    background-color: #5f68a0;
  }
</style>