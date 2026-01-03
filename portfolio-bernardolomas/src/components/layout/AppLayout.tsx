import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function AppLayout() {
    return (
        <div className="min-h-dvh bg-zinc-950">
            <Navbar />

            <main className="mx-auto w-full max-w-6xl px-1 py-7">
                <Outlet />
            </main>

            <Footer />
        </div>
    )
}