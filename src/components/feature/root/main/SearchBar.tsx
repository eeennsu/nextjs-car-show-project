'use client';

import type { FC, ChangeEvent } from 'react';
import { Input } from '@mui/material';
import { TbSearch } from "react-icons/tb";
import { useState } from 'react';
import SearchManufacturer from './SearchManufacturer';

const SearchBar: FC = () => {

    const [manufacturer, setManufacturer] = useState<string>('');

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <form className='relative flex items-center lg:gap-4 lg:justify-start w-full max-w-2xl px-2 py-0.5 sm:px-4 sm:py-1 text-black rounded-lg sm:rounded-full max-sm:gap-2.5 max-sm:flex-col bg-slate-300' onSubmit={handleSubmit}>
            <div className='flex items-center justify-start flex-1 w-full'>
                <SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer} />
                <button className='flex items-center justify-center cursor-pointer bg-inherit sm:hidden' type='submit'>
                    <TbSearch className='transition scale-125 bg-inherit hover:scale-150' />
                </button>
            </div>
            <div className='flex items-center justify-start flex-1 w-full'>
                <Input className='w-full rounded-full py-0.5 max-sm:mb-2' />
                <button className='flex items-center justify-center cursor-pointer bg-inherit' type='submit'>
                    <TbSearch className='transition scale-125 bg-inherit hover:scale-150 bg-slate-300' />
                </button>
            </div>
        </form>
    );
}

export default SearchBar;