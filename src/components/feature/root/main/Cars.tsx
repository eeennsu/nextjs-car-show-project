import type { FC } from 'react';
import { fetchCars } from '@/lib/fetch';
import NoResult from './NoResult';
import CarCard from './CarCard';
import ShowMore from './ShowMore';

type Props = {
    searchParams: CarSearchParams;
}

const Cars: FC<Props> = async ({ searchParams }) => {

    const cars = await fetchCars({
        year: searchParams.year || '2022',
        fuel: searchParams.fuel || '',
        limit: searchParams.limit || '10',
        manufacturer: searchParams.manufacturer || '',
        model: searchParams.model || '',
    });
    
    const isDataEmpty = !Array.isArray(cars) || !cars || cars?.length < 0;
    console.log(cars);
    return (
        <section>
            {
                isDataEmpty ? (
                    <NoResult />                  
                ) : (
                    <div className='grid w-full grid-cols-1 gap-8 px-10 pt-14 lg:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4 max-sm:px-3'>
                        {
                            cars?.map((car) => (
                                <CarCard key={`${car.city_mpg} ${car.class} ${car.combination_mpg} ${car.cylinders} ${car.drive} ${car.displacement} ${car.transmission} ${car.year}`} car={car} />
                            )) 
                        }
                    </div>
                )
            }
            {
                cars && (
                    <ShowMore 
                        curPage={(+searchParams.limit || 10) / 10} 
                        isNext={(+searchParams.limit || 10) > cars.length} 
                    />
                ) 
            }            
        </section>
    );
}

export default Cars;