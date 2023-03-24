import {Avatar} from '@nextui-org/react';

export interface UserProfileButtonProps
{
    name: string;
}

export default ({name}: UserProfileButtonProps) =>
{
    return <Avatar title={name}/>;
};