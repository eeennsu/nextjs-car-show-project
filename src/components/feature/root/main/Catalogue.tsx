import type { FC } from 'react';
import SearchBar from './SearchBar';
import CustomFilter from './CustomFilter';
import { fuels, yearsOfProduction } from '@/constants';

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
            <div className='flex flex-col items-center justify-between w-full mt-12 md:flex-row max-sm:gap-4'>
                <SearchBar />
                <div className='flex flex-wrap justify-center md:justify-end flex-[0.7] gap-4 w-full h-full'>
                    <CustomFilter title='fuel' options={fuels} />
                    <CustomFilter title='year' options={yearsOfProduction} />
                </div>
            </div>
        </section>  
    );
}

export default Catalogue;