import { Size } from '@/types';
import React, { forwardRef } from 'react';
import { css } from '@emotion/css';
interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
    variant?: 'primary' | 'secondary' | "tertiary" | "danger" | "warning" | "success";
    size?: Size
}



const buttonStyles = {
    primary: css`
        background-color: blue;
        color: white;
    `,
    secondary: css`
        background-color: gray;
        color: white;
    `,
    tertiary: css`
        background-color: transparent;
        color: black;
    `,
    danger: css`
        background-color: red;
        color: white;
    `,
    warning: css`
        background-color: orange;
        color: black;
    `,
    success: css`
        background-color: green;
        color: white;
    `,
};

const sizeStyles = {
    small: css`
        padding: 4px 8px;
        font-size: 12px;
    `,
    medium: css`
        padding: 8px 16px;
        font-size: 14px;
    `,
    large: css`
        padding: 12px 24px;
        font-size: 16px;
    `,
};


const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ variant = 'primary', children, ...props }, ref) => {
    return (
        <button ref={ref} className={buttonStyles[variant]} {...props}>
            {children}
        </button>
    );
});

Button.displayName = 'Button';

export { Button }