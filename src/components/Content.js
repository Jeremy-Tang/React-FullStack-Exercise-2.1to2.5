import React from 'react';

const Content = ({ parts }) => {
    return (
        <>
            {parts.map(i => <li>{i.name} || Number : {i.exercises}</li> )}
        </>
    );
};

export default Content;
