<script lang="ts">
    export let text: string;
    export let image: string;
</script>

<div class="card" style="background-image: {image}">
    <img src={image} alt="">
    <p>{@html text}</p>
</div>


<style lang="scss">
  .card {
    border-radius: 4px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    padding: 1rem;
    margin: 1rem;

    width: 800px;
    height: 350px;

    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: row;

    background-color: white;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 16px;

      //shadow
      box-shadow: 0px 3px 15px 0px rgba(0, 0, 0, 0.35);
    }

    p {
      width: 100%;
      font-size: 1.5rem;
      font-weight: 200;
      color: black;
      font-family: Comfortaa, sans-serif;
      padding-left: 3rem;


      text-align: left;
    }

    p :global(b) {
      font-weight: 900;
      font-family: Comfortaa, sans-serif;
    }

    p :global(i) {
      font-style: italic;
    }

    p :global(span)
    {
      color: #EB4F4F;
    }
  }
</style>