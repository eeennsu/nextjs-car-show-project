import type { Dispatch, FC, ChangeEvent, SetStateAction } from 'react';
import { useState, Fragment } from 'react';
import { TbBrandFlickr } from "react-icons/tb";
import { Input as MuiInput } from '@mui/material';
import { Combobox, Transition } from '@headlessui/react';
import { manufacturers } from '@/constants';

type Props = {
    manufacturer: string;
    setManufacturer: Dispatch<SetStateAction<string>>;
}

const SearchManufacturer: FC<Props> = ({ manufacturer, setManufacturer }) => {

    const [query, setQuery] = useState<string>('');

    const handleManufactuererVal = (value: string) => {
        setManufacturer(value);
    }

    const handleManufactuererInput = ({ target }: ChangeEvent<HTMLInputElement>) => { 
        setManufacturer(target.value);
    }

    const handleQuery = ({ target }: ChangeEvent<HTMLInputElement>) => { 
        setQuery(target.value);
    }

    const initQuery = () => {
        setQuery('');
    }

    const filteredManufactures = query === '' ? [] : manufacturers.filter((item) => (
        item.toLowerCase().replaceAll(' ', '').includes(query.toLowerCase())
    ));

    return (
        <Combobox value={manufacturer} onChange={handleManufactuererVal}>             
            <div className='relative flex flex-col justify-center w-full'>
                <div className='flex items-center w-full'>
                    <span className='mr-3 bg-inherit'>
                        <TbBrandFlickr className='flex items-center justify-center w-5 h-5 bg-inherit bg-slate-300' />
                    </span>                    
                    <Combobox.Input 
                        displayValue={(item: string) => item}
                        onChange={handleQuery}    
                        as={Fragment}                                                    
                    >
                        <MuiInput className='w-full rounded-full py-0.5 bg-slate-300' name='manufacturer' placeholder='Volkswagen...' value={manufacturer} onChange={handleManufactuererInput} />
                    </Combobox.Input>   
                </div>                     
                <Transition
                    as={'div'}                
                    leave='transition ease-in duration-100'                      
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                    className='ml-7'
                    afterLeave={initQuery}
                >
                    {
                        query !== '' && (
                            <Combobox.Options className='absolute z-10 flex flex-col w-full mt-1 overflow-auto rounded-md shadow-lg top-10 absoulte max-h-36 lg:max-h-56 ring ring-black ring-opacity-5 focus:outline-none max-w-72 style__scroll'>
                                {
                                    (filteredManufactures?.length === 0 && query !== '') ? (
                                        <Combobox.Option className='px-2 text-white/80 bg-slate-800 py-1.5 pl-2' value={query}>
                                            Create &quot;{query}&ldquo;
                                        </Combobox.Option>
                                    ) : filteredManufactures?.map((item) => (
                                        <Combobox.Option key={item} className={({ active }) => `relative text-white/80 pl-2 ${active ? 'bg-gray-500' : 'bg-slate-800'}`} value={item}>
                                            {
                                                ({ selected, active }) => (
                                                    <div className='px-2 cursor-pointer py-1.5'>
                                                        <span className={`block truncate`}>
                                                            {item}
                                                        </span>
                                                        {
                                                            selected ? (
                                                                <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-purple-500'}`} />
                                                            ) : null
                                                        }
                                                    </div>
                                                )
                                            }
                                        </Combobox.Option>
                                    ))                    
                                }
                            </Combobox.Options>
                        )
                    }
                </Transition>                   
            </div>
        </Combobox>            
    );
}

export default SearchManufacturer;
