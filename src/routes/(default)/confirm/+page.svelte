<template>
    <div>
        <h1>Please check your email!</h1>
        <p>We've sent a confirmation email. You can still keep using Goalspire without verifying your email. If you wish, you can go to your <a href="/dashboard">dashboard</a>.</p>
    </div>
</template>

<style lang="scss" scoped>
    div {
        width: 100%;
        height: 100vh;
        padding: 0 1rem;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        font-family: 'Montserrat', sans-serif;
        font-weight: 700;

        img {
            width: 160px;
        }

        h1 {
            color: #0984e3;
            font-size: 3rem;
            margin-bottom: 1rem;

            text-align: center;
        }

        p {
            font-size: 1.5rem;

            a {
                color: #0984e3;
                text-decoration: none;
                font-weight: 700;
            }
        }
    }
</style>
