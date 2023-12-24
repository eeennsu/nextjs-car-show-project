'use client';

import type { FC } from 'react';
import { useState } from 'react';
import { calculateCarRent, generateCarImageUrl } from '@/utils/car';
import { HiOutlineChevronDoubleRight } from 'react-icons/hi';
import Button from '@/components/common/Button';
import Image from 'next/image';
import CarDetailsModal from './CarDetailsModal';

type Props = {
    car: Car;
}

const CarCard: FC<Props> = ({ car }) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isHover, setIsHover] = useState<boolean>(false);
    const { city_mpg, combination_mpg, cylinders, displacement, drive, fuel_type, highway_mpg, make, model, transmission, year, class: _class } = car;

    const handleMoalOpen = () => {
        setIsOpen(true);
    }

    const handleMoalClose = () => {
        setIsOpen(false);
    }

    const handleHoverUp = () => {
        setIsHover(true);
    }

    const handleHoverDown = () => {
        setIsHover(false);
    }

    return (
        <div className='flex flex-col items-start justify-center p-6 text-white/70 transition duration-300 drop-shadow-lg group bg-gradient-to-tr from-slate-500 to-slate-900 hover:scale-[1.04] rounded-lg' onMouseEnter={handleHoverUp} onMouseLeave={handleHoverDown}>
            <div className='flex items-center justify-between w-full gap-2 mt-2'>
                <h2 className='relative flex flex-col font-semibold leading-4 capitalize'>
                    <span className='absolute text-sm text-white/75 bottom-0.5 italic'>
                        {make} 
                    </span>
                    <span className='absolute text-2xl top-1 left-3'>
                        {model}
                    </span>
                </h2>
                <p className='flex text-3xl leading-[38px] font-semibold'>
                    <span className='self-start text-[14px] leading-[17px] font-semibold'>
                        $
                    </span>
                    <span className='mx-0.5'>
                        {calculateCarRent(city_mpg, year)}
                    </span>
                    <span className='self-end text-[14px] leading-[17px] font-medium'>
                        /day
                    </span>
                </p>
            </div>            
            <div className='relative object-contain w-full h-40 mt-10'>
                <Image src={generateCarImageUrl(car)} alt='car model' fill priority sizes='100%' className='object-contain' />
            </div>
            <div className='relative flex w-full'>
                <div className='flex justify-between w-full px-3 py-2 transition-opacity duration-75 rounded-lg group-hover:opacity-0 text-grey bg-slate-400/55'>
                    <div className='flex flex-col items-center justify-center gap-2'>
                        <Image src='/images/steering-wheel.svg' width={20} height={20} alt='steering wheel' />
                        <p className='text-[14px] leading-[17px]'>
                            {transmission === 'a' ? 'Auto' : 'Manual'}
                        </p>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-2'>
                        <Image src='/images/tire.svg' width={20} height={20} alt='seat' />
                        <p className='text-[14px] leading-[17px]'>
                            {drive.toUpperCase()}
                        </p>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-2'>
                        <Image src='/images/gas.svg' width={20} height={20} alt='seat' />
                        <p className='text-[12px] leading-[14px]'>{350} 
                            {city_mpg}
                        </p>
                    </div>
                </div>
                <div className={`absolute bottom-0 z-10 hidden w-full group-hover:flex transition-opacity duration-300 delay-75 ${isHover ? 'opacity-100' : 'opacity-0'}`}>
                    <Button className='relative w-full' onClick={handleMoalOpen}>
                        View Details <HiOutlineChevronDoubleRight className='absolute right-3' />
                    </Button>
                </div>
            </div>
            <CarDetailsModal car={car} isOpen={isOpen} setClose={handleMoalClose} />
        </div>
    );
}

export default CarCard;