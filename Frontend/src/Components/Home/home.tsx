import {Button_with_icon_secondary_rev, Button_withouticon_primary} from '../Extras/button';
import './home.css';

export const Home_Best_House_Plants = () => {

    return (

        <>
            <div className="homemain">
                <div className="home_one">
                    <h1>Best house plants varieties.</h1>
                    <Button_withouticon_primary text='Shop Now'/>
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
                    <img src="../../public/assets/images/homebanner.png" alt="home banner" className='homebannerimg'/>
                </div>
            </div>
        </>
    )
}

export const Home_Take_Care = () => {

    return(

        <>
        <div className="take_care_div">
            <div className="takecaremain">
                <div className="takecare_one">
                    <p className='text-normal'>Each houseplant set is handled quickly and safely before being sent to your destination in specially designed insulated packaging.</p>
                </div>
                <div className="takecare_two">
                    <h5>Learn how we take care of your plant at every stage of its journey from our greenhouse to your home.</h5>
                </div>
            </div>
            <div className="take_care_mid">
                <Button_with_icon_secondary_rev text='Learn More' icon='fa-solid fa-right-long'/>
            </div>
        </div>
        </>
    )
}

export const Home_Plant_Steps = () => {

    return(

        <>
            <div className="home_step_div">
                <div className="home_step_img">
                    <img src="../../public/assets/images/home_step_one.jpg" alt="Plant Steps" className='img-step-one'/>
                    <div className="home_step_background">
                        <div className="steps">
                            <p className='text-big step-1-text'>Step 1</p>
                            <h3 className='text-small-cstm-h3'>We put everything together</h3>
                            <div className="steps-chivron">
                                <span><i className="fa-regular fa-circle-left icon-lg"></i></span>
                                <span><i className="fa-regular fa-circle-right icon-lg"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export const Home_Best_Seller = () => {

    return(

        <>
            <div className="home_best">
                <h1>Please get plants   </h1>
            </div>
        </>
    )
}