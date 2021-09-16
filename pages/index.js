import Head from "next/head"
import { Layout } from "../components/Layout"

export default function Index () {

    return (
    <Layout>
        <Head>
            <title>Home Page</title>
        </Head>
        <h1>Hello Next</h1>
    </Layout>
    )

}