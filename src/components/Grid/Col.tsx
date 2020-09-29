import React from 'react';
import { capitalise } from '@helpers';

import styles from './styles.module.scss';

type ColProps = {
	xs?: number | boolean;
	sm?: number | boolean;
	md?: number | boolean;
	lg?: number | boolean;
	xl?: number | boolean;
};

const Col: React.FC<ColProps> = ({ children, xs, sm, md, lg, xl }) => {
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
				// ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].reduce((acc: string[], size: number) => [
				// 	...acc,
				// 	styles[`col${capitalise(name)}`]
				// ], []),
			],
			[],
		)
		.join(' ');

	return <div className={`${styles.col} ${classNames}`}>{children}</div>;
};

export { ColProps };
export default Col;
