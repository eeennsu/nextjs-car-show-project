import type { FC } from 'react';

const NoResult: FC = () => {

    return (
        <div className='mt-5 lg:mt-16 flex justify-center items-center flex-col gap-2'>
            <h2 className='text-white text-2xl font-semibold'>
                We don&apos;t have any cars...
            </h2>
            <p>

            </p>
        </div>     
    );
}

export default NoResult;