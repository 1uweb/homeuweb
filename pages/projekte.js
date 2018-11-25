import Link from 'next/link'
import NextHead from 'next/head'
import css from '../static/main.sass'
import HeadTag from '../components/head'
import Navigation from '../components/header'

const Index = () => (
    <div className="root">
        <NextHead>
            <script defer src="https://use.fontawesome.com/releases/v5.5.0/js/all.js" integrity="sha384-GqVMZRt5Gn7tB9D9q7ONtcp4gtHIUEW/yG7h98J7IpE3kpi+srfFyyB/04OV6pG0" crossOrigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/jquery@3.3.1/dist/jquery.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
            <meta charSet="UTF-8" />
            <title>Projekte | Uwe Barthel</title>
            <meta name="description" content="Dies ist meine Persönliche Website" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="apple-touch-icon-precomposed" sizes="57x57" href="https://static.uwe-barthel.net/uwe-barthel.net/favicons/apple-touch-icon-57x57.png" />
            <link rel="apple-touch-icon-precomposed" sizes="114x114" href="https://static.uwe-barthel.net/uwe-barthel.net/favicons/apple-touch-icon-114x114.png" />
            <link rel="apple-touch-icon-precomposed" sizes="72x72" href="https://static.uwe-barthel.net/uwe-barthel.net/favicons/apple-touch-icon-72x72.png" />
            <link rel="apple-touch-icon-precomposed" sizes="144x144" href="https://static.uwe-barthel.net/uwe-barthel.net/favicons/apple-touch-icon-144x144.png" />
            <link rel="apple-touch-icon-precomposed" sizes="60x60" href="https://static.uwe-barthel.net/uwe-barthel.net/favicons/apple-touch-icon-60x60.png" />
            <link rel="apple-touch-icon-precomposed" sizes="120x120" href="https://static.uwe-barthel.net/uwe-barthel.net/favicons/apple-touch-icon-120x120.png" />
            <link rel="apple-touch-icon-precomposed" sizes="76x76" href="https://static.uwe-barthel.net/uwe-barthel.net/favicons/apple-touch-icon-76x76.png" />
            <link rel="apple-touch-icon-precomposed" sizes="152x152" href="https://static.uwe-barthel.net/uwe-barthel.net/favicons/apple-touch-icon-152x152.png" />
            <link rel="icon" type="image/png" href="https://static.uwe-barthel.net/uwe-barthel.net/favicons/favicon-196x196.png" sizes="196x196" />
            <link rel="icon" type="image/png" href="https://static.uwe-barthel.net/uwe-barthel.net/favicons/favicon-96x96.png" sizes="96x96" />
            <link rel="icon" type="image/png" href="https://static.uwe-barthel.net/uwe-barthel.net/favicons/favicon-32x32.png" sizes="32x32" />
            <link rel="icon" type="image/png" href="https://static.uwe-barthel.net/uwe-barthel.net/favicons/favicon-16x16.png" sizes="16x16" />
            <link rel="icon" type="image/png" href="https://static.uwe-barthel.net/uwe-barthel.net/favicons/favicon-128.png" sizes="128x128" />
            <meta name="msapplication-TileColor" content="#D6D6D6" />
            <meta name="msapplication-TileImage" content="https://static.uwe-barthel.net/uwe-barthel.net/favicons/mstile-144x144.png" />
            <meta name="msapplication-square70x70logo" content="https://static.uwe-barthel.net/uwe-barthel.net/favicons/mstile-70x70.png" />
            <meta name="msapplication-square150x150logo" content="https://static.uwe-barthel.net/uwe-barthel.net/favicons/mstile-150x150.png" />
            <meta name="msapplication-wide310x150logo" content="https://static.uwe-barthel.net/uwe-barthel.net/favicons/mstile-310x150.png" />
            <meta name="msapplication-square310x310logo" content="https://static.uwe-barthel.net/uwe-barthel.net/favicons/mstile-310x310.png" />
        </NextHead>
        <Navigation></Navigation>
        <main className="app-root">
            <section className="hero-app">
                <div className="wrapper"></div>
            </section>
        </main>
    </div>
)

export default Index