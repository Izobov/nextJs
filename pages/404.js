import Link from "next/link"

export default function Error () {
    return (
        <>
        <h1>...Ooops, page not found</h1>
        <Link href={"/"}><a>back</a></Link>
        </>
    )
}