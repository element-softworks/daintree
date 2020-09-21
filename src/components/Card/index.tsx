import React from 'react';
import styles from './styles.module.scss';
import { useTheme } from 'theming';


type CardProps = {
    title: string,
    paragraph?: string  // the paragraph is optional
}

interface Theme {
    base: string
    colorPrimary: string
    colorSecondary: string
    cardBorder: string
    cardBackground: string
}

const Card: React.FC<CardProps> = ({title, paragraph}) => {
    const theme: Theme = useTheme();
    console.log({theme});
    return (
        <div className={styles.main} style={{background: theme?.cardBackground ?? "blue", border: theme?.cardBorder ?? "5px solid red"}}>
            <h2>{ title }</h2>
            <p>
                {/*TEST2 <span>{theme}</span>*/}
                {theme?.cardBackground }
                { paragraph }
            </p>
        </div>
    );
};

// const Card2 = ;
export {CardProps, Card};
