export interface ButtonProps {

    text : string,
    icon ?: string,
    route ?: string,
    styles ?: React.CSSProperties,
    onClick ?: () => void,
    className ?: string
}