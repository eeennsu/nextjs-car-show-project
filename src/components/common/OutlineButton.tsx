'use client';

import type { FC, PropsWithChildren } from 'react';
import { Button as MuiButton } from '@mui/material';

type Props = {
    onClick: () => void;
    size?: 'large' | 'medium' | 'small';
}

const OutlineButton: FC<PropsWithChildren<Props>> = ({ children, onClick, size = 'medium' }) => {
    
    return (
        <MuiButton className='text-black bg-white shadow-sm border-black hover:border-white hover:bg-black/15 hover:text-white' variant='outlined' size={size} onClick={onClick}>
            {children}
        </MuiButton>
    );
}

export default OutlineButton;