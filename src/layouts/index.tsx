import {Outlet} from 'umi';
import {NextUIProvider} from '@nextui-org/react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import UserProfileButton from '@/components/UserProfileButton';

const hasNoLayout = [
    '/login',
    '/reset-password'
];

export default () =>
{
    return <NextUIProvider>
        {hasNoLayout.includes(location.pathname)
            ? <div className={'login-page'}>
                <Outlet/>
            </div>
            : <>
                <div className={'app'}>
                    <Header title={'DEMO//APP'}
                            isAuthorized={true}
                            extra={<><UserProfileButton name={'Demo User'}/></>}/>

                    <div className={'workspace'}>
                        <Outlet/>
                    </div>

                    <Footer/>
                </div>
            </>}
    </NextUIProvider>;
};