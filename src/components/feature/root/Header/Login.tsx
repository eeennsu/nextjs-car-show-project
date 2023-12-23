'use client';

import type { FC } from 'react';
import type { ClientSafeProvider, LiteralUnion } from 'next-auth/react';
import { useSession, getProviders, signIn, signOut } from 'next-auth/react';
import { useState, useEffect } from 'react';
import { BuiltInProviderType } from 'next-auth/providers/index';
import { LinearProgress } from '@mui/material';
import OutlineButton from '@/components/common/OutlineButton';

const Login: FC = () => {

    const { data: session, status } = useSession();
    const [providers, setProviders] = useState<Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider> | null>(null);

    useEffect(() => {
        (async () => {
            const result = await getProviders();

            setProviders(result);
        })();
    }, []);

    const handleLogin = (id: string) => {
        signIn(id);
    }

    const handleLogout = () => {
        signOut();
    }

    return (
        <>
            {
                status === 'loading' ? (
                    <LinearProgress color='inherit' className='w-[80px]' /> 
                ) : status === 'unauthenticated' ? (
                    providers && Object.values(providers!).map((provider) => (
                        <OutlineButton key={provider.id} onClick={() => handleLogin(provider.id)}>
                            Login
                        </OutlineButton>
                    ))
                ) : (
                    <OutlineButton onClick={handleLogout}>
                        Logout
                    </OutlineButton>
                )
            }
        </>
    );
}

export default Login;