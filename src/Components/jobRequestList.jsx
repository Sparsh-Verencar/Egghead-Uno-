import React from 'react';
import JobRequest from './JobRequest';

const JobRequestList = ({ requests, onAccept, onReject }) => {
    return (
        <div>
            {requests.map((request) => (
                <JobRequest key={request.id} request={request} onAccept={onAccept} onReject={onReject} />
            ))}
        </div>
    );
};

export default JobRequestList;