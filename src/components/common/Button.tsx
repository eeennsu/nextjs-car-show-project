'use client';

import type { FC, PropsWithChildren } from 'react';
import { Button as MuiButton } from '@mui/material';

type Props = {
    onClick: () => void;
    size?: 'large' | 'medium' | 'small';
}

const Button: FC<PropsWithChildren<Props>> = ({ children, onClick, size = 'medium' }) => {
    
    return (
        <MuiButton className='font-light text-white bg-black/90 hover:bg-black/60 shadow-sm' variant='contained' size={size} onClick={onClick}>
            {children}
        </MuiButton>
    );
}

export default Button;