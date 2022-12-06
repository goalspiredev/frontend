<script lang="ts">
	import { onMount } from 'svelte';

	import LinksWithTitle from '$lib/components/common/footer/LinksWithTitle.svelte';
	import Newsletter from '$lib/components/common/footer/Newsletter.svelte';
	import Social from '$lib/components/common/footer/Social.svelte';

	export let socials: {
		name: string;
		url: string;
	}[];
	let minimized = false;

	onMount(() => {
		window.addEventListener('resize', () => {
			minimized = window.innerWidth < 1000;
		});
	});
</script>

<footer>
	<div class="upperPart">
		<div class="logoAndDesc">
			<h2>Goalspire</h2>
			<p>Achieve your goals and inspire others.</p>
		</div>
		<LinksWithTitle
			title="About"
			links={[
				{ href: 'https://google.com', text: 'Team' },
				{ href: 'https://google.com', text: 'Story' },
				{ href: 'https://google.com', text: 'Vision' }
			]}
			align={minimized ? 'center' : 'flex-start'}
		/>
		<LinksWithTitle
			title="Legal"
			links={[
				{ href: 'https://google.com', text: 'ToS' },
				{ href: 'https://google.com', text: 'EULA' },
				{ href: 'https://google.com', text: 'Privacy Policy' }
			]}
			align={minimized ? 'center' : 'flex-start'}
		/>
		<LinksWithTitle
			title="Help"
			links={[
				{ href: 'https://google.com', text: 'Support' },
				{ href: 'https://google.com', text: 'Get started' }
			]}
			align={minimized ? 'center' : 'flex-start'}
		/>
		<Newsletter />
	</div>
	<div class="lowerPart">
		<p>© 2022 Goalspire. All rights reserved.</p>
		<div class="socials">
			{#each socials as social}
				<Social {social} />
			{/each}
		</div>
	</div>
</footer>

<style lang="scss" scoped>
	* {
		font-family: 'Comfortaa', sans-serif;
	}

	footer {
		width: 100%;
		height: 400px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		.upperPart {
			background-color: #fafafa;
			height: 300px;
			width: 100%;

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
			width: 100%;

			background-color: #fafafa;

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

	@media (max-width: 1000px) {
		footer {
			height: 1300px;

			.upperPart {
				height: 1200px;
				flex-direction: column;
				align-items: center;

				.logoAndDesc {
					display: flex;
					width: 80%;
					justify-content: center;

					h2 {
						align-self: center;
						text-align: center;
					}

					p {
						align-self: center;
						text-align: center;
					}
				}
			}
		}
	}

	@media (max-width: 700px) {
		footer {
			height: 1400px;
			.lowerPart {
				height: 200px;
				align-items: center;
				flex-direction: column-reverse;
				gap: 30px;

				.socials {
					width: 100%;
					justify-content: center;
				}
			}
		}
	}
</style>
