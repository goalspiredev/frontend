<script lang="ts">
	import Email from '$icons/Email.svelte';
	import Discord from '$icons/Discord.svelte';
	import LinkedIn from '$icons/LinkedIn.svelte';
	import Twitter from '$icons/Twitter.svelte';

	// Create map where key is the name of the social media platform and value is the component icon
	// const socialMediaIcons = new Map<string, any>([['email', Email]]);

	let socialIconColor = 'white';
	let socialIconSize = 25;

	export let social: {
		name: string;
		url: string;
	};
</script>

<div class="social">
	{#if social.name === 'email'}
		<a href={social.url} target="__blank">
			<Email size={socialIconSize} color={socialIconColor} />
		</a>
	{/if}
	{#if social.name === 'discord'}
		<a href={social.url} target="__blank">
			<Discord size={socialIconSize} color={socialIconColor} />
		</a>
	{/if}
	{#if social.name === 'linkedin'}
		<a href={social.url} target="__blank">
			<LinkedIn size={socialIconSize} color={socialIconColor} />
		</a>
	{/if}
	{#if social.name === 'twitter'}
		<a href={social.url} target="__blank">
			<Twitter size={socialIconSize} color={socialIconColor} />
		</a>
	{/if}
</div>

<style lang="scss" scoped>
	.social {
		width: 40px;
		height: 40px;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		border-radius: 10px;

		background-color: #eb4f4f;

        transition: all 0.3s;
	}

    .social:hover {
        transform: scale(1.1);
    }
</style>
