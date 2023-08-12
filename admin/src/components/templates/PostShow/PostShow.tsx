import React from 'react'
import {
    Datagrid,
    DateField,
    EditButton,
    ShowButton,
    ReferenceManyField,
    RichTextField,
    Show,
    Tab,
    TabbedShowLayout,
    TextField, ShowBase, useShowContext
} from 'react-admin';

import {LinkButton} from "../../atoms/LinkButton";

export const PostShow: React.FC = () => {

    return (
        <ShowBase><PostShowContent/></ShowBase>
    )
}

const PostShowContent: React.FC = () => {

    const {record, isLoading} = useShowContext<{ id: string; name: string }>();

    if (isLoading || !record) {
        return null;
    }

    return (
        <TabbedShowLayout>
            <Tab label="Summary">
                <TextField source="id"/>
                <TextField source="title"/>
                <TextField source="teaser"/>
            </Tab>
            <Tab label="Body" path="body">
                <RichTextField
                    source="body"
                    stripTags={false}
                    label=""
                    addLabel={false}
                />
            </Tab>
            <Tab label="Comments" path="comments">
                <ReferenceManyField
                    reference="comments"
                    target="post_id"
                    sort={{field: 'created_at', order: 'DESC'}}
                >
                    <Datagrid>
                        <DateField source="created_at"/>
                        <TextField source="body"/>
                        <ShowButton/>
                        <EditButton/>
                    </Datagrid>
                </ReferenceManyField>
                <LinkButton record={{id: record.id }}/>
            </Tab>
        </TabbedShowLayout>
    )
}