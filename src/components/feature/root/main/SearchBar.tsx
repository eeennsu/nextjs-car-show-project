'use client';

import type { FC, ChangeEvent } from 'react';
import { Input } from '@mui/material';
import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';
import { TbSearch } from "react-icons/tb";
import { FaCar } from "react-icons/fa";
import { useSearchParams } from 'next/navigation';
import SearchManufacturer from './SearchManufacturer';
import toastr from '@/lib/toaster';

// client component
const SearchBar: FC = () => {

    const [manufacturer, setManufacturer] = useState<string>('');
    const [model, setModel] = useState<string>('');
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();

    const handleModelChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        setModel(target.value);
    }

    const handleSearch = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (manufacturer === '' && model === '') {
            toastr.info('Please input manufacturer and model');
            return;
        }

        const params = new URLSearchParams(searchParams);

        if (manufacturer && manufacturer !== '') {
            params.set('manufacturer', manufacturer.trim().toLowerCase());
        } else {
            params.delete('manufacturer');
        }
        
        if (model && model !== '') {
            params.set('model', model.trim().toLowerCase());
        } else {
            params.delete('model');
        }

        const newPathname = `${pathname}?${params.toString()}`

        router.push(newPathname, { scroll: false });        // false를 주면 스크롤이 고정됨.
    }

    return (
        <form className='relative flex flex-[1.3] items-center lg:gap-4 lg:justify-start w-full max-w-2xl px-2 py-0.5 sm:px-4 sm:py-1 text-black rounded-md sm:rounded-full max-sm:gap-2 max-sm:flex-col bg-slate-300 max-md:py-3.5' onSubmit={handleSearch}>
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