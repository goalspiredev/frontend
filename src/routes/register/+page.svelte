<script lang="ts">
    import RegisterForm from "../../lib/components/forms/register/RegisterForm.svelte";
</script>

<RegisterForm onSubmitCallback={(username, email, password) => {
    console.log(username, email, password);
}}/>