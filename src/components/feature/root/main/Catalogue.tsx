import type { FC } from 'react';
import SearchBar from './SearchBar';
import CustomFilter from './CustomFilter';

const Catalogue: FC = () => {

    return (
        <section id='explore' className='pt-8 lg:-mt-20'>
            <div className='max-sm:text-center'>
                <h2 className='text-2xl lg:text-4xl'>
                    Car Catalogue
                </h2>
                <p className='mt-2'>
                    Exlore the cars you might like
                </p>
            </div>
            <div className='flex flex-col items-center justify-between w-full mt-12 md:flex-row'>
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