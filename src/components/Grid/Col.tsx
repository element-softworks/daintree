import React from 'react';
import { capitalise } from '@helpers';

import styles from './styles.module.scss';

type ColProps = {
	xs?: number | boolean;
	sm?: number | boolean;
	md?: number | boolean;
	lg?: number | boolean;
	xl?: number | boolean;
	first?: string;
	last?: string;
	shrink?: string;
	style?: object;
};

const Col: React.FC<ColProps> = ({ children, xs, sm, md, lg, xl, first, last, shrink, style }) => {
	const classNames = [
		{ name: 'xs', size: xs },
		{ name: 'sm', size: sm },
		{ name: 'md', size: md },
		{ name: 'lg', size: lg },
		{ name: 'xl', size: xl },
	]
		.reduce(
			(acc: string[], { size, name }: { name: string; size?: number | boolean }) => [
				...acc,
				typeof size === 'number' && size >= 1 && size <= 12
					? name === 'xs'
						? styles[`col${size}`]
						: styles[`col${capitalise(name)}${size}`]
					: typeof size === 'boolean' && name !== 'xs'
					? styles[`col${capitalise(name)}`]
					: '',
				first === name ? (first === 'xs' ? styles.colFirst : styles[`colFirst${capitalise(name)}`]) : '',
				last === name ? (last === 'xs' ? styles.colLast : styles[`colLast${capitalise(name)}`]) : '',
				shrink === name ? (shrink === 'xs' ? styles.colShrink : styles[`colShrink${capitalise(name)}`]) : '',
			],
			[],
		)
		.join(' ');

	return (
		<div className={`${styles.col} ${classNames}`} style={style}>
			{children}
		</div>
	);
};

export { ColProps };
export default Col;
