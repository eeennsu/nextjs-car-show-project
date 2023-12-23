import type { Dispatch, FC, SetStateAction } from 'react';
import { Input } from '@mui/material';

type Props = {
    manufacturer: string;
    setManufacturer: Dispatch<SetStateAction<string>>;
}

const SearchManufacturer: FC<Props> = ({ manufacturer, setManufacturer }) => {


    return (
        <>
            <Input className='w-full rounded-full py-0.5' /> 
        </>
    );
}

export default SearchManufacturer;

