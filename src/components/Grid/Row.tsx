import React from 'react';
import { capitalise } from '@helpers';

import styles from './styles.module.scss';

type RowProps = {
	column?: string;
	row?: string;
	between?: string;
	around?: string;
	start?: string;
	center?: string;
	end?: string;
	top?: string;
	middle?: string;
	bottom?: string;
	gutters?: boolean;
	style?: object;
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
				between === b ? styles[`between${b === 'xs' ? '' : capitalise(b)}`] : '',
				around === b ? styles[`around${b === 'xs' ? '' : capitalise(b)}`] : '',
				start === b ? styles[`start${b === 'xs' ? '' : capitalise(b)}`] : '',
				center === b ? styles[`center${b === 'xs' ? '' : capitalise(b)}`] : '',
				end === b ? styles[`end${b === 'xs' ? '' : capitalise(b)}`] : '',
				top === b ? styles[`top${b === 'xs' ? '' : capitalise(b)}`] : '',
				middle === b ? styles[`middle${b === 'xs' ? '' : capitalise(b)}`] : '',
				bottom === b ? styles[`bottom${b === 'xs' ? '' : capitalise(b)}`] : '',
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
