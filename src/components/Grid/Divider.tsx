import React from 'react';
import styles from './styles.module.scss';
import { capitalise } from '@helpers/index';

type DividerProps = {
	margin?: number;
	xsMargin?: number;
	smMargin?: number;
	mdMargin?: number;
	lgMargin?: number;
	xlMargin?: number;
	className?: object;
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
	const classNames = [
		{ name: 'xs', size: xsMargin },
		{ name: 'sm', size: smMargin },
		{ name: 'md', size: mdMargin },
		{ name: 'lg', size: lgMargin },
		{ name: 'xl', size: xlMargin },
	]
		.reduce(
			(acc: string[], { size, name }: { name: string; size?: number }) => [
				...acc,
				size === 0 ? `divider${name}None` : '',
				size === 1 ? `divider${name}ExtraSmall` : '',
				size === 2 ? `divider${name}Small` : '',
				size === 3 ? `divider${name}Medium` : '',
				size === 4 ? `divider${name}Large` : '',
				size === 5 ? `divider${name}ExtraLarge` : '',
			],
			[],
		)
		.concat([
			margin === 0 ? styles.dividerNone : '',
			margin === 1 ? styles.dividerExtraSmall : '',
			margin === 2 ? styles.dividerSmall : '',
			margin === 3 ? styles.dividerMedium : '',
			margin === 4 ? styles.dividerLarge : '',
			margin === 5 ? styles.dividerExtraLarge : '',
		])
		.join(' ');

	return <div className={`${styles.divider} ${classNames}`}>{children}</div>;
};

export { DividerProps };
export default Divider;
