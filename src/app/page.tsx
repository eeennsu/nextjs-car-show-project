import type { NextPage } from 'next';
import Hero from '@/components/feature/root/main/Hero';
import Catalogue from '@/components/feature/root/main/Catalogue';
import Cars from '@/components/feature/root/main/Cars';

type Props = {
    searchParams: CarSearchParams;
}

const RootPage: NextPage<Props> = ({ searchParams }) => {

    return (
        <>
            <Hero />
            <Catalogue />
            <Cars searchParams={searchParams} />
        </>
    );
};

export default RootPage;