<div class="container">
    <main>
        <h1>Iris van Willigen</h1>
        <ul>
            <li>
                <div>
                    <header>
                        <h2>Hi, my name is Iris. 👋</h2>
                    </header>
                    <p>Nice to meet you!</p>
                </div>
            </li>

            <li>
                <div>
                    <header>
                        <h2>About Me ❣️</h2>
                    </header>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Corporis fugiat ipsa atque corrupti similique iste
                        earum eveniet porro, voluptatum rem dignissimos totam
                        architecto, temporibus nobis ducimus beatae quas saepe
                        fugit.
                    </p>
                </div>
            </li>

            <li>
                <div>
                    <header>
                        <h2>Skills 😎</h2>
                    </header>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Ratione nostrum omnis tempore eum harum quo,
                        ducimus esse? Enim vitae laborum, possimus aperiam
                        laboriosam, sunt voluptas deserunt, consequatur ut
                        distinctio in?
                    </p>
                </div>
            </li>

            <li>
                <div>
                    <header>
                        <h2>Projects 💪</h2>
                    </header>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Explicabo totam optio aliquid nihil asperiores nesciunt
                        omnis beatae laborum quasi. Nulla ex dicta minus et iste
                        ad consectetur itaque ipsa ratione.
                    </p>
                </div>
            </li>
            <li>
                <div>
                    <header>
                        <h2>Socials 💌</h2>
                    </header>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repudiandae, eius consequatur fugiat voluptate rem
                        aliquid voluptatem repellat quia tenetur labore vero
                        delectus impedit amet iure reprehenderit quaerat, fugit
                        voluptatibus nemo.
                    </p>
                </div>
            </li>
        </ul>
    </main>
</div>

<style>
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    h1 {
        font-family: "Jersey 20", sans-serif;
        font-size: 15rem;
        font-size: clamp(3rem, 0.6rem + 12.8vw, 15rem);
        position: fixed;
        opacity: 1;
        top: 10%;
        margin: 0 auto;
        width: 100%;
        min-width: max-content;
        text-align: center;
        color: rgb(194, 170, 219);
    }

    main {
        margin-bottom: 40vh;
    }

    h2 {
        font-family: "Jersey 20", sans-serif;
        font-size: 2rem;
        color: rgb(68, 41, 95);
        margin-bottom: 0.5em;
    }

    ul {
        list-style: none;
        margin-inline: auto;
        max-width: 600px;
        max-height: 100dvh;
        overflow: scroll;
        padding: 0;
        scrollbar-width: 0;
        -ms-overflow-style: none;
    }

    ul::-webkit-scrollbar {
        display: none;
    }

    li {
        margin: 1rem;

        height: 300px;
        overflow: visible;

        container-type: scroll-state;
        position: sticky;
        top: 25%;
    }

    li:first-of-type {
        margin-top: 25vh;
    }

    li:last-child {
        margin-bottom: 40vh;
    }

    li div {
        position: relative;
        z-index: 1;
        padding: 1rem;
        border: 2px solid rgb(134, 113, 209);
        background-color: white;
        transition: 1s all;
        height: 100%;
        font-family: sans-serif;
        color: rgb(68, 41, 95);
    }

    li:nth-of-type(1) div {
        background-color: #e6e6fa;
    }

    li:nth-of-type(2) div {
        background-color: #fff1e6;
    }

    li:nth-of-type(3) div {
        background-color: #fde2e4;
    }

    li:nth-of-type(4) div {
        background-color: #e2ece9;
    }

    li:nth-of-type(5) div {
        background-color: #bee1e6;
    }

    @container scroll-state(stuck: top) {
        li:nth-of-type(1) div {
            transform: rotate(3deg) translateY(-20px);
        }

        li:nth-of-type(2) div {
            transform: rotate(-3deg) translateY(-16px);
        }

        li:nth-of-type(3) div {
            transform: rotate(2deg) translateY(-12px);
        }

        li:nth-of-type(4) div {
            transform: rotate(-2deg) translateY(-8px);
        }

        li:nth-of-type(5) div {
            transform: rotate(1deg) translateY(-4px);
        }
    }

    div.container {
        max-height: 100vh;
        overflow: hidden;
    }
</style>
