import React from 'react';
import {Grid as ReactGrid, Row as ReactRow, Col as ReactCol} from 'react-flexbox-grid';

import styles from './styles.module.scss';

type GridProps = {
    children: object
    noMargin: string
    noPadding: string
    fullHeight: string
    className: string
}
type RowProps = {
    children: object
    column: string
    row: string
    className: string
}
type ColProps = {
    children: object
    shrink: string
    xsShrink: boolean
    smShrink: boolean
    mdShrink: boolean
    lgShrink: boolean
    xlShrink: boolean
    grow: string
    xsGrow: boolean
    smGrow: boolean
    mdGrow: boolean
    lgGrow: boolean
    xlGrow: boolean
    className: string
}

type DividerProps = {
    margin: number
    xsMargin: number
    smMargin: number
    mdMargin: number
    lgMargin: number
    xlMargin: number
    className: object
}

/**
 Daintree’s grid system uses a series of containers, rows, and columns to layout and align content. It’s built with [flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) and is fully responsive. Below is an example and an in-depth look at how the grid comes together.
 New to or unfamiliar with flexbox? Read this [CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background) flexbox guide for background, terminology, guidelines, and code snippets.

 ---

 ### Grid
 A `<Grid/>` component is a container sets a width of 1424px (on XL) devices, and is 100% max-width throughout.

 Our grid system is built on [react flexbox grid](https://github.com/roylee0704/react-flexbox-grid). It uses a **12 column** layout system

 ### Row

 Row creates a block level divider between the rest of the content, allowing you to group columns together.

 Rows have gutters to allow correct spacing in Cols.

 A `<Row/>` component must only include `<Col/>` components. Children can then be placed inside of columns.

 ### Col

 - `xs` used on devices from 0px and above.
 - `sm` used on devices from 576px and above.
 - `md` used on devices from 768px and above.
 - `lg` used on devices from 992px and above.
 - `xl` used on devices from 1200px and above.

 `<Col/>` components must be placed inside of a `<Row/>` component.

 If you write multiple columns that total more than 100% width overall, then the overlapping columns will wrap onto a new row.


 */
const Grid: React.FC<GridProps> = ({children, noMargin, noPadding, fullHeight, className = '', ...props}) => (
    <ReactGrid
        className={`${styles.grid} ${noMargin ? styles.gridNoMargin : ''} ${
            noPadding ? styles.gridNoPadding : ''
        } ${fullHeight ? styles.gridFullHeight : ''} ${className}`}
        {...props}
    >
        {children}
    </ReactGrid>
);

const Row: React.FC<RowProps> = ({children, column, row, className = '', ...props}) => {
    const renderClassNames = () => {
        const classNames = [];

        switch (row) {
            case 'xs': {
                classNames.push(styles.rowDirectionRowXs);
                break;
            }
            case 'sm': {
                classNames.push(styles.rowDirectionRowSm);
                break;
            }
            case 'md': {
                classNames.push(styles.rowDirectionRowMd);
                break;
            }
            case 'lg': {
                classNames.push(styles.rowDirectionRowLg);
                break;
            }
            case 'xl': {
                classNames.push(styles.rowDirectionRowXl);
                break;
            }
        }

        switch (column) {
            case 'xs': {
                classNames.push(styles.rowDirectionColumnXs);
                break;
            }
            case 'sm': {
                classNames.push(styles.rowDirectionColumnSm);
                break;
            }
            case 'md': {
                classNames.push(styles.rowDirectionColumnMd);
                break;
            }
            case 'lg': {
                classNames.push(styles.rowDirectionColumnLg);
                break;
            }
            case 'xl': {
                classNames.push(styles.rowDirectionColumnXl);
                break;
            }
        }

        return classNames.join(' ');
    };

    return (
        <ReactRow className={`${className} ${styles.row} ${renderClassNames()}`} {...props}>
            {children}
        </ReactRow>
    );
};

const Col: React.FC<ColProps> = ({
                                     children,
                                     shrink,
                                     xsShrink,
                                     smShrink,
                                     mdShrink,
                                     lgShrink,
                                     xlShrink,
                                     grow,
                                     xsGrow,
                                     smGrow,
                                     mdGrow,
                                     lgGrow,
                                     xlGrow,
                                     className,
                                     ...props
                                 }) => {
    const renderClassNames = () => {
        const classNames = [];

        if (shrink) classNames.push(styles.colShrink);
        if (xsShrink) classNames.push(styles.colXsShrink);
        if (smShrink) classNames.push(styles.colSmShrink);
        if (mdShrink) classNames.push(styles.colMdShrink);
        if (lgShrink) classNames.push(styles.colLgShrink);
        if (xlShrink) classNames.push(styles.colXlShrink);

        if (grow) classNames.push(styles.colGrow);
        if (xsGrow) classNames.push(styles.colXsGrow);
        if (smGrow) classNames.push(styles.colSmGrow);
        if (mdGrow) classNames.push(styles.colMdGrow);
        if (lgGrow) classNames.push(styles.colLgGrow);
        if (xlGrow) classNames.push(styles.colXlGrow);

        return classNames.join(' ');
    };

    return (
        <ReactCol className={`${className ?? ''} ${styles.col} ${renderClassNames()}`} {...props}>
            {children}
        </ReactCol>
    );
};

// Builds margin spacer (responsive)
const Divider: React.FC<DividerProps> = ({
                                             margin = 3,
                                             xsMargin,
                                             smMargin,
                                             mdMargin,
                                             lgMargin,
                                             xlMargin,
                                             children,
                                         }) => {
    const renderClassNames = () => {
        const breakpoints = [
            {name: 'Xs', size: xsMargin},
            {name: 'Sm', size: smMargin},
            {name: 'Md', size: mdMargin},
            {name: 'Lg', size: lgMargin},
            {name: 'Sm', size: xlMargin},
        ];

        const classNames = [];

        // base margins (not responsive)
        if (margin === 0) classNames.push(styles.dividerNone);
        if (margin === 1) classNames.push(styles.dividerExtraSmall);
        if (margin === 2) classNames.push(styles.dividerSmall);
        if (margin === 3) classNames.push(styles.dividerMedium);
        if (margin === 4) classNames.push(styles.dividerLarge);
        if (margin === 5) classNames.push(styles.dividerExtraLarge);

        breakpoints.forEach(breakpoint => {
            switch (breakpoint.size) {
                case 0: {
                    classNames.push(styles[`divider${breakpoint.name}None`]);
                    break;
                }
                case 1: {
                    classNames.push(styles[`divider${breakpoint.name}ExtraSmall`]);
                    break;
                }
                case 2: {
                    classNames.push(styles[`divider${breakpoint.name}Small`]);
                    break;
                }
                case 3: {
                    classNames.push(styles[`divider${breakpoint.name}Medium`]);
                    break;
                }
                case 4: {
                    classNames.push(styles[`divider${breakpoint.name}Large`]);
                    break;
                }
                case 5: {
                    classNames.push(styles[`divider${breakpoint.name}ExtraLarge`]);
                    break;
                }
            }
        });

        return classNames.join(' ');
    };

    return <div className={`${styles.divider} ${renderClassNames()}`}>{children}</div>;
};

export {GridProps, Grid, RowProps, Row, ColProps, Col, DividerProps, Divider};
