<script>
    import LinksWithTitle from "$lib/components/common/footer/LinksWithTitle.svelte";
</script>

<footer>
    <div class="upperPart">
        <div class="logoAndDesc">
            <h2>Goalspire</h2>
            <p>Achieve your goals and inspire others.</p>
        </div>
        <LinksWithTitle title="About"
                        links={[{href: "https://google.com", text: "Our team"}, {href: "https://google.com", text: "Our story"}]}/>
        <LinksWithTitle title="Legal" links={[{href: "https://google.com", text: "ToS"}]}/>
        <LinksWithTitle title="Help" links={[{href: "https://google.com", text: "Support"}]}/>

    </div>
    <div class="lowerPart">

    </div>
</footer>

<style lang="scss">

  * {
    font-family: Comfortaa, sans-serif;
  }

  footer {
    width: 100%;
    height: 600px;

    .upperPart {
      background-color: #FAFAFA;
      height: 400px;

      padding: 50px;

      display: flex;
      flex-direction: row;
      justify-content: space-between;
      gap: 50px;

      .logoAndDesc {
        width: 20%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        gap: 20px;

        h2 {
          font-size: 2rem;
        }
      }
    }

    .lowerPart {
      background-color: #1da838;
      height: 200px;
    }
  }

</style>