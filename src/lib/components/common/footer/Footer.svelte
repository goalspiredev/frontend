<script lang="ts">
    import LinksWithTitle from "$lib/components/common/footer/LinksWithTitle.svelte";
    import Newsletter from "$lib/components/common/footer/Newsletter.svelte";
    import Social from "$lib/components/common/footer/Social.svelte";
    import type {SocialData} from "$lib/types/SocialData";


    // TODO: Load this from JSON
    let socials: SocialData[] = [];
    socials.push({name: "email", url: "mailto:help@goalspire.net"});
    socials.push({name: "linkedin", url: "https://linkedin.com/goalspire"});
    socials.push({name: "twitter", url: "https://twitter.com/goalspire"});
    socials.push({name: "discord", url: "https://discord.gg/goalspire"});
</script>

<footer>
    <div class="upperPart">
        <div class="logoAndDesc">
            <h2>Goalspire</h2>
            <p>Achieve your goals and inspire others.</p>
        </div>
        <LinksWithTitle title="About"
                        links={[{href: "https://google.com", text: "Team"}, {href: "https://google.com", text: "Story"}, {href: "https://google.com", text: "Vision"}]}/>
        <LinksWithTitle title="Legal"
                        links={[{href: "https://google.com", text: "ToS"}, {href: "https://google.com", text: "EULA"}, {href: "https://google.com", text: "Privacy Policy"}]}/>
        <LinksWithTitle title="Help"
                        links={[{href: "https://google.com", text: "Support"}, {href: "https://google.com", text: "Get started"}]}/>
        <Newsletter/>

    </div>
    <div class="lowerPart">
        <p>© 2022 Goalspire. All rights reserved.</p>
        <div class="socials">
            {#each socials as social}
                <Social social={social}/>
            {/each}
        </div>
    </div>
</footer>

<style lang="scss">

  * {
    font-family: Comfortaa, sans-serif;
  }

  footer {
    width: 100%;
    height: 400px;

    .upperPart {
      background-color: #FAFAFA;
      height: 300px;

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

        gap: 5px;

        h2 {
          font-size: 2rem;
          font-weight: 900;
        }

        p {
          font-weight: 600;
          font-size: 1.2rem;
        }
      }
    }

    .lowerPart {
      height: 100px;

      background-color: #FAFAFA;

      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      padding: 50px;

      p {
        height: 100%;
        display: flex;
        align-items: center;
        padding-left: 10px;
      }

      .socials {
        width: 30%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        gap: 10px;
      }
    }
  }

</style>