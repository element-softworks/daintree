import React from 'react';
import styles from './styles.module.scss';
import { useTheme } from 'theming';

// import { Card } from '../../../dist/index.js';

type CardProps = {
    title: string,
    paragraph?: string  // the paragraph is optional
}

interface Theme {
    base: string
    textColor: string
    colorPrimary: string
    colorSecondary: string
    cardBorder: string
    cardBackground: string
    fontPrimary: string
    fontSecondary: string
}

const Card: React.FC<CardProps> = ({title, paragraph}) => {
    const theme: Theme = useTheme();
    console.log({theme});
    return (
        <div className={styles.main} style={{color: theme?.textColor, background: theme?.cardBackground ?? "blue", border: theme?.cardBorder ?? "5px solid red"}}>
            <h2 style={{color: theme?.textColor, fontFamily: theme?.fontPrimary}}>{ title }</h2>
            <p style={{color: theme?.textColor, fontFamily: theme?.fontSecondary}}>
                {/*TEST2 <span>{theme}</span>*/}
                { paragraph }<hr/><b>Card Colour: {theme?.cardBackground }</b>
            </p>
        </div>
    );
};

// const Card2 = ;
export {CardProps, Card};
