import { InfinitySpin } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

export function Loader() {
    return (
        <LoaderWrapper>
            <InfinitySpin 
                width='200'
                color='#ea332c'
            />
        </LoaderWrapper>
    )
}