<script lang="ts">
	export let text: string[] = ['Default', 'Text'];
	export let eraseInterval = 50;
	export let typeInterval = 200;
	export let waitInterval = 1000;
	export let firstWaitInterval = 1000;

	let actualText: string = text[0];
	let typeIndex = 1;
	let backwards = true;
	let intervalTimer = 90;
	// eslint-disable-next-line no-undef
	let interval: string | number | NodeJS.Timeout | undefined;
	let stop = false;

	setTimeout(() => {
		writingEffect();
	}, firstWaitInterval);

	function writingEffect() {
		clearInterval(interval);

		if (backwards) {
			actualText = actualText.slice(0, -1);
			if (actualText.length === 0) {
				backwards = false;
				intervalTimer = typeInterval;
			}
		} else {
			actualText += text[typeIndex].charAt(actualText.length);
			if (actualText.length === text[typeIndex].length) {
				backwards = true;
				stop = true;
				intervalTimer = eraseInterval;
				typeIndex = (typeIndex + 1) % text.length;
			}
		}

		if (stop) {
			stop = false;
			setTimeout(() => {
				interval = setTimeout(writingEffect, intervalTimer);
			}, waitInterval);
		} else {
			interval = setInterval(writingEffect, intervalTimer);
		}
	}
</script>

{actualText}
