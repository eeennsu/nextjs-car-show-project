import type { Metadata, NextPage } from 'next';
import type { PropsWithChildren } from 'react';
// import { Raleway } from 'next/font/google'
import Footer from '@/components/feature/root/Footer/Footer';
import Header from '@/components/feature/root/Header/Header';
import AuthProvider from '@/components/feature/root/config/AuthProvider';
import MuiProvider from '@/components/feature/root/config/MuiProvider';
import './globals.css'

// const raleway = Raleway({ subsets: ['latin'], weight: '300' });

export const metadata: Metadata = {
    title: 'Car Shacase',
    description: 'Generated by create next app',
}

const RootLayout: NextPage<PropsWithChildren> = ({ children }) => {

    return (
        <html lang='ko'>
            <body>
                <div id='__next'>            
                    <MuiProvider>
                        <AuthProvider>                        
                            <div className='dark:text-white bg-gradient-to-br from-slate-400 to-white dark:from-black dark:to-gray-600'>                                                          
                                <div className='relative flex flex-col'>
                                    <div className='max-w-screen-xl px-4 mx-auto md:px-7 2xl:px-28 3xl:px-10 min-h-dvh'>
                                        <Header />
                                        <main className='flex flex-col flex-1'>
                                            {children}
                                        </main>    
                                    </div>                                      
                                    <Footer />                            
                                </div>                                                         
                            </div>                      
                        </AuthProvider>      
                    </MuiProvider>
                </div>
            </body>
        </html>
    );  
}

export default RootLayout;