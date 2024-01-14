import type { FC } from 'react';
import { footerLinks } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';

const Footer: FC = () => {

    return (
        <footer className='mx-4 xl:mx-16 mt-16 mb-8 border-t-[1px] border-t-gray-600'>
            <section className='flex flex-col px-6 pt-6 lg:flex-row lg:justify-between 2xl:pr-14 lg:pb-6 3xl:pr-32'>
                <h3 className='flex items-center max-lg:justify-center'>
                    <Image src='/images/logo.png' alt='logo' width={60} height={60} />
                    Car Showcase   
                </h3>
                <nav className='flex justify-around max-lg:mt-4 lg:gap-32 max-lg:text-center'>
                    {
                        footerLinks.map((footer) => (
                            <div key={footer.title}>
                                <h4 className='text-lg font-bold mb-7 dark:text-white'>
                                    {footer.title}
                                </h4>
                                <ul className='flex flex-col gap-3.5 flex-1'>
                                    {
                                        footer.links.map((link) => (
                                            <li key={link.name} className='cursor-pointer max-lg:text-sm text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white'>
                                                <Link href={link.url}>
                                                    {link.name}
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </nav>        
            </section>
            <section className='flex justify-between border-t-[1px] max-lg:flex-col-reverse max-lg:items-center border-gray-600 lg:pt-10 3xl:mr-32 lg:px-10 max-lg:pt-4 max-lg:mt-7'>
                <p className='max-lg:mt-4'>
                    All Rights Reserved &copy;
                </p>
                <div className='flex gap-8 2xl:mr-28 text-sm'>
                    <p className='hover:underline underline-offset-4 cursor-pointer'>
                        Privacy & Policy
                    </p>
                    <p className='hover:underline underline-offset-4 cursor-pointer'>
                        Terms & Condition
                    </p>
                </div>                
            </section>
        </footer>
    );
}

export default Footer;