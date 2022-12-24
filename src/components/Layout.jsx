import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
        <header>
            <Link to="/">Home</Link>
            <Link to="/kanban">Kanban</Link>
            <Link to="/admin">Admin</Link>
        </header>
        <main className="container">
            <Outlet/>
        </main>
        <footer className="container">2022</footer>
        </>
    )
}

export {Layout}