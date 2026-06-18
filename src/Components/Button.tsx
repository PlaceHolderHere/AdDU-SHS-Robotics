import './Button.css';

interface ButtonProps {
    text: string
}

function Button ({ text }: ButtonProps) {
    return (
        <button className="button">
            <p>{text}</p>
        </button>
    )
}

export default Button;