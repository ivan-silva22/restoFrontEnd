import error from "../../assets/error404.jpg";

const Error404 = () => {
    return (
        <main className="main my-4 text-center">
            <img className="img-fluid w-75" src={error} alt="Error 404" />
        </main>
    );
};

export default Error404;