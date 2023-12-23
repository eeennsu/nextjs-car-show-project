import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Login from './Login';

const Header: FC = () => {

    return (
        <header className='flex justify-between pt-3 lg:pt-4 3xl:pt-5'>
            <h1 className='flex items-center'>
                <Link href='/' className='flex items-center'>
                    <Image src='/images/logo.png' alt='logo' width={60} height={60} className='object-contain' />
                </Link>    
                <Link href='/' className='text-lg font-bold no-underline visited:text-white'>
                    Car Showcase
                </Link>                        
            </h1>
            <div className='flex items-center pr-4 lg:pr-0'>
                <Login />
            </div>
        </header>
    );
}

export default Header;