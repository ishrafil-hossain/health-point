import React from 'react';
import { useParams } from 'react-router';

const Department = () => {
    const { departmentId } = useParams();
    return (
        <div>
            <h3>department : {departmentId}</h3>
        </div>
    );
};

export default Department;