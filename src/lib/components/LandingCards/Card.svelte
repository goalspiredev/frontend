<script lang="ts">
    import {onMount} from 'svelte';

    import AOS from 'aos';

    onMount(() => {
        AOS.init();
    });

    export let content: {
        image: string;
        imageSide: 'left' | 'right';
        num: number;
        title: string;
        text: string;
    };
</script>

<template>
    <div class="card" data-aos="fade-right">
        {#if content.imageSide == 'left'}
            <img src={content.image} alt={content.image} />
        {/if}

        <div>
            <h2><span>{content.num}</span>{content.title}</h2>
            <p>
                {@html content.text}
            </p>
        </div>

        {#if content.imageSide == 'right'}
            <img src={content.image} alt={content.image} />
        {/if}
    </div>
</template>

<style lang="scss" scoped>
    .card {
        width: 100vw;

        display: flex;
        justify-content: center;

        div {
            width: 50%;
            padding: 1rem;

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: left;

            p {
                max-width: 640px;

                font-family: 'Quicksand', sans-serif;
                font-weight: 500;
                font-size: large;

                span {
                    color: green;
                }

                @include br-md {
                    font-size: larger;
                }

                @include br-lg {
                    font-size: x-large;
                }
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

            h2 {
                width: 100%;
                max-width: 640px;
                margin-left: 2rem;

                display: flex;
                align-items: flex-start;
                gap: 1rem;

                font-family: 'Quicksand', sans-serif;
                font-weight: 700;
                font-size: x-large;
                color: var(--red);

                @include br-md {
                    font-size: xx-large;
                }

                @include br-lg {
                    font-size: xxx-large;
                }

                span {
                    font-size: medium;
                    color: var(--black);

                    @include br-md {
                        font-size: large;
                    }

                    @include br-lg {
                        font-size: x-large;
                    }
                }
            }
        }

        img {
            width: 50%;
            max-height: 640px;

            display: none;

            object-fit: cover;

            @include br-md {
            	display: block;
            }
        }
    }
</style>
