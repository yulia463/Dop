import React from 'react';

type ContentTypeProps={
    heading:string,
    pages:string
}

export const Content = (props:ContentTypeProps) => {
    const{heading, pages}=props
    return (
        <div>
            <div>{heading}</div>
            <div>{pages}</div>
        </div>
    );
};

