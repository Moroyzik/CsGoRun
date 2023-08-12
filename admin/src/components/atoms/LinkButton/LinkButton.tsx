import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'react-admin';
import CommentIcon from '@mui/icons-material/Comment';

type RecordType = {
    id: string
}

type Props = {
    record: RecordType
}

export const LinkButton: React.FC<Props> = ({ record }) => {

    return (
        <Button
            variant="contained"
            component={Link}
            to={`/comments/create?post_id=${record.id}`}
            label="Add a comment"
            title="Add a comment"
        >
            <CommentIcon />
        </Button>
    )
}