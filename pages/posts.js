import Link from "next/link";
import { Layout } from "../components/Layout";

export default function Posts ({posts}) {
    return <Layout>
        <h1>Hello Posts</h1>
        <ul>
            {posts.map(i => <li key={i.id}>
                <Link href={`/post/${i.id}`}><a>{i.title}</a></Link>
            </li>)}
        </ul>
    </Layout>
}

Posts.getInitialProps = async (ctx) => {
    const res = await fetch("http://localhost:4200/posts");
    const posts = await res.json();
    return { posts }
}