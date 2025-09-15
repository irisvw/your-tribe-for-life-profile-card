<main>
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
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Corporis fugiat ipsa atque corrupti similique iste earum
                    eveniet porro, voluptatum rem dignissimos totam architecto,
                    temporibus nobis ducimus beatae quas saepe fugit.
                </p>
            </div>
        </li>

        <li>
            <div>
                <header>
                    <h2>Skills 😎</h2>
                </header>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ratione nostrum omnis tempore eum harum quo, ducimus esse?
                    Enim vitae laborum, possimus aperiam laboriosam, sunt
                    voluptas deserunt, consequatur ut distinctio in?
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
                    omnis beatae laborum quasi. Nulla ex dicta minus et iste ad
                    consectetur itaque ipsa ratione.
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
                    Repudiandae, eius consequatur fugiat voluptate rem aliquid
                    voluptatem repellat quia tenetur labore vero delectus
                    impedit amet iure reprehenderit quaerat, fugit voluptatibus
                    nemo.
                </p>
            </div>
        </li>
    </ul>
</main>

<style>
    * {
        box-sizing: border-box;
    }
    main {
        margin-bottom: 40vh;
    }

    ul {
        list-style: none;
        margin-inline: auto;
        max-width: 600px;
        padding: 0;
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

    li div {
        position: relative;
        z-index: 1;
        padding: 1rem;
        border: 2px solid rgb(187, 187, 238);
        background-color: white;
        transition: 1s all;
        height: 100%;
    }

    @container scroll-state(stuck: top) {
        li:nth-of-type(1) div {
            transform: rotate(2deg) translateY(-15px);
        }

        li:nth-of-type(2) div {
            transform: rotate(-2deg) translateY(-12px);
        }

        li:nth-of-type(3) div {
            transform: rotate(1deg) translateY(-9px);
        }

        li:nth-of-type(4) div {
            transform: rotate(-1deg) translateY(-6px);
        }

        li:nth-of-type(5) div {
            transform: rotate(0deg) translateY(-3px);
        }
    }
</style>
