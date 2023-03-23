import "./Post.css"

import PostModelo from "componentes/PostModelo";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Route, Routes, useParams } from "react-router-dom"
import posts from "../../json/posts.json"
import NotFound from "paginas/NotFound";
import PaginaPadrao from "componentes/PaginaPadrao";

export default function Post() {

    const paramatros = useParams();

    const post = posts.find((post) => {
        return post.id === Number(paramatros.id);
    })

    if (!post) {
        return (
            <NotFound />
        )
    }

    return (
        <Routes>
            <Route path="*" element={<PaginaPadrao />}>
                <Route index element={
                <PostModelo
                    fotoCapa={`/posts/${post.id}/capa.png`}
                    titulo={post.titulo}
                >

                    <div className="post-markdown-container">
                        <ReactMarkdown>
                            {post.texto}
                        </ReactMarkdown>
                    </div>

                </PostModelo>} />
            </Route>

        </Routes>

    )
}