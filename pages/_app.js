import "../styles/main.css"

export default function App ({Component, pageProps}) {
    return ( <>
        <Component {...pageProps} />
        {/* <style jsx global>
            {
                `
                body {
                    font-family: 'Roboto', sans-serif
                }
                `
            }
        </style> */}
        </>
    )
}