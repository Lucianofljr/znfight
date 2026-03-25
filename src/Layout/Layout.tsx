import { NavBar } from "../components/NavBar";

type Props = {
    children: React.ReactNode
}

export default function Layout({  children  }: Props) {
    return (
        <div className="layout">

            <NavBar />

            <main className="content">
                {children}
            </main>

            <footer className="footer">
                © 2026 ZN
            </footer>

        </div>
    )
}