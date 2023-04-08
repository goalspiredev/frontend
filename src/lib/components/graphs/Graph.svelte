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
                            width: 280,
                            height: 280
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
                            width: 250,
                            height: 250,
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
    <div class="chartWrapper">
        {#if data.size > 1}
            <div use:chartCtx={options}/>
        {:else}
            <div class="no-data">
                <p>Not enough data :(</p>
            </div>
        {/if}
    </div>
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

    .chartWrapper {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
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
            width: 90%;
            height: 350px;

            align-self: center;
        }
    }
</style>
