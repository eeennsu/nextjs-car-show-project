'use client';

import type { FC, PropsWithChildren } from 'react';
import { Button as MuiButton } from '@mui/material';

type Props = {
    onClick: () => void;
    size?: 'large' | 'medium' | 'small';
    className?: string;
}

const Button: FC<PropsWithChildren<Props>> = ({ children, onClick, className, size = 'medium' }) => {
    
    return (
        <MuiButton className={`font-[350] text-white bg-black/90 hover:bg-white/70 hover:text-black shadow-sm ${className}`} variant='contained' size={size} onClick={onClick}>
            {children}
        </MuiButton>
    );
}

export default Button;