<script lang="ts">
    import {onMount} from 'svelte';

    import AOS from 'aos';

    let minifed: boolean = false;
    onMount(() => {
        AOS.init();

        // Goofy ahh
        window.addEventListener('resize', () => {
            minifed = window.innerWidth < 768;
			console.log(minifed);
        });
    });


    export let content: {
        image: string;
        imageSide: 'left' | 'right';
        imageBlur: string;
        text: string;
    };
</script>

<template>
    <div class="card" data-aos="fade-right">
        {#if content.imageSide == 'left' || minifed}
            <img src={content.image} alt={content.image} style="--color: {content.imageBlur}"/>
        {/if}

        <p>
            {@html content.text}
        </p>

        {#if content.imageSide == 'right' && !minifed}
            <img src={content.image} alt={content.image} style="--color: {content.imageBlur}"/>
        {/if}
    </div>
</template>

<style lang="scss" scoped>
    .card {
        width: 100vw;
        padding: 0.5rem 2rem;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2.5rem;


        @include br-md {
            padding: 1rem 4rem;
            flex-direction: row;
			gap: 1.5rem;
        }

        @include br-lg {
            padding: 2rem 8rem;
        }

        img {
            width: 40%;

            display: block;

            object-fit: cover;

            border-radius: 2rem;
            box-shadow: 0px 10px 24px 0px var(--color);

            @include br-md {
                width: 25%;
            }

            //@include br-md {
            //	display: block;
            //}
        }

        p :global(span) {
            color: #EB4F4F;
        }

        p :global(i) {
            font-style: italic;
        }

        p :global(b) {
            font-weight: bold;
        }

        p {
            width: 85%;
            margin-top: 1rem;

            font-family: 'Quicksand', sans-serif;
            font-weight: 500;
            font-size: large;

            span {
                color: green;
            }

            @include br-md {
                width: 33%;
                font-size: larger;
            }

            @include br-lg {
                font-size: x-large;
            }
        }
    }
</style>
