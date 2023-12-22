import type { FC, DetailedHTMLProps, ButtonHTMLAttributes, PropsWithChildren } from 'react';

type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const Button: FC<PropsWithChildren<ButtonProps>> = ({ children, className, ...btnProps }) => {

    const _className = ['', className].join(' ');

    return (
        <button {...btnProps} className='px-6 py-2 font-light text-white transition-colors rounded-full bg-black/90 hover:bg-black/70 active:bg-black'>
            {children}
        </button>
    );
}

export default Button;