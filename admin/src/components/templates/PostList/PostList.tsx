import React from 'react'
import {
    Datagrid,
    List,
    ShowButton,
    TextField
} from 'react-admin';

type Props = any



export const PostList: React.FC<Props> = (props) => {

    return (
        <List {...props} sort={{ field: 'published_at', order: 'DESC' }}>
            <Datagrid>
                <TextField source="id" />
                <TextField source="title" />
                <ShowButton />
            </Datagrid>
        </List>
    )
}