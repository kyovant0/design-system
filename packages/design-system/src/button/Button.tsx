import { Size } from '#types';
import React, { forwardRef } from 'react';

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
    variant?: 'primary' | 'secondary' | "tertiary" | "danger" | "warning" | "success";
    size?: Size
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ variant = 'primary', children, ...props }, ref) => {
    return (
        <button ref={ref} className={`button ${variant}`} {...props}>
            {children}
        </button>
    );
});

Button.displayName = 'Button';

export { Button }