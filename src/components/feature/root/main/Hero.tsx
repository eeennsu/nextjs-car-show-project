import type { FC } from 'react';
import Image from 'next/image';
import GotoDown from './GotoDown';

const Hero: FC = () => {
   
    return (
        <section className='relative z-0 flex flex-col flex-1 h-full mt-10 gap-x-10 gap-y-2 lg:mt-14 2xl:mt-20 3xl:mt-24 lg:flex-row lg:justify-between'>
            <div className='flex flex-col flex-1'>
                <div className='flex flex-col items-center'>
                    <h1 className='text-4xl font-semibold leading-[1.4] tracking-wider md:text-5xl 2xl:font-[1000] 2xl:leading-[1.5] 3xl:text-6xl 3xl:leading-relaxed lg:p-0'>
                        Explore Style and Innovation in Our <br className='block lg:hidden'/> Car Collection!
                    </h1>
                    <p className='mt-7 lg:text-lg lg:mt-10 3xl:mt-16'>
                        Discover our showroom—a fusion of innovative automotive design and technology, perfect for future mobility adventures.
                    </p>               
                </div>  
                <div className='mt-8 text-center lg:text-left lg:mt-12 2xl:mt-16 3xl:mt-20'>
                    <GotoDown />
                </div>      
            </div>                          
            
            {/* desktop */}
            <div className='relative items-end justify-end flex-[1.3] hidden lg:flex'>
                <div className='z-0 w-full'>
                    <Image src='/images/car.png' alt='car' fill className='object-contain' />
                </div>               
                <div className='absolute w-full h-full scale-105 bg-repeat-round -z-10 left-24 ' style={{ backgroundImage: `url('/images/car-back.png')` }} />
            </div> 
            
            {/* mobile */}
            <div className='relative flex items-end justify-end flex-1 mt-5 lg:hidden'>
                <div className='z-0 flex justify-center w-full'>
                    <Image src='/images/car.png' alt='car' width={300} height={300} className='object-contain' />
                </div>               
                <div className='absolute w-full h-full scale-90 bg-repeat-round -z-10 left-4 rotate-[360deg]' style={{ backgroundImage: `url('/images/car-back.png')` }} />
            </div> 
        </section>
    );
}

export default Hero;