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
				{ href: '', text: 'Team' },
				{ href: '', text: 'Story' },
				{ href: '', text: 'Vision' }
			]}
			align={minimized ? 'center' : 'flex-start'}
		/>
		<LinksWithTitle
			title="Legal"
			links={[
				{ href: '/ToS_Goalspire.pdf', text: 'ToS' },
				{ href: '/EULA_Goalspire.pdf', text: 'EULA' },
				{ href: '/Privacy_Policy_Goalspire.pdf', text: 'Privacy Policy' }
			]}
			align={minimized ? 'center' : 'flex-start'}
		/>
		<LinksWithTitle
			title="Help"
			links={[
				{ href: '', text: 'Support' },
				{ href: '', text: 'Get started' }
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

		@media (max-width: 1000px) {
			height: 1300px;
		}

		@media (max-width: 700px) {
			height: 1400px;
		}

		.upperPart {
			width: 100%;
			height: 300px;
			padding: 50px;

			display: flex;
			flex-direction: row;
			gap: 50px;
			justify-content: space-between;

			background-color: #fafafa;

			@media (max-width: 1000px) {
				height: 1200px;
				flex-direction: column;
				align-items: center;
			}

			.logoAndDesc {
				width: 20%;
				height: 100%;

				display: flex;
				flex-direction: column;
				gap: 5px;
				justify-content: flex-start;
				align-items: flex-start;

				@media (max-width: 1000px) {
					display: flex;
					width: 80%;
					justify-content: center;
				}

				h2 {
					font-size: 2rem;
					font-weight: 900;

					@media (max-width: 1000px) {
						align-self: center;
						text-align: center;
					}
				}

				p {
					font-weight: 600;
					font-size: 1.2rem;

					@media (max-width: 1000px) {
						align-self: center;
						text-align: center;
					}
				}
			}
		}

		.lowerPart {
			width: 100%;
			height: 100px;
			padding: 50px;

			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;

			background-color: #fafafa;

			@media (max-width: 700px) {
				height: 200px;
				gap: 30px;
				align-items: center;
				flex-direction: column-reverse;
			}

			p {
				height: 100%;
				padding-left: 10px;
				display: flex;
				align-items: center;
			}

			.socials {
				width: 30%;
				height: 100%;

				display: flex;
				flex-direction: row;
				gap: 10px;
				justify-content: flex-end;
				align-items: center;

				@media (max-width: 700px) {
					width: 100%;
					justify-content: center;
				}
			}
		}
	}
</style>
