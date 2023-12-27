'use client';

import OutlineButton from '@/components/common/OutlineButton';
import { updateSearchParams } from '@/utils/car';
import { useRouter } from 'next/navigation';
import type { FC } from 'react';

type Props = {
    curPage: number;
    isNext: boolean | undefined;
}

const ShowMore: FC<Props> = ({ curPage, isNext }) => {

    const router = useRouter();

    const handleNavigation = () => {
        const newLimit = (curPage + 1) * 10;
        const newPathname = updateSearchParams('limit', newLimit.toString());

        router.push(newPathname, { scroll: false });
    }

    if (isNext) {
        return null;
    }

    return (
        <div className='flex items-center justify-center w-full mt-10'>
            <OutlineButton onClick={handleNavigation} size='large'>
                Next
            </OutlineButton>
        </div>
    );
}

export default ShowMore;