import Router from "next/router"
import { Layout } from "../../components/Layout"

export default function About () {
    function click () {
        Router.push("/")
    }
    return <Layout> 
        <h1>Hello About</h1>
        <button onClick={click}> Home </button>
        <button onClick={() => Router.push("/post/23")}> Post </button>
    </Layout>
}