import './home.css';

const Home = () => {
    return (
        <div className="homemain">
            <div className="home_one">
                <h1>Best house plants varieties.</h1>
                <button>Shop Now</button>
                <div className="home_one-press">
                    <h3>Beautiful living greenery for homes and offices</h3>
                    <p className='text-small' style={{opacity:'.6'}}>We've been mentioned in the press</p>
                    <div className="press-logos">
                        <h4>Bloomberg</h4>
                        <h4>Forbes</h4>
                    </div>
                </div>
            </div>
            <div className="home_two">
                <img src="../../public/Assets/Images/homebanner.jpg" alt="home banner" className='homebannerimg'/>
            </div>
        </div>
        
    );
}

export default Home;