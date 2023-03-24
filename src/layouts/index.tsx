import {Outlet} from 'umi';
import {NextUIProvider} from '@nextui-org/react';

const hasNoLayout = [
    '/login'
];

export default () =>
{
    return <NextUIProvider>

        {hasNoLayout.includes(location.pathname)
            ? <Outlet/>
            : <>
                <Outlet/>
                #Footer
            </>}
    </NextUIProvider>;
};