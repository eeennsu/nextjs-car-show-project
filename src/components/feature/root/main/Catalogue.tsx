import type { FC } from 'react';
import SearchBar from './SearchBar';
import CustomFilter from './CustomFilter';

const Catalogue: FC = () => {

    return (
        <section id='explore' className='lg:-mt-36'>
            <div>
                <h2 className='text-2xl lg:text-4xl'>
                    Car Catalogue
                </h2>
                <p className='mt-2'>
                    Exlore the cars you might like
                </p>
            </div>
            <div className='flex items-center justify-between w-full mt-12'>
                <SearchBar />
                <div className='flex flex-wrap items-center justify-start gap-2'>
                    <CustomFilter title='fuel' />
                    <CustomFilter title='year' />
                </div>
            </div>
        </section>  
    );
}

export default Catalogue;