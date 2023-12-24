import type { NextPage } from 'next';
import Hero from '@/components/feature/root/main/Hero';
import Catalogue from '@/components/feature/root/main/Catalogue';
import Cars from '@/components/feature/root/main/Cars';

const RootPage: NextPage = () => {

    return (
        <>
            <Hero />
            <Catalogue />
            <Cars />
        </>
    );
};

export default RootPage;