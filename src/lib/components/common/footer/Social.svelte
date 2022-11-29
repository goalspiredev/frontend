<script lang="ts">
    import type {SocialData} from "$lib/types/SocialData";
    import Email from "$icons/Email.svelte";
    import {onMount} from "svelte";
    import Discord from "../../../../icons/Discord.svelte";
    import LinkedIn from "../../../../icons/LinkedIn.svelte";
    import Twitter from "../../../../icons/Twitter.svelte";

    // Create map where key is the name of the social media platform and value is the component icon
    const socialMediaIcons = new Map<string, any>([
        ["email", Email],
    ]);

    let socialIconColor: string = "white";
    let socialIconSize: number = 25;

    export let social: SocialData;
</script>

<div class="social">
    {#if social.name === "email"}
        <Email size={socialIconSize} color={socialIconColor}/>
    {/if}
    {#if social.name === "discord"}
        <Discord size={socialIconSize} color={socialIconColor}/>
    {/if}
    {#if social.name === "linkedin"}
        <LinkedIn size={socialIconSize} color={socialIconColor}/>
    {/if}
    {#if social.name === "twitter"}
        <Twitter size={socialIconSize} color={socialIconColor}/>
    {/if}
</div>

<style lang="scss">
  .social {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    background-color: #EB4F4F;

    border-radius: 10px;
  }
</style>