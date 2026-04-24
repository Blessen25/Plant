import type { Card_Plant_Props } from '../../interface';
import './card.css';

export const Cards_Best_Seller = () => {

    return(

        <>
            <div className="card_div">
                <Card_Best card_img='/public/assets/images/plant_one.png' card_price='110 AUD' card_text='Fiddle-leaf fig' />
                <Card_Best card_img='/public/assets/images/plant_one.png' card_price='' card_text='' />
                <Card_Best card_img='/public/assets/images/plant_one.png' card_price='' card_text='' />
                
            </div>
        </>
    )
}

export const Card_Best:React.FC<Card_Plant_Props> = (Props) => {

    return(
        <div className="cards_best">
            <div className="cards_best_img">
                <img src={Props.card_img} alt="Plant Image" className='img_plant'/>
            </div>
            <div className="cards_details">
                <p className='text-small'>{Props.card_text}</p>
                <p className='text-small'>{Props.card_price}</p>
            </div>
        </div>
    )
}