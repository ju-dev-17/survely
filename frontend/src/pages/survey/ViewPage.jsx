import Navbar from "../../components/Navbar.jsx";

function ViewPage() {
    return (
        <main className="bg-background text-text min-h-screen w-full flex flex-col items-center">
            <Navbar isAuth />
        </main>
    );
}

export default ViewPage;