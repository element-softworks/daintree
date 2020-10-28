import React from 'react';
import { Grid as ReactGrid } from 'react-flexbox-grid';

import styles from './styles.module.scss';

/**
 Daintree’s grid system uses a series of containers, rows, and columns to layout and align content. It’s built with [flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) and is fully responsive. Below is an example and an in-depth look at how the grid comes together.
 New to or unfamiliar with flexbox? Read this [CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background) flexbox guide for background, terminology, guidelines, and code snippets.

 ---

 ### Grid

 A `<Grid/>` component is a container sets a width of 1260px (on XL) devices, and is 100% max-width throughout with even horizontal

 Our grid system is built on [react flexbox grid](https://github.com/roylee0704/react-flexbox-grid). It uses a **12 column** layout system

 Add prop `fluid` to remove fixed width

 ### Row

 Row creates a flex row between that allows wrapping of flex children (Cols), therefore allowing you to group columns
 together.

 Rows have gutters to allow correct spacing in Cols.

 #### Flex properties
 A row can be configured like any flex element to have special flex property alterations,
 these alterations can be configured responsively using the special breakpoint names:

  Using one of the flex property names below this list, you can enter the value as one of these breakpoint types
 declared below:
 - `xs` used on devices from 0px and above.
 - `sm` used on devices from 576px and above.
 - `md` used on devices from 768px and above.
 - `lg` used on devices from 992px and above.
 - `xl` used on devices from 1200px and above.

 - `between` \- adds `justify-content: space-between;`
 - `around` \- adds `justify-content: space-around;`
 - `start` \- adds `justify-content: flex-start;`
 - `center` \- adds `justify-content: center;`
 - `end` \- adds `justify-content: flex-end;`
 - `top` \- adds `align-items: flex-start;`
 - `middle` \- adds `align-items: center;`
 - `bottom` \- adds `align-items: flex-end;`
 - `stretch` \- adds `align-items: stretch;`

 Example:
 `<Row between="md" center="xs">...</Row>`

 ### No gutters
 Rows by default have gutters enabled, you can turn these off by setting the `gutters` prop to false.

 Example:
 `<Row gutters={false}>...</Row>

 A `<Row/>` component must only include `<Col/>` components. Children can then be placed inside of columns.

 ### Col

 Every Column must either have a declared number 1-12 as a reference to the 12-column grid system, or a boolean that will
 be set by default to share the space on the row (using flex-grow: 1), this means if you don't declare a number, or
 instead set a true boolean, the column will share the space in the row.

 Grid column widths:

 - 1 \- `8.3333333333%`
 - 2 \- `16.6666666667%`
 - 3 \- `25%`
 - 4 \- `33.3333333333%`
 - 5 \- `41.6666666667%`
 - 6 \- `50%`
 - 7 \- `58.3333333333%`
 - 8 \- `66.6666666667%`
 - 9 \- `75%`
 - 10 \- `83.3333333333%`
 - 11 \- `91.6666666667%`
 - 12 \- `100%`

 Pass a breakpoint type with a number 1-12 as a reference to the 12-column grid system
 - `xs` used on devices from 0px and above.
 - `sm` used on devices from 576px and above.
 - `md` used on devices from 768px and above.
 - `lg` used on devices from 992px and above.
 - `xl` used on devices from 1200px and above.

 `<Col/>` components must be placed inside of a `<Row/>` component.

 If you write multiple columns that total more than 100% width overall, then the overlapping columns will wrap onto a new row.

 #### Flex properties
 A row can be configured like any flex child element to have special flex property alterations,
 these alterations can be configured responsively using the special breakpoint names:

 Using one of the flex property names below this list, you can enter the value as one of these breakpoint types
 declared below:
 - `xs` used on devices from 0px and above.
 - `sm` used on devices from 576px and above.
 - `md` used on devices from 768px and above.
 - `lg` used on devices from 992px and above.
 - `xl` used on devices from 1200px and above.

 - `first` \- adds `order: -1;`
 - `last` \- adds `order: 1;`

 There is also a responsive shrink property that allows a column to ignore the growing behaviour and instead only
 take the width of its own children width, this is great use for pushing elements around such as aligning content
 to the right instead of using custom flex styling or floating.

 - `shrink` \- adds `flex: 0 1 auto`

 ### Divider

 Dividers manage spacing between rows and other content, it can be placed anywhere in the project and has fixed and
 responsive sizes.

 A divider supports 6 margin-bottom sizes:
 - `0` none
 - `1` extra small
 - `2` small
 - `3` medium (default)
 - `4` large
 - `5` extra large

 Dividers support either responsive or fixed variation, to use a fixed variation simply specify no props to use the
 default `3` margin spacing, or pass `margin` as a prop. To use responsive spacing you must prefix the prop with a
 breakpoint type such as `mdMargin`.

 Pass `margin` prefixed by a breakpoint type with a number 0-5 as a reference to the 6 margin sizes available
 - `xs` used on devices from 0px and above.
 - `sm` used on devices from 576px and above.
 - `md` used on devices from 768px and above.
 - `lg` used on devices from 992px and above.
 - `xl` used on devices from 1200px and above.

  Example:
 No margin in xs, small margin in sm, large margin in md
 `<Divider xsMargin={0} smMargin={2} mdMargin="4" />`

 Using margin 4
 `<Divider margin={4} />`

 Using default margin 3
 `<Divider />`

 */
const Grid: React.FC<GridProps> = ({ children, fluid, flush }) => (
	<div className={`${styles.grid} ${fluid ? styles.gridFluid : ''} ${flush ? styles.gridFlush : ''}`}>{children}</div>
);

type GridProps = {
	fluid?: boolean;
	flush?: boolean;
};

export { GridProps };
export default Grid;
