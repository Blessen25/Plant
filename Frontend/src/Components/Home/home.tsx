import {Button_with_icon_secondary_rev, Button_withouticon_primary} from '../Extras/button';
import { Cards_Best_Seller } from '../Extras/card';

import './home.css';
import './reviews.css';

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
                    <img src="/public/assets/images/homebanner.png" alt="home banner" className='homebannerimg'/>
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
                    <img src="/public/assets/images/home_step_one.jpg" alt="Plant Steps" className='img-step-one'/>
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
                <p className='text-normal fw-600'>OUR SHOP</p>
                <h1 className='best-seller fw-500'>Here are the best seller
                    from our varieties</h1>
                <Button_withouticon_primary text='See All'/>
                <Cards_Best_Seller />

            </div>
        </>
    )
}

export const ReviewsSection = () => {
  return (
    <section className="reviews_section">
      <div className="reviews_left">
        <h5 className="reviews_label">REVIEWS</h5>

        <p className="reviews_description text-normal">
          Shop with confidence by reading customer reviews given by individuals
          who have used Bioomey. Excellent quality and streamlined service are
          both offered here.
        </p>

        <div className="reviews_rating">
          <span className="reviews_stars text-normal">★ ★ ★ ★ ★</span>
          <span className="reviews_score text-normal">5/5</span>
        </div>

        <p className="reviews_count text-small">2.479 reviews</p>
      </div>

      <div className="reviews_content">
        <div className="reviews_arrows">
          <button className="reviews_arrow_btn">
            <i className="fa-solid fa-arrow-left icon-sm"></i>
          </button>
          <button className="reviews_arrow_btn">
            <i className="fa-solid fa-arrow-right icon-sm"></i>
          </button>
        </div>

        <h2 className="reviews_quote">
          We adore all our friends atBloomey, especially the beauties who have
          come to live with us! Great advice when needed, beautifully and safely
          packaged. Highly recommend, it's just the best place for healthy plants
          and great value!
        </h2>

        <div className="reviews_author">
          <h5>Pamela S.</h5>
          <p className='text-small'>Lake Forest, CA</p>
        </div>
      </div>
    </section>
  );
};

export const Inspired_Home = () => {

    return(

        <>
            <div className="inspired_div">
                <div className="inspired_two_images">
                    <img src="/public/Assets/images/inspired_img_one.png" alt="Inspired Image" className='inspired_img_one' />
                    <img src="/public/Assets/images/inspired_img_two.png" alt="Inspired Image" className='inspired_img_two' />
                </div>
                <div className="inspired_three">
                    <div className="inspired_three_content">
                        <h2 className='fw-500'>Get inspired from our Instagram</h2>
                        <p className='text-small'>If you use the hashtag #bioomey on Instagram, well spotlight you.</p>
                        <Button_withouticon_primary text='Follow Us'/>
                    </div>
                    <img src="/public/Assets/images/inspired_img_three.png" alt="Inspired Image" className='inspired_img_three' />
                </div>
            </div>
        </>
    )
}