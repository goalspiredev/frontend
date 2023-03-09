<script>
    import { chart } from "svelte-apexcharts";
    //map key value pair
    export let data =  new Map();
    export let label = "Goals finished";
    export let chartType = "line";
    data.set("Jan", 10);
    data.set("Feb", 20);
    data.set("Mar", 30);
    data.set("Apr", 40);
    data.set("May", 50);
    //drop
    data.set("Jun", 21);
    data.set("Jul", 22);
    data.set("Aug", 87);

    let options = {
        chart: {
            type: chartType,
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
</script>

<div use:chart={options} />

<style lang="scss">
    div {
        width: 500px;
        height: 350px;
    }

    @media (max-width: 480px) {
        div {
            width: 200px;
            height: 350px;
        }
    }
</style>