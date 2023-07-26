import Navbar from "../../components/Navbar.jsx";

function RegisterPage() {
    return (
        <main className="bg-background text-text min-h-screen w-full flex flex-col items-center">
            <Navbar isAuth={false} />
        </main>
    );
}

export default RegisterPage;