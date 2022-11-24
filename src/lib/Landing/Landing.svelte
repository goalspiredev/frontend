<script lang="ts">
	import WritingEffect from '$components/common/WritingEffect.svelte';

	const text: string[] = ['discipline.', 'hard work.', 'dedication.', 'perseverance.'];
</script>

<div class="landing-wrapper">
    <WritingEffect {text} />
</div>

<style lang="scss" scoped>
    .landing-wrapper {
        height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;

        font-family: 'Comfortaa', sans-serif;
    }
</style>