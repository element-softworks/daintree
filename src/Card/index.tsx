import React from 'react';
import styles from './styles.module.scss';
import { useTheme } from 'theming';

type CardProps = {
    title: string,
    paragraph?: string  // the paragraph is optional
}

interface Theme {
    color: string;
    background: string;
}

const Card: React.FC<CardProps> = ({title, paragraph}) => {
    const theme: Theme = useTheme();
    console.log({theme});
    return (
        <div className={styles.main}>
            <h2 style={{background: theme?.color ?? "blue"}}>{ title }</h2>
            <p>
                TEST2
                { paragraph }
            </p>
        </div>
    );
};

// const Card2 = ;
export {CardProps, Card};
