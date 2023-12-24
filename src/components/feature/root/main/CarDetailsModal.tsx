'use client';

import type { FC } from 'react';
import { Transition, Dialog } from '@headlessui/react';
import { Fragment } from 'react';
import { IoCloseCircle } from "react-icons/io5";
import Image from 'next/image';
import CarInfo from './CarInfo';
import { generateCarImageUrl } from '@/utils/car';

type Props = {
    car: Car;
    isOpen: boolean;
    setClose: () => void;
}

const CarDetails: FC<Props> = ({ car, isOpen, setClose }) => {

    return (
        <Transition 
            show={isOpen} 
            as={Fragment}
            appear 
        >
            <Dialog as='div' className='relative z-10' onClose={setClose}>
                <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <div className='fixed inset-0 bg-black bg-opacity-75' onClick={setClose}/>
                </Transition.Child>
                <div className='fixed inset-0 overflow-y-auto'>
                    <div className='flex items-center justify-center min-h-full px-3 py-4 text-center'>
                        <Transition.Child
                            as={Fragment}
                            enter='ease-out duration-[250ms]'
                            enterFrom='opacity-0 scale-[0.9]'
                            enterTo='opacity-100 scale-100'
                            leave='ease-in duration-[150ms]'
                            leaveFrom='opacity-100 scale-100'
                            leaveTo='opacity-0 scale-[0.9]'
                        >
                            <Dialog.Panel className='relative  flex flex-col w-full max-h-[90dvh] max-w-lg gap-5 p-5 text-left transition-all transform shadow-md rounded-2xl bg-white/80'>
                                <div className='flex justify-end'>
                                    <button className='text-3xl cursor-pointer bg-inherit' onClick={setClose}>
                                        <IoCloseCircle className='transition hover:scale-125' />
                                    </button>
                                </div>
                                <div className='flex flex-col flex-1 gap-3'>
                                    <div className='relative w-full h-48 rounded-lg bg-gradient-to-br from-slate-300 to-slate-600'>
                                        <Image src={generateCarImageUrl(car)} alt='car model' fill priority className='object-contain py-6' />
                                    </div>
                                    <div className='flex gap-3'>
                                        <div className='relative flex-1 w-full h-40 rounded-lg bg-slate-200'>
                                            <Image src={generateCarImageUrl(car, '29')} alt='car model' fill priority className='object-contain' />
                                        </div>
                                        <div className='relative flex-1 w-full h-40 rounded-lg bg-slate-200'>
                                            <Image src={generateCarImageUrl(car, '33')} alt='car model' fill priority className='object-contain' />
                                        </div>
                                        <div className='relative flex-1 w-full h-40 rounded-lg bg-slate-200'>
                                            <Image src={generateCarImageUrl(car, '13')} alt='car model' fill priority className='object-contain' />
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col flex-1 gap-5'>
                                    <h2 className='text-xl font-semibold capitalize'>
                                        {car.make} {car.model}
                                    </h2>
                                    <div className='flex flex-wrap gap-4 overflow-y-auto max-h-[24dvh] style__scr'>
                                        {
                                            Object.entries(car).map(([key, value]) => (
                                                <CarInfo key={key} title={key} value={value} />
                                            ))
                                        } 
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>            
            </Dialog>
        </Transition>
    );
}

export default CarDetails;