import {Container, Table, Text} from '@nextui-org/react';
import {apiGet, endpoints} from '@/api';
import {useRequest} from 'ahooks';

const columns = [
    {
        name: 'Name',
        key: 'name'
    },

    {
        name: 'Email',
        key: 'email'
    }
];

export default () =>
{
    const {data, loading} = useRequest(() => apiGet(endpoints.users));

    return <Container css={{
        mt: '2rem'
    }}>
        <Text h3> Users ({data?.total})</Text>

        <Table shadow={false}
               bordered={true}
               color={'secondary'}
               disabledKeys={['user-skitsanos']}
               selectionMode={'single'}>
            <Table.Header columns={columns}>
                {column => (
                    <Table.Column
                        key={column.key}
                        hideHeader={column.key === 'actions'}
                        align={column.key === 'actions' ? 'center' : 'start'}>
                        {column.name}
                    </Table.Column>
                )}
            </Table.Header>

            <Table.Body items={data?.result || []}>
                {item => (
                    <Table.Row>
                        {columnKey => (
                            <Table.Cell>{item[columnKey]}</Table.Cell>
                        )}
                    </Table.Row>
                )}
            </Table.Body>
        </Table>

    </Container>;
};