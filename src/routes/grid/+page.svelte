<main>
    <section>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A, ipsam facere
        omnis modi eveniet numquam in. Ut officia non eius obcaecati distinctio,
        ullam amet vitae quaerat!
    </section>
    <section>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
        numquam qui temporibus hic, voluptatem iste adipisci. Suscipit
        consequuntur veniam sunt at architecto asperiores ratione blanditiis
        quos!
    </section>
    <section>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero mollitia
        vitae repudiandae ex earum, eaque, quis inventore odit quam perferendis
        quae eos.
    </section>
    <section>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quas
        sunt dolor ipsa dolorum? Quisquam nobis consectetur cumque molestiae quo
        impedit dolore.
    </section>
    <section class="photo">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        eum explicabo molestias dolores blanditiis incidunt itaque dolorum ut.
        Esse ea nulla reiciendis expedita deleniti qui sed architecto.
    </section>
    <section>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti fugit,
        quaerat illo voluptate aspernatur numquam laborum adipisci vero
        temporibus necessitatibus?
    </section>
    <section>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti fugit,
        quaerat illo voluptate aspernatur numquam laborum adipisci vero
        temporibus necessitatibus?
    </section>
    <section>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti fugit,
        quaerat illo voluptate aspernatur numquam laborum adipisci vero
        temporibus necessitatibus?
    </section>
    <section>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti fugit,
        quaerat illo voluptate aspernatur numquam laborum adipisci vero
        temporibus necessitatibus?
    </section>
</main>

<style>
    main {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);

        position: relative;
        height: 100vh;
        max-width: 100vw;
        gap: 1rem;
        max-width: 800px;
        margin-block: 100vh 2rem;
        margin-inline: auto;

        font-size: 1rem;
    }

    @media (width < 450px) {
        main {
            margin-block: 100vh 5rem;
            grid-template-columns: repeat(2, 1fr);
        }
    }

    section {
        background-color: aquamarine;
        padding: 1em;
        animation-name: appear;
        animation-timeline: scroll();
        animation-timing-function: ease-in-out;
    }

    .photo {
        background-color: aqua;
        position: relative;
        z-index: 1;
        transform: translate(50%, -100vh);

        animation-name: scale;
        animation-timeline: scroll();
        animation-timing-function: ease-in;
    }

    @media (width < 450px) {
        .photo {
            grid-column: 1 / 2;
            grid-row: 2 / 3;
            animation-name: scale2;
        }
    }

    @keyframes scale {
        from {
            transform: translateY(-100vh) scale(200%);
        }

        to {
            transform: translateY(0);
        }
    }

    @keyframes scale2 {
        from {
            transform: translateX(50%) translateY(-100vh) scale(200%);
        }

        to {
            transform: translateY(0);
        }
    }

    @keyframes appear {
        from {
            transform: scale(0%);
        }

        to {
            transform: scale(100%);
        }
    }
</style>
