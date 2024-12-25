import { ButtonHTMLAttributes } from "react";

const  Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
    const { className, children, ...rest } = props;
    return (
        <button className={className} {...rest}>
            {children}
        </button>
    );
}

export default Button;