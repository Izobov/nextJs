import {Layout} from "../../components/Layout"

export default function Posts ({post}) {
    return <Layout>
    <h1>{post.title}</h1>
    <hr/>
    <p>{post.body}</p>
    </Layout>
}

Posts.getInitialProps = async (ctx) => {
    const res = await fetch(`http://localhost:4200/posts/${ctx.query.id}`);
    const post = await res.json();
    console.log(post)
    return { post }
}