import homedsl from "/public/homedsl.png"

const Home = () => {
    return (
        <div className="bg-gray-50">
            <div>
                <img src={homedsl} alt="home" className="object-cover object-center" />
            </div>
            <div className="mt-10 text-center">
                <h1 className="text-4xl font-bold">Welcome to the Home Page</h1>
                <p className="text-gray-500">This is the home page of the website</p>
            </div>
        </div>
    )
}

export default Home