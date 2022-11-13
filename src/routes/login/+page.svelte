<script lang="ts">
    import LoginForm from "../../lib/components/forms/login/LoginForm.svelte";
    

</script>

<LoginForm onSubmitCallback="{(email, password, rememberMe) => {
    console.log(email, password, rememberMe);
}}"/>