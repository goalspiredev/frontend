<script>
    import TextInput from "$lib/components/forms/TextInput.svelte";
    import Button from "$lib/components/forms/Button.svelte";

    let value = "";
</script>

<div class="container">
    <h2>Do you want to be the first to know about new stuff Goalspire brings?</h2>
    <div class="input">
        <TextInput bind:value={value}>Your e-mail</TextInput>
    </div>
    <div class="button">
        <Button on:submit={() => console.log(value)}>Subscribe</Button>
    </div>
</div>

<style lang="scss">
    .container {
        width: 20%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        height: 100%;

        gap: 20px;

        h2 {
            font-weight: 1200;
            font-size: 1.2rem;
            font-family: Comfortaa, sans-serif;
        }

        .input {
            width: 100%;
        }

        .button {
            width: 100%;
        }
    }

    @media (max-width: 1000px) {
        .container {
            width: 50%;
            justify-content: center;
            align-items: center;

            .button {
                width: auto;
            }
        }
    }
</style>