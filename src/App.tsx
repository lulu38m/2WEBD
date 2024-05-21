import { Routes, Route, Outlet, Link } from "react-router-dom";
import Header from "./component/Header.tsx";
import Contact from "./pages/Contact/Contact.tsx";
import Home from "./pages/Home/Home.tsx";
import Club from "./pages/club/Club.tsx";
import Art from "./pages/Art/Art.tsx";

export default function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="club" element={<Club />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="art/:id" element={<Art />} />
                    <Route path="*" element={<NoMatch />} />
                </Route>
            </Routes>
        </div>
    );
}

function Layout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}
function NoMatch() {
    return (
        <div>
            <h2>Nothing to see here!</h2>
            <p>
                <Link to="/">Go to the home page</Link>
            </p>
        </div>
    );
}