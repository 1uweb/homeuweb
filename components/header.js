import Link from 'next/link'

const Navigation = () => (
    <header className="global-nav">
        <div className="wrapper">
            <Link href="/"><a className="logo-global"></a></Link>
            <nav className="nav-global wrapper-nav">
                <ul>
                    <li className="start"><a href="/portfolio">Portfolio</a></li>
                    <li><a href="/ueber">Über Mich</a></li>
                    <li><a href="https://blog.uwe-barthel.net">Blog</a></li>
                    <li className="end"><a href="/projekte">Projekte</a></li>
                </ul>
            </nav>
            <nav className="social-nav">
                <ul>
                    <li className="start"><Link href="/"><a><i className="fab fa-github"></i></a></Link></li>
                    <li><Link href="/"><a><i className="fab fa-behance"></i></a></Link></li>
                    <li className="end"><Link href="/"><a><i className="fab fa-dribbble"></i></a></Link></li>
                </ul>
            </nav>
        </div>
    </header>
)

export default Navigation