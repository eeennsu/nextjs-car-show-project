import type { FC } from 'react';
import Button from '@/components/common/Button';
import Image from 'next/image';

const Hero: FC = () => {

    return (
        <section className='relative z-0 flex flex-col mt-10 gap-x-10 gap-y-5 lg:mt-20 lg:flex-row lg:justify-between'>
            <div className='flex flex-col flex-1'>
                <div className='flex flex-col items-center'>
                    <h1 className='text-4xl font-semibold tracking-wider md:text-5xl xl:text-6xl xl:leading-relaxed'>
                        Explore the Fusion of Style and Innovation in Our Car Collection!
                    </h1>
                    <p className='mt-5 lg:mt-8'>
                        Where style meets innovation. Explore our showroom for cutting-edge automotive design and technology—a perfect companion for new adventures in the future of mobility.
                    </p>               
                </div>  
                <div className='mt-4 lg:mt-7'>
                    <Button>
                        Explore Cars
                    </Button>
                </div>      
            </div>        
            <div className='relative flex items-end justify-end flex-[1.3]'>
                <div className='z-0 w-full'>
                    <Image src='/images/car.png' alt='car' fill className='object-contain' />
                </div>
                {/* <div className='absolute xl:-top-24 xl:-right-1/2 -right-1/4 bg-repeat-round -z-10 w-full xl:h-[100vdh] overflow-hidden h-[590px]' style={{ backgroundImage: `url('/images/car-back.png')` }} /> */}
                <div className='absolute w-full h-full scale-105 bg-repeat-round rotate-[340deg] -z-10 left-14' style={{ backgroundImage: `url('/images/car-back.png')` }} />
            </div>
        </section>
    );
}

export default Hero;