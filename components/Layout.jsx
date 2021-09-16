import Link from "next/link"

export function Layout({children}) {

    return <>
        <nav>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/posts"><a>Posts</a></Link>
        </nav>
        <main>
            {children}
        </main>
        <style jsx> {`

            nav {
                display: flex;
                aligh-items: center;
                height: 60px;
                background: orange;
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                padding: 0 15px
            }
            nav a {
                color: white;
                text-decoration: none;
                margin-right: 15px;
                display: flex;
                align-items: center;
                font-weight: 500;
            }
            main {
                margin-top: 80px
            }
            `
        }
        </style>
    </>
}