import React from 'react';

type CardProps = {
    title: string,
    paragraph?: string  // the paragraph is optional
}

const Bottle2: React.FC<CardProps> = ({title, paragraph}) => {
    return (
        <div >
            <h2>{ title }</h2>
            <p>
                { paragraph }
            </p>
        </div>
    );
};

export {CardProps, Bottle2};
