import type { NextPage } from 'next';
import Hero from '@/components/feature/root/main/Hero';
import Catalogue from '@/components/feature/root/main/Catalogue';

const RootPage: NextPage = () => {

    return (
        <>
            <Hero />
            <Catalogue />
        </>
    );
};

export default RootPage;