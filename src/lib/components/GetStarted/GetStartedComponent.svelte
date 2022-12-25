<script lang="ts">
	import GetStartedSection from "./GetStartedSection.svelte";

    export let content: {
        num: number;
        title: string;
        description: string;
        last?: boolean;
    }[];
</script>

<template>
    <div class="wrap" id="getStarted">
        <div class="sec">
            <h1>
                Get started
            </h1>
            <div class="sections">
                {#each content as section}
                    <GetStartedSection {section} />
                {/each}
                <p>Are you ready to start? Head over to the <a href="/register">register</a> page.</p>
            </div>
        </div>
        <img src="images/started/1.png" alt="pc work">
    </div>
</template>

<style lang="scss" scoped>
    .wrap {
        display: flex;
        gap: 1rem;
        margin: 0.5rem 1rem;

        font-family: 'Quicksand', sans-serif;

        @include br-lg {
            margin: 2rem 4rem;
        }

        .sec {
            width: 100%;
            padding: 0;

            display: flex;
            flex-direction: column;
            gap: 3rem;

            @include br-lg {
                width: 50%;
                padding: 0 3rem;
            }

            h1 {
                font-size: 3rem;
                font-weight: 700;
                text-align: center;

                @include br-md {
                    font-size: 4rem;
                }
            }
        }

        .sections {
            margin-left: 3rem;
            display: flex;
            flex-direction: column;
            gap: 3rem;

            p {
                font-size: 1.2rem;
                text-align: center;
                margin-top: -2rem;
                padding-bottom: 2rem;
                a {
                    color: var(--red);
                    text-decoration: none;
                    font-weight: 700;
                }

                @include br-md {
                    font-size: 1.4rem;
                    text-align: left;
                }

                @include br-lg {

                }
            }

            @include br-md {
                margin-left: 6rem;
            }

            @include br-lg {
                margin-left: 0;
            }
        }

        img {
            width: 50%;
            max-height: 880px;

            display: none;

            object-fit: cover;


            @include br-lg {
                display: block;
            }
        }
    }
</style>