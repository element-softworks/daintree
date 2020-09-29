import React from 'react';
import { capitalise } from '@helpers';

import styles from './styles.module.scss';

type RowProps = {
	column: string;
	row: string;
	between: string;
	around: string;
	start: string;
	center: string;
	end: string;
	top: string;
	middle: string;
	bottom: string;
	gutters: boolean;
	style: object;
};

const Row: React.FC<RowProps> = ({
	children,
	column,
	row,
	between,
	around,
	start,
	center,
	end,
	top,
	middle,
	bottom,
	gutters = true,
	style,
}) => {
	const classNames = ['xs', 'sm', 'md', 'lg', 'xl']
		.reduce(
			(acc: string[], b: string) => [
				...acc,
				row === b ? styles[`rowDirectionRow${b === 'xs' ? '' : capitalise(b)}`] : '',
				column === b ? styles[`rowDirectionColumn${b === 'xs' ? '' : capitalise(b)}`] : '',
				between === b ? styles[`rowBetween${b === 'xs' ? '' : capitalise(b)}`] : '',
				around === b ? styles[`rowAround${b === 'xs' ? '' : capitalise(b)}`] : '',
				start === b ? styles[`rowStart${b === 'xs' ? '' : capitalise(b)}`] : '',
				center === b ? styles[`rowCenter${b === 'xs' ? '' : capitalise(b)}`] : '',
				end === b ? styles[`rowEnd${b === 'xs' ? '' : capitalise(b)}`] : '',
				top === b ? styles[`rowTop${b === 'xs' ? '' : capitalise(b)}`] : '',
				middle === b ? styles[`rowMiddle${b === 'xs' ? '' : capitalise(b)}`] : '',
				bottom === b ? styles[`rowBottom${b === 'xs' ? '' : capitalise(b)}`] : '',
			],
			[],
		)
		.join(' ');

	return (
		<div style={style} className={`${styles.row} ${!gutters ? styles.rowNoGutters : ''} ${classNames}`}>
			{children}
		</div>
	);
};

export { RowProps };
export default Row;
