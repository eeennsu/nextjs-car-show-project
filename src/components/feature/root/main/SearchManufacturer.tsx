import type { Dispatch, FC, ChangeEvent, SetStateAction } from 'react';
import { useState, forwardRef, Fragment } from 'react';
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
    const handleManufactuerer = (value: string) => {
        setManufacturer(value);
    }

    const handleQuery = (e: ChangeEvent<HTMLInputElement>) => { 
        setQuery(e.target.value);
    }

    const initQuery = () => {
        setQuery('');
    }

    const filteredManufactures = query === '' ? manufacturers : manufacturers.filter((item) => (
        item.toLowerCase().replaceAll(' ', '').includes(query)
    ))

    return (
        <>
            {/* <Input className='w-full rounded-full py-0.5' />  */}
            <Combobox value={manufacturer} onChange={handleManufactuerer}>
                <div className='flex items-center justify-center mr-3'>
                    <Combobox.Button className='bg-inherit'>
                        <TbBrandFlickr className='flex items-center justify-center h-6 w bg-inherit bg-slate-300' />
                    </Combobox.Button>
                </div>          
                <Combobox.Input 
                    displayValue={(item: string) => item}
                    onChange={handleQuery}                 
                    as={Input}
                />     
                <Transition
                    as={Fragment}
                    leave='transition ease-in duration-100'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                    afterLeave={initQuery}
                >
                    <Combobox.Options className='absoulte mt-1'>
                        {
                            (filteredManufactures.length === 0 && query !== '') ? (
                                <Combobox.Option value={query}>
                                    Create &quot;{query}&ldquo;
                                </Combobox.Option>
                            ) : filteredManufactures.map((item) => (
                                <Combobox.Option key={item} className={({ active }) => `relative ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`} value={item}>
                                    {
                                        ({ selected, active }) => (
                                            <>
                                                <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                                                    {item}
                                                </span>

                                                {
                                                    selected ? (
                                                        <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-purple-500'}`} />
                                                    ) : null
                                                }
                                            </>
                                        )
                                    }
                                </Combobox.Option>
                            ))
                        }
                    </Combobox.Options>
                </Transition>        
            </Combobox>
        </>
    );
}

export default SearchManufacturer;




const Input = forwardRef((props, ref) => {
    return (
        <MuiInput className='w-full rounded-full py-0.5' ref={ref} {...props} placeholder='Volkswagen...' />
    );
});

Input.displayName = 'Input';