import type { Card_Plant_Props } from '../../interface';
import './card.css';

export const Cards_Best_Seller = () => {

    return(

        <>
            <div className="card_div">
                <Card_Best card_img='/Assets/images/plant_one.png' card_price='110 AUD' card_text='Aloe Vera' />
                <Card_Best card_img='/Assets/images/plant_two.png' card_price='120 AUD' card_text='Strelitzia nicolai' />
                <Card_Best card_img='/Assets/images/plant_three.png' card_price='105 AUD' card_text='Fiddle-leaf fig' />
                
            </div>
        </>
    )
}

export const Card_Best:React.FC<Card_Plant_Props> = (Props) => {

    return(
        <div className="cards_best">
            <div className="cards_best_img">
                <img src={Props.card_img} alt="Plant Image" className='img_plant' loading='lazy'/>
            </div>
            <div className="cards_details">
                <p className='text-small'>{Props.card_text}</p>
                <p className='text-small fw-700'>{Props.card_price}</p>
            </div>
        </div>
    )
}