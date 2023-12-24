'use client';

import type { FC } from 'react';
import Button from '@/components/common/Button';

const GotoDown: FC = () => {
    
    const handleScroll = () => {
        const nextSection = document.getElementById('explore');

        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <Button size='large' onClick={handleScroll}>
            Explore Cars
        </Button>
    );
}

export default GotoDown;