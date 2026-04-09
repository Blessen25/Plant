import './header.css';

const Header = () => {

    return (

        <>
            <div className="header">
                <div className="logoimg">
                    <img src="../../public/Assets/Logo/Planty's Logo.jpg" alt="Logo_Image" loading='lazy'/>
                </div>
                <div className="headerdetails">
                    <p>Plants</p>
                    <p>For offices</p>
                    <p>Plants core</p>
                    <p>About</p>
                </div>
                <div className="headericons">
                    <p>icons</p>
                    <p>icons</p>
                    <p>icons</p>
                </div>
            </div>
        </>
    )
}

export default Header;