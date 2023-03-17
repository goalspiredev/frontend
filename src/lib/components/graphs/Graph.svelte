<script>
    import {chart} from "svelte-apexcharts";
    //map key value pair
    export let data = new Map();
    export let label = "Goals finished";
    export let chartType = "line";
    // data.set("Jan", 10);
    // data.set("Feb", 20);
    // data.set("Mar", 30);
    // data.set("Apr", 40);
    // data.set("May", 50);
    // //drop
    // data.set("Jun", 21);
    // data.set("Jul", 22);
    // data.set("Aug", 87);

    $: data = new Map(data);

    let options = undefined;
    if (chartType === "pie") {
        options = {
            series: [...data.values()],
            chart: {
                width: 380,
                type: 'pie',
            },
            labels: [...data.keys()],
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        };
    } else {
        options = {
            chart: {
                type: chartType,
                toolbar: {
                    show: false,
                }
            },
            series: [
                {
                    name: label,
                    data: [...data.values()],
                },
            ],
            xaxis: {
                categories: [...data.keys()],
            },
            stroke: {
                curve: "smooth",
            },
            legend: {
                show: false,
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200,
                        },
                        legend: {
                            position: "bottom",
                        },
                    },
                },
            ],
        };
    }
</script>
{#if data.size > 1}
    <div use:chart={options}/>
{:else}
    <div class="no-data">
        <p>Not enough data :(</p>
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
            font-family: "Inter", sans-serif;
        }
    }

    @media (max-width: 480px) {
        div {
            width: 200px;
            height: 350px;
        }
    }
</style>