<script lang="ts">
    import TextInput from "../TextInput.svelte";
    import PasswordInput from "../PasswordInput.svelte";
    import SelectInput from "../SelectInput.svelte";
</script>

<div class="formWrapper">
    <div class="form">
        <h2>Create an account</h2>
        <h4>Enter your registration details</h4>
        <TextInput placeholderText="Username"/>
        <TextInput placeholderText="Your email"/>
        <PasswordInput placeholderText="Your password"/>
        <PasswordInput placeholderText="Confirm password"/>
        <SelectInput/>
        <SelectInput/>
        <button class="btn">Register</button>
        <p>Already registered? <span>Login</span> here.</p>
    </div>
</div>

<style lang="scss">
  .formWrapper {
    padding-top: 5rem;
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: 'Quicksand', sans-serif;

    .form {
      border-radius: 8px;
      width: 60%;
      height: 80%;
      box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);

      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 20px;
      align-items: center;

      h2 {
        text-align: center;
        padding-top: 1rem;
        font-size: 2rem;
        font-weight: bold;
      }

      h4 {
        text-align: center;
        font-size: 1.2rem;
        font-weight: 300;
        padding-bottom: 1rem;

        margin-top: -20px;
      }

      .btn{
        width: 20%;
        height: 2rem;
        border-radius: 4px;
        background-color: #3f51b5;
        color: white;
        font-size: 1.2rem;
        font-weight: bold;
        border: none;
        cursor: pointer;

        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
</style>