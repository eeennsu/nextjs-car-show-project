'use client';

import type { FC } from 'react';
import { Fragment, useEffect, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { GoListUnordered } from "react-icons/go";
import { BsCheckAll } from "react-icons/bs";
import Image from 'next/image';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { updateSearchParams } from '@/utils/car';

type Props = {
    title: string;
    options: Array<FilterOption>;
}

const CustomFilter: FC<Props> = ({ title, options }) => {

    const router = useRouter();
    
    const [selectedOption, setSelectedOption] = useState<FilterOption['value']>(options?.at(0)?.value || 'Electricty');

    const handleSelectedOption = (value: string) => {   
        setSelectedOption(value);

        const newPathname = updateSearchParams(title, value.toLowerCase());
        //
        router.push(newPathname, { scroll: false });
    }

    return (
        <Listbox value={selectedOption} onChange={handleSelectedOption}>
            <div className='relative bg-black shadow-lg min-w-36'>
                <Listbox.Button className='relative flex items-center justify-between w-full h-full px-3 py-1.5 bg-slate-200 rounded-sm'>
                    <span className='block truncate'>
                        {selectedOption}
                    </span>
                    <span>
                        <GoListUnordered className='flex items-center justify-center w-5 h-5' /> 
                    </span>
                </Listbox.Button>
                <Transition
                    as={Fragment}
                    enter='transition ease-out duration-[30ms] z-20'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='transition ease-in duration-100'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <Listbox.Options className='absolute w-full overflow-y-auto rounded-md shadow-sm top-10 min-w-36 max-h-44 style__scroll'>
                        {
                            options.map((option) => (
                                <Listbox.Option
                                    key={option.title}
                                    className={({ active }) => `relative z-20 cursor-pointer w-full select-none ${active ? 'bg-slate-500' : 'bg-slate-800'}`}
                                    value={option.value}
                                >
                                    {
                                        ({ selected }) => (
                                            <>
                                                {
                                                    selected ? (
                                                        <span className='absolute inset-y-0 left-0 flex items-center ml-2 text-black '>
                                                            <BsCheckAll className='text-slate-200' />
                                                        </span>
                                                    ) : null
                                                }
                                                <span className={`block truncate pl-9 py-1.5 text-white/80 ${selected ? 'font-medium text-black' : 'font-normal'}`}>
                                                    {option.value}
                                                </span>                                              
                                            </>
                                        )
                                    }
                                </Listbox.Option>
                            ))
                        }
                    </Listbox.Options>
                </Transition>
            </div>
        </Listbox>
    );
}

export default CustomFilter;