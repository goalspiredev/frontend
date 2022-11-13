<script lang="ts">
    import Eye from "../../../icons/Eye.svelte";
    import EyeDashed from "../../../icons/EyeDashed.svelte";

    export let value: string;
    export let placeholderText: string;

    let passwordShown = false;
    let passwordInput = null;

    function togglePasswordVisibility() {
        console.log("ya");
        passwordShown = !passwordShown;

        if (passwordShown) {
            passwordInput.type = "text";
        } else {
            passwordInput.type = "password";
        }
    }

</script>

<div class="passwordInput">
    <input type="password" name="password" id="password" placeholder={placeholderText} bind:value bind:this={passwordInput}/>
    {#if !passwordShown}
        <a on:click={togglePasswordVisibility} href="">
            <Eye/>
        </a>
    {:else}
        <a on:click={togglePasswordVisibility} href="">
            <EyeDashed/>
        </a>
    {/if}
</div>

<style lang="scss">
  .passwordInput {
    width: 300px;
    min-height: 50px;
    position: relative;

    border: 1px solid #ccc;
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;

    a{
        position: absolute;
        right: 5px;
    }

    .passwordVisibility {
      position: absolute;
      right: 20px;
      cursor: pointer;
    }

    input {
      width: 100%;
      padding: 0 10px;
    }
  }
</style>