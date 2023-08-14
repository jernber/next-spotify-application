import { twMerge } from "tailwind-merge"
import { forwardRef } from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

// Forwarding ref, and all default HTML button has without writing everything out

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    children,
    disabled,
    type = "button",
    ...props
}, ref) => {
    return (
        <button type={type}
        className={twMerge("w-full rounded-full ")}>
            {children}
        </button>
    )
})

Button.displayName = "Button"

export default Button
