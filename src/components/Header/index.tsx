import {Button, Link, Navbar, Text} from '@nextui-org/react';
import {ReactNode} from 'react';

export interface HeaderProps
{
    title: string;
    extra?: ReactNode;

    isAuthorized?: boolean;
}

export default ({title = 'Untitled app', extra, isAuthorized}: HeaderProps) =>
{
    // return <div className={'header h-box'}>
    //     <div>
    //         <Text h3>{title}</Text>
    //         {subTitle && <Text>{subTitle}</Text>}
    //     </div>
    //
    //     <div className={'flex-1 h-box flex-end ml'}>
    //         {extra}
    //     </div>
    // </div>;
    return <Navbar variant={'sticky'}>
        <Navbar.Brand>
            <Text h3>{title}</Text>
        </Navbar.Brand>

        <Navbar.Content activeColor={'secondary'}>
            {!isAuthorized && <Navbar.Link color={'inherit'}
                                           href="/login">
                Login
            </Navbar.Link>}

            {!isAuthorized && <Navbar.Item>
                <Button auto={true}
                        color={'secondary'}
                        flat={true}
                        as={Link}
                        href="/signup">
                    Sign Up
                </Button>
            </Navbar.Item>}

            {isAuthorized && <Navbar.Item>
                {extra}
            </Navbar.Item>}

        </Navbar.Content>
    </Navbar>;
};