<script lang="ts">
	import '$style/global.scss';

	import DashboardNavbar from '$components/common/dashboard_navbar/DashboardNavbar.svelte';
</script>

<template>
	<div style="display: flex; gap: 1rem; background-color: #FAFAFA">
		<div>
			<DashboardNavbar />
		</div>
		<div style="width: 100%; height: 100vh">
			<slot />
		</div>
	</div>
</template>
