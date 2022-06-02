import React from "react";
import Nav from "../Components/Nav/Nav";
import Card from "../Components/Cards/Card";

function Home() {
    return (
        <React.Fragment>
            <header>
                <Nav/>
            </header>
            <main className="container top-5">
                <Card home={true}/>
                <h1>Lorem ipsum dolor sit amet</h1>
                <hr/>
                <div className="pb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dicta eveniet explicabo fugit
                    molestias, non porro quae. Consectetur, dignissimos earum eius incidunt ipsam iure neque optio
                    quaerat rem repellendus sint. A ab ad consequatur corporis dolores ducimus eos error excepturi fuga molestiae natus nulla
                    numquam, omnis quisquam sed sint tempore temporibus veritatis voluptate voluptates. Distinctio
                    molestiae nobis obcaecati quasi sit! Cum distinctio dolores doloribus est ex fugiat, incidunt ipsam iste laboriosam optio perferendis
                    quibusdam ratione saepe temporibus vel veniam voluptate voluptates? Beatae corporis dolorem ex,
                    facere perspiciatis qui sint veniam. Aliquid aspernatur cumque enim facere facilis impedit ipsam libero maxime nisi nulla perferendis
                    quibusdam quod suscipit vel, vero voluptatibus voluptatum. Alias aspernatur consectetur cupiditate
                    libero nam natus, voluptatem? A, fuga!
                </div>
                <div className="pb-2">Ab accusantium aliquid architecto aut cumque dolores impedit in iusto nihil nisi, officia quos
                    reprehenderit rerum velit, veniam! Architecto assumenda dolore enim et explicabo, fugit in ipsa
                    rerum sed tenetur. Alias at commodi dicta in nobis porro sapiente similique vel. Adipisci aliquid corporis
                    dignissimos, ea enim error fuga in ipsum laborum maxime non obcaecati quos ullam unde vel voluptatem
                    voluptatibus. Architecto atque culpa, cumque debitis deleniti et incidunt ipsa ipsum necessitatibus nisi
                    provident quae quam qui velit voluptatibus! Adipisci amet error excepturi incidunt inventore modi
                    nostrum quis tempore veniam voluptates. Alias delectus dolore dolores ex facere iste iusto mollitia odit omnis possimus quia reiciendis
                    totam, veritatis! Amet atque deserunt impedit nemo porro voluptate. Est, possimus quos. Ipsa
                    necessitatibus neque voluptate! Adipisci beatae, debitis, delectus deleniti dolore et illum ipsa ipsam iure labore nemo quaerat
                    reiciendis sunt temporibus voluptatibus. A aliquam atque distinctio fugit laboriosam neque possimus
                    quas tenetur veritatis voluptas!
                </div>
                <div className="pb-2">Animi aut autem beatae consequuntur culpa deserunt dolore doloremque dolores doloribus et impedit
                    in ipsum iste labore modi neque officia porro, praesentium, quas qui quo recusandae repellendus
                    suscipit voluptatem voluptatum. Cum quaerat, ullam! Accusamus, consectetur maiores? Adipisci aliquam at aut dignissimos dolore ea
                    eligendi error excepturi labore minus nobis perspiciatis placeat quae quis quo repellendus, rerum
                    sapiente tenetur veniam vero? Accusantium architecto cum eos esse, eum fugit officiis provident sunt unde veniam! Aliquid
                    delectus doloremque, dolores, dolorum ea eveniet, facere fuga illo iste maxime odit optio porro
                    praesentium sed ut! Animi commodi cupiditate deleniti deserunt, doloremque dolorum esse ipsa iste, laboriosam molestias
                    neque nobis omnis possimus quia recusandae, tempora tempore veritatis vitae voluptas voluptate.
                    Assumenda beatae blanditiis natus quia similique! Ad adipisci aut blanditiis delectus esse id, magnam numquam quia quisquam sequi soluta tenetur ut.
                    Alias asperiores commodi cum est harum illo itaque minus quidem, similique tempora tenetur, ullam
                    vitae! Ad aspernatur debitis dicta exercitationem hic maiores, modi nobis non numquam odit pariatur
                    quaerat sit tempora? A dignissimos doloribus eum explicabo fugit impedit ipsa, soluta! Accusamus
                    dignissimos dolore officia perspiciatis. Amet architecto culpa dolore, ea error ex expedita fugit incidunt laborum libero maxime mollitia
                    nihil nulla placeat qui sed velit voluptates. Architecto ea facere id obcaecati officia placeat
                    saepe sequi.
                </div>
                <Card home={true}/>
            </main>
        </React.Fragment>
    );
}

export default Home;