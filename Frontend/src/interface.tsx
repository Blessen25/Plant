export interface ButtonProps {

    text : string,
    icon ?: string,
    route ?: string,
    styles ?: React.CSSProperties,
    onClick ?: () => void,
    className ?: string
}

export interface Card_Plant_Props {

    card_img : string;
    card_text : string;
    card_price : string;
}