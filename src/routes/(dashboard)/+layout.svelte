<script lang="ts">
	import '$style/global.scss';

	import DashboardNavbar from '$components/common/dashboard_navbar/DashboardNavbar.svelte';
	import { onMount } from 'svelte';
	import { redirect } from '@sveltejs/kit';
	import { useGoalspire } from '$goalspire/useGoalspire';

	const { isLoggedIn } = useGoalspire;

	onMount(async () => {
		if (!(await isLoggedIn())) {
			window.location.href = '/login';
		}
	});
</script>

<template>
	<div class="wrap">
		<div>
			<DashboardNavbar />
		</div>
		<div class="slot">
			<slot />
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.wrap {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		background-color: #fafafa;

		@include br-sm {
			flex-direction: row;
		}
	}

	.slot {
		width: 100%;
		height: 100%;

		display: flex;
	}
</style>
