<script lang="ts">
    export let name: string;
</script>

<div class="tag">
    <p>{name}</p>
</div>

<style lang="scss">
    .tag {
        background-color: #EB4F4F;
        border-radius: 5px;
        padding: 1px 10px;

        p {
            font-family: Comfortaa, sans-serif;
            font-size: 0.9rem;
            color: white;
        }
    }
</style>