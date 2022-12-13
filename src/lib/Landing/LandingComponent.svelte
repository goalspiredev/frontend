<script lang="ts">
    import WritingEffect from '$components/common/WritingEffect.svelte';
    import CarouselFullScreen from '$components/carousel/CarouselFullScreen.svelte';

    export let text: string[];
</script>

<template>
    <CarouselFullScreen>
        <div class="content">
            <div>
                <h1 class="font-medium">It is about</h1>
                <WritingEffect {text}/>
                <span class="font-light">|</span>
            </div>
            <button><a href="#cards">begin now</a></button>
        </div>
    </CarouselFullScreen>
</template>

<style lang="scss" scoped>
    .content {
        margin-bottom: 8rem;

        display: flex;
        flex-direction: column;
        gap: 3rem;
        align-items: center;
        text-align: center;

        font-family: 'Quicksand', sans-serif;
        font-weight: bold;
        color: black;
        font-size: 2.25rem;

        @include br-sm {
            font-size: 3.75rem;
        }

        @include br-md {
            font-size: 4.5rem;
        }

        @include br-lg {
            font-size: 6rem;
        }

        h1 {
            font-weight: 500;
        }

        span {
            font-weight: 300;
        }

        button {
            padding: 0.25rem 2rem;

            transition-property: all;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            transition-duration: 250ms;

            border: 2px solid white;
            border-radius: 0.25rem;

            text-transform: uppercase;
            font-size: small;
            color: white;

            display: flex;

            // TODO:: This does not make the whole button clickable and is a bad hack
            a {
                width: 100%;
                height: 100%;
                text-decoration: none;
            }

            &:hover {
                background-color: #EB4F4F;
                border: 2px solid #EB4F4F;
            }

            @include br-sm {
                font-size: medium;
            }

            @include br-md {
                font-size: large;
            }

            @include br-lg {
                padding: 0.5rem 4rem;
                font-size: x-large;
            }
        }
    }
</style>
