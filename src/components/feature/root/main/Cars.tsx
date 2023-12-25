import { fetchCars } from '@/lib/fetch';
import type { FC } from 'react';
import NoResult from './NoResult';
import CarCard from './CarCard';
import ShowMore from './ShowMore';

type Props = {
    searchParams: CarSearchParams;
}

const Cars: FC<Props> = async ({ searchParams }) => {

    const response = await fetchCars(searchParams);
    const cars = response?.length === 0 ? dummy : response;
    const isDataEmpty = !Array.isArray(cars) || cars?.length === 0 || !cars;
    console.log('response', response);
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
            <ShowMore 
                curPage={(+searchParams.limit || 10) / 10} 
                hasNextData={(+searchParams.limit || 10) < (cars?.length || 0)} 
            />
        </section>
    );
}

export default Cars;



const dummy = [
    {
        'city_mpg': 23,
        'class': 'compact car',
        'combination_mpg': 24,
        'cylinders': 4,
        'displacement': 1.6,
        'drive': 'fwd',
        'fuel_type': 'gas',
        'highway_mpg': 26,
        'make': 'toyota',
        'model': 'corolla',
        'transmission': 'a',
        'year': 1999
    },
    {
        'city_mpg': 23,
        'class': 'compact car',
        'combination_mpg': 26,
        'cylinders': 4,
        'displacement': 1.6,
        'drive': 'fwd',
        'fuel_type': 'gas',
        'highway_mpg': 31,
        'make': 'toyota',
        'model': 'corolla',
        'transmission': 'm',
        'year': 2007
    },
    {
        'city_mpg': 23,
        'class': 'compact car',
        'combination_mpg': 25,
        'cylinders': 4,
        'displacement': 1.8,
        'drive': 'fwd',
        'fuel_type': 'gas',
        'highway_mpg': 30,
        'make': 'toyota',
        'model': 'corolla',
        'transmission': 'a',
        'year': 2014
    },
    {
        'city_mpg': 23,
        'class': 'compact car',
        'combination_mpg': 26,
        'cylinders': 4,
        'displacement': 1.8,
        'drive': 'fwd',
        'fuel_type': 'gas',
        'highway_mpg': 30,
        'make': 'toyota',
        'model': 'corolla',
        'transmission': 'm',
        'year': 1995
    },
    {
        'city_mpg': 23,
        'class': 'small station wagon',
        'combination_mpg': 25,
        'cylinders': 4,
        'displacement': 1.8,
        'drive': 'fwd',
        'fuel_type': 'gas',
        'highway_mpg': 30,
        'make': 'toyota',
        'model': 'corolla wagon',
        'transmission': 'a',
        'year': 2009
    },
    {
        'city_mpg': 23,
        'class': 'compact car',
        'combination_mpg': 24,
        'cylinders': 4,
        'displacement': 1.6,
        'drive': 'fwd',
        'fuel_type': 'gas',
        'highway_mpg': 26,
        'make': 'toyota',
        'model': 'corolla',
        'transmission': 'a',
        'year': 2023
    },
    {
        'city_mpg': 22,
        'class': 'compact car',
        'combination_mpg': 23,
        'cylinders': 4,
        'displacement': 2.0,
        'drive': 'fwd',
        'fuel_type': 'gas',
        'highway_mpg': 25,
        'make': 'honda',
        'model': 'civic',
        'transmission': 'm',
        'year': 2018
    },
    {
        'city_mpg': 20,
        'class': 'midsize car',
        'combination_mpg': 22,
        'cylinders': 6,
        'displacement': 2.5,
        'drive': 'awd',
        'fuel_type': 'gas',
        'highway_mpg': 24,
        'make': 'subaru',
        'model': 'outback',
        'transmission': 'a',
        'year': 2003
    },
    {
        'city_mpg': 18,
        'class': 'full-size car',
        'combination_mpg': 20,
        'cylinders': 8,
        'displacement': 4.0,
        'drive': 'rwd',
        'fuel_type': 'gas',
        'highway_mpg': 22,
        'make': 'chevrolet',
        'model': 'impala',
        'transmission': 'a',
        'year': 2011
    },
    {
        'city_mpg': 25,
        'class': 'compact car',
        'combination_mpg': 27,
        'cylinders': 4,
        'displacement': 1.8,
        'drive': 'fwd',
        'fuel_type': 'hybrid',
        'highway_mpg': 30,
        'make': 'toyota',
        'model': 'prius',
        'transmission': 'cvt',
        'year': 2012
    },
    {
        'city_mpg': 21,
        'class': 'midsize car',
        'combination_mpg': 23,
        'cylinders': 6,
        'displacement': 3.0,
        'drive': 'awd',
        'fuel_type': 'diesel',
        'highway_mpg': 25,
        'make': 'audi',
        'model': 'a6',
        'transmission': 'a',
        'year': 2018
    },
    {
        'city_mpg': 21,
        'class': 'midsize car',
        'combination_mpg': 23,
        'cylinders': 6,
        'displacement': 3.0,
        'drive': 'awd',
        'fuel_type': 'diesel',
        'highway_mpg': 25,
        'make': 'audi',
        'model': 'a6',
        'transmission': 'a',
        'year': 2018
    },
    {
        'city_mpg': 19,
        'class': 'full-size car',
        'combination_mpg': 21,
        'cylinders': 8,
        'displacement': 5.0,
        'drive': 'rwd',
        'fuel_type': 'gas',
        'highway_mpg': 22,
        'make': 'ford',
        'model': 'mustang',
        'transmission': 'm',
        'year': 2013
    },
    {
        'city_mpg': 24,
        'class': 'compact car',
        'combination_mpg': 26,
        'cylinders': 4,
        'displacement': 1.8,
        'drive': 'fwd',
        'fuel_type': 'gas',
        'highway_mpg': 28,
        'make': 'honda',
        'model': 'accord',
        'transmission': 'cvt',
        'year': 2017
    },
    {
        'city_mpg': 17,
        'class': 'midsize car',
        'combination_mpg': 19,
        'cylinders': 6,
        'displacement': 3.5,
        'drive': 'fwd',
        'fuel_type': 'hybrid',
        'highway_mpg': 21,
        'make': 'toyota',
        'model': 'camry',
        'transmission': 'a',
        'year': 2016
    },
    {
        'city_mpg': 27,
        'class': 'compact car',
        'combination_mpg': 29,
        'cylinders': 4,
        'displacement': 1.5,
        'drive': 'fwd',
        'fuel_type': 'gas',
        'highway_mpg': 31,
        'make': 'hyundai',
        'model': 'elantra',
        'transmission': 'a',
        'year': 2022
    },
    {
        'city_mpg': 17,
        'class': 'midsize car',
        'combination_mpg': 19,
        'cylinders': 6,
        'displacement': 3.5,
        'drive': 'fwd',
        'fuel_type': 'hybrid',
        'highway_mpg': 21,
        'make': 'toyota',
        'model': 'camry',
        'transmission': 'a',
        'year': 2016
    },
    {
        'city_mpg': 27,
        'class': 'compact car',
        'combination_mpg': 29,
        'cylinders': 4,
        'displacement': 1.5,
        'drive': 'fwd',
        'fuel_type': 'gas',
        'highway_mpg': 31,
        'make': 'hyundai',
        'model': 'elantra',
        'transmission': 'a',
        'year': 2022
    },
    {
        'city_mpg': 17,
        'class': 'midsize car',
        'combination_mpg': 19,
        'cylinders': 6,
        'displacement': 3.5,
        'drive': 'fwd',
        'fuel_type': 'hybrid',
        'highway_mpg': 21,
        'make': 'toyota',
        'model': 'camry',
        'transmission': 'a',
        'year': 2016
    },
    {
        'city_mpg': 27,
        'class': 'compact car',
        'combination_mpg': 29,
        'cylinders': 4,
        'displacement': 1.5,
        'drive': 'fwd',
        'fuel_type': 'gas',
        'highway_mpg': 31,
        'make': 'hyundai',
        'model': 'elantra',
        'transmission': 'a',
        'year': 2022
    },
    {
        'city_mpg': 23,
        'class': 'compact car',
        'combination_mpg': 24,
        'cylinders': 4,
        'displacement': 1.6,
        'drive': 'fwd',
        'fuel_type': 'gas',
        'highway_mpg': 26,
        'make': 'toyota',
        'model': 'corolla',
        'transmission': 'a',
        'year': 1999
    },
    {
        'city_mpg': 23,
        'class': 'compact car',
        'combination_mpg': 26,
        'cylinders': 4,
        'displacement': 1.6,
        'drive': 'fwd',
        'fuel_type': 'gas',
        'highway_mpg': 31,
        'make': 'toyota',
        'model': 'corolla',
        'transmission': 'm',
        'year': 2007
    },
    {
        'city_mpg': 23,
        'class': 'compact car',
        'combination_mpg': 25,
        'cylinders': 4,
        'displacement': 1.8,
        'drive': 'fwd',
        'fuel_type': 'gas',
        'highway_mpg': 30,
        'make': 'toyota',
        'model': 'corolla',
        'transmission': 'a',
        'year': 2014
    },
    {
        'city_mpg': 23,
        'class': 'compact car',
        'combination_mpg': 26,
        'cylinders': 4,
        'displacement': 1.8,
        'drive': 'fwd',
        'fuel_type': 'gas',
        'highway_mpg': 30,
        'make': 'toyota',
        'model': 'corolla',
        'transmission': 'm',
        'year': 1995
    },
    {
        'city_mpg': 23,
        'class': 'small station wagon',
        'combination_mpg': 25,
        'cylinders': 4,
        'displacement': 1.8,
        'drive': 'fwd',
        'fuel_type': 'gas',
        'highway_mpg': 30,
        'make': 'toyota',
        'model': 'corolla wagon',
        'transmission': 'a',
        'year': 2009
    },
    {
        'city_mpg': 23,
        'class': 'compact car',
        'combination_mpg': 24,
        'cylinders': 4,
        'displacement': 1.6,
        'drive': 'fwd',
        'fuel_type': 'gas',
        'highway_mpg': 26,
        'make': 'toyota',
        'model': 'corolla',
        'transmission': 'a',
        'year': 2023
    },
    {
        'city_mpg': 22,
        'class': 'compact car',
        'combination_mpg': 23,
        'cylinders': 4,
        'displacement': 2.0,
        'drive': 'fwd',
        'fuel_type': 'gas',
        'highway_mpg': 25,
        'make': 'honda',
        'model': 'civic',
        'transmission': 'm',
        'year': 2018
    },
    {
        'city_mpg': 20,
        'class': 'midsize car',
        'combination_mpg': 22,
        'cylinders': 6,
        'displacement': 2.5,
        'drive': 'awd',
        'fuel_type': 'gas',
        'highway_mpg': 24,
        'make': 'subaru',
        'model': 'outback',
        'transmission': 'a',
        'year': 2003
    },
    {
        'city_mpg': 18,
        'class': 'full-size car',
        'combination_mpg': 20,
        'cylinders': 8,
        'displacement': 4.0,
        'drive': 'rwd',
        'fuel_type': 'gas',
        'highway_mpg': 22,
        'make': 'chevrolet',
        'model': 'impala',
        'transmission': 'a',
        'year': 2011
    },
    {
        'city_mpg': 25,
        'class': 'compact car',
        'combination_mpg': 27,
        'cylinders': 4,
        'displacement': 1.8,
        'drive': 'fwd',
        'fuel_type': 'hybrid',
        'highway_mpg': 30,
        'make': 'toyota',
        'model': 'prius',
        'transmission': 'cvt',
        'year': 2012
    },
    {
        'city_mpg': 21,
        'class': 'midsize car',
        'combination_mpg': 23,
        'cylinders': 6,
        'displacement': 3.0,
        'drive': 'awd',
        'fuel_type': 'diesel',
        'highway_mpg': 25,
        'make': 'audi',
        'model': 'a6',
        'transmission': 'a',
        'year': 2018
    },
    {
        'city_mpg': 21,
        'class': 'midsize car',
        'combination_mpg': 23,
        'cylinders': 6,
        'displacement': 3.0,
        'drive': 'awd',
        'fuel_type': 'diesel',
        'highway_mpg': 25,
        'make': 'audi',
        'model': 'a6',
        'transmission': 'a',
        'year': 2018
    },
    {
        'city_mpg': 19,
        'class': 'full-size car',
        'combination_mpg': 21,
        'cylinders': 8,
        'displacement': 5.0,
        'drive': 'rwd',
        'fuel_type': 'gas',
        'highway_mpg': 22,
        'make': 'ford',
        'model': 'mustang',
        'transmission': 'm',
        'year': 2013
    },
    {
        'city_mpg': 24,
        'class': 'compact car',
        'combination_mpg': 26,
        'cylinders': 4,
        'displacement': 1.8,
        'drive': 'fwd',
        'fuel_type': 'gas',
        'highway_mpg': 28,
        'make': 'honda',
        'model': 'accord',
        'transmission': 'cvt',
        'year': 2017
    },
    {
        'city_mpg': 17,
        'class': 'midsize car',
        'combination_mpg': 19,
        'cylinders': 6,
        'displacement': 3.5,
        'drive': 'fwd',
        'fuel_type': 'hybrid',
        'highway_mpg': 21,
        'make': 'toyota',
        'model': 'camry',
        'transmission': 'a',
        'year': 2016
    },
    {
        'city_mpg': 27,
        'class': 'compact car',
        'combination_mpg': 29,
        'cylinders': 4,
        'displacement': 1.5,
        'drive': 'fwd',
        'fuel_type': 'gas',
        'highway_mpg': 31,
        'make': 'hyundai',
        'model': 'elantra',
        'transmission': 'a',
        'year': 2022
    },
    {
        'city_mpg': 17,
        'class': 'midsize car',
        'combination_mpg': 19,
        'cylinders': 6,
        'displacement': 3.5,
        'drive': 'fwd',
        'fuel_type': 'hybrid',
        'highway_mpg': 21,
        'make': 'toyota',
        'model': 'camry',
        'transmission': 'a',
        'year': 2016
    },
    {
        'city_mpg': 27,
        'class': 'compact car',
        'combination_mpg': 29,
        'cylinders': 4,
        'displacement': 1.5,
        'drive': 'fwd',
        'fuel_type': 'gas',
        'highway_mpg': 31,
        'make': 'hyundai',
        'model': 'elantra',
        'transmission': 'a',
        'year': 2022
    },
    {
        'city_mpg': 17,
        'class': 'midsize car',
        'combination_mpg': 19,
        'cylinders': 6,
        'displacement': 3.5,
        'drive': 'fwd',
        'fuel_type': 'hybrid',
        'highway_mpg': 21,
        'make': 'toyota',
        'model': 'camry',
        'transmission': 'a',
        'year': 2016
    },
    {
        'city_mpg': 27,
        'class': 'compact car',
        'combination_mpg': 29,
        'cylinders': 4,
        'displacement': 1.5,
        'drive': 'fwd',
        'fuel_type': 'gas',
        'highway_mpg': 31,
        'make': 'hyundai',
        'model': 'elantra',
        'transmission': 'a',
        'year': 2022
    }
];