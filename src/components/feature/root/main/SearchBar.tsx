'use client';

import type { FC, ChangeEvent } from 'react';
import { Input } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { TbSearch } from "react-icons/tb";
import { FaCar } from "react-icons/fa";
import SearchManufacturer from './SearchManufacturer';
import toastr from '@/lib/toaster';

const SearchBar: FC = () => {

    const [manufacturer, setManufacturer] = useState<string>('');
    const [model, setModel] = useState<string>('');
    const router = useRouter();

    const handleSearch = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (manufacturer === '' && model === '') {
            toastr.info('Please input manufacturer and model');
            return;
        }

        const searchParams = new URLSearchParams(location.search);

        if (manufacturer) {
            searchParams.set('manufacturer', manufacturer.trim().toLowerCase());
        } else {
            searchParams.delete('manufacturer');
        }
        
        if (model) {
            searchParams.set('model', model.trim().toLowerCase());
        } else {
            searchParams.delete('model');
        }

        const newPathname = `${location.pathname}?${searchParams.toString()}`

        router.push(newPathname);
    }

    const handleModelChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        setModel(target.value);
    }

    return (
        <form className='relative flex items-center lg:gap-4 lg:justify-start w-full max-w-2xl px-2 py-0.5 sm:px-4 sm:py-1 text-black rounded-lg sm:rounded-full max-sm:gap-2 max-sm:flex-col bg-slate-300 max-md:p-3.5' onSubmit={handleSearch}>
            <div className='flex items-center justify-start flex-1 w-full'>
                <SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer} />
                <button className='flex items-center justify-center cursor-pointer bg-inherit sm:hidden' type='submit'>
                    <TbSearch className='w-5 h-5 transition bg-inherit hover:scale-[1.15] bg-slate-300' />
                </button>
            </div>
            <div className='flex items-center justify-start flex-1 w-full'>
                <span className='flex items-center mr-3 bg-inherit'>
                    <FaCar className='w-5 h-5' />
                </span>
                <Input className='w-full rounded-full py-0.5 max-sm:mb-2 bg-slate-300' name='model' value={model} onChange={handleModelChange} />
                <button className='flex items-center justify-center cursor-pointer bg-inherit' type='submit'>
                    <TbSearch className='w-5 h-5 transition bg-inherit hover:scale-[1.15] bg-slate-300' />
                </button>
            </div>
        </form>
    );
}

export default SearchBar;