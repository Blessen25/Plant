import './button.css';
import type { ButtonProps } from '../../interface';

export const Button_withouticon_primary:React.FC<ButtonProps> = (props) => {

    return(
        <>
            <a href={`${props.route ? props.route : '#'}`} style={props.styles} className={`buttonclassprimary text-normal ${props.className ? props.className : ''}`}>{props.text}</a>
        </>
    )

}

export const Button_withouticon_secondary:React.FC<ButtonProps> = (props) => {

    return(
        <>
            <a href={`${props.route ? props.route : '#'}`} style={props.styles} className={`buttonclasssecondary text-normal ${props.className ? props.className : ''}`}>{props.text}</a>
        </>
    )

}

export const Button_with_icon_primary:React.FC<ButtonProps> = (props) => {

    return(
        <>
            <a href={`${props.route ? props.route : '#'}`} style={props.styles} className={`buttonclassprimary button_icon text-normal ${props.className ? props.className : ''}`}><span>{<i className={`${props.icon}`}></i>}</span>{props.text}</a>
        </>
    )

}

export const Button_with_icon_secondary:React.FC<ButtonProps> = (props) => {

    return(
        <>
            <a href={`${props.route ? props.route : '#'}`} style={props.styles} className={`buttonclasssecondary button_icon text-normal ${props.className ? props.className : ''}`}><span>{<i className={`${props.icon}`}></i>}</span>{props.text}</a>
        </>
    )

}


export const Button_with_icon_primary_rev:React.FC<ButtonProps> = (props) => {

    return(
        <>
            <a href={`${props.route ? props.route : '#'}`} style={props.styles} className={`buttonclassprimary button-rev button_icon text-normal ${props.className ? props.className : ''}`}><span>{<i className={`${props.icon}`}></i>}</span>{props.text}</a>
        </>
    )

}

export const Button_with_icon_secondary_rev:React.FC<ButtonProps> = (props) => {

    return(
        <>
            <a href={`${props.route ? props.route : '#'}`} style={props.styles} className={`buttonclasssecondary button-rev button_icon text-normal ${props.className ? props.className : ''}`}><span>{<i className={`${props.icon}`}></i>}</span>{props.text}</a>
        </>
    )

}