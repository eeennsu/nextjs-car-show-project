import type { FC } from 'react';

type Props = {
    title: string;
    value: string | number;
}

const CarInfo: FC<Props> = ({ title, value }) => {

    return (
        <div className='flex justify-between w-full gap-5 text-right'>
            <h4 className='capitalize text-gray'>
                {title.split('_').join(' ')}
            </h4>
            <p className='mr-4 font-semibold text-black-100'>
                {value}
            </p>
        </div>
    );
}

export default CarInfo;