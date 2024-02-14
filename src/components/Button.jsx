import { cva } from 'class-variance-authority';
import React from 'react';
import { twMerge } from 'tailwind-merge';
// const variants = { default: "bg-secondary hover:bg-secondary-hover transition-colors", ghost: "hover:bg-gray-100 transition-colors" }
// const sizes = { default: "rounded p-2  transition-colors", icon: " rounded-full w-10 h-10 flex items-center justify-center p-2.5  transition-colors" }

const buttonStyles = cva(["transition-colors"], {
    variants: {
        variant: {
            default: ["bg-secondary", "hover:bg-secondary-hover"],
            ghost: ["hover:bg-gray-100"],
            dark: ["bg-secondary-dark", "hover:bg-secondary-dark-hover", "text-secondary"]
        },
        size: {
            default: ["rounded p-2"],
            icon: ["rounded-full w-10 h-10 flex items-center justify-center p-2.5"],
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
})
const Button = ({ variant, size, className, children, onClick }) => {
    return (
        <>
            {/* <button {...props} className={twMerge(variants[variant] + sizes[size])}  >
                {children}
            </button > */}
            <button onClick={onClick} className={twMerge(buttonStyles({ variant, size }), className)} >
                {children}
            </button>
        </>
    );
}
// Button.propTypes = {
//     variant: PropTypes.string.isRequired,
// };
export default Button;
