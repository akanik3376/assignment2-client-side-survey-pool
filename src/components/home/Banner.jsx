
import bannerBgImg from '../../assets/images/set-people-professional-transporting-parcels-customers_24797-2774.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-screen " style={{ backgroundImage: `url(${bannerBgImg})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="w-3/4">
                    <h1 className="mb-5 text-5xl font-bold"> Welcome to our Advanced Polling and Survey Platform</h1>
                    <p className="mb-5">Empower your decision-making process with our cutting-edge Polling and Survey App! Unleash the potential of the MERN stack - MongoDB, Express.js, React.js, Node.js - as we redefine user engagement.</p>
                    <button className="btn btn-primary">Explore More</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;