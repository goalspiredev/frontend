<script>
    // import { chart } from 'svelte-apexcharts';
    //map key value pair
    import {onMount} from "svelte";

    let chartCtx = undefined;

    export let data = new Map();
    export let label = 'Goals finished';
    export let chartType = 'line';

    let moduleLoaded = false;

    onMount(() => {
        import('svelte-apexcharts').then(({chart}) => {
			chartCtx = chart;
            moduleLoaded = true;
        });
    });

    $: data = new Map(data);


    let options = undefined;
    if (chartType === 'pie') {
        options = {
            series: [...data.values()],
            chart: {
                width: 380,
                type: 'pie'
            },
            labels: [...data.keys()],
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }
            ]
        };
    } else {
        options = {
            chart: {
                type: chartType,
                toolbar: {
                    show: false
                }
            },
            series: [
                {
                    name: label,
                    data: [...data.values()]
                }
            ],
            xaxis: {
                categories: [...data.keys()]
            },
            stroke: {
                curve: 'smooth'
            },
            legend: {
                show: false
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }
            ]
        };
    }
</script>

{#if moduleLoaded}
    {#if data.size > 1}
        <div use:chartCtx={options}/>
    {:else}
        <div class="no-data">
            <p>Not enough data :(</p>
        </div>
    {/if}
{:else}
	<div class="no-data">
		<p>Loading...</p>
	</div>
{/if}

<style lang="scss">
    div {
        width: 100%;
        height: 100%;
    }

    .no-data {
        display: flex;
        justify-content: center;
        align-items: center;

        p {
            font-size: 1.5rem;
            font-weight: 800;
            font-family: 'Inter', sans-serif;
        }
    }

    @media (max-width: 480px) {
        div {
            width: 200px;
            height: 350px;
        }
    }
</style>
