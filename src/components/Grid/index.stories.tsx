import React, { Fragment } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

// @ts-ignore
import { Grid, Row, Col, Divider } from '@components/Grid';
import { GridProps } from './index';

export default {
	title: 'Skipper My Boat/Grid',
	component: Grid,
};

const TextExample = () => (
	<Fragment>
		<h1 className="show-xs">100%</h1>
		<h1 className="show-sm">50%</h1>
		<h1 className="show-md">33.3%</h1>
		<h1 className="show-lg">25%</h1>
		<h1 className="show-xl">16.6%</h1>
	</Fragment>
);

const AllBreakpointsColumns: Story<GridProps> = () => (
	<div className={'example'}>
		<Grid>
			<Row>
				<Col>
					{`Displaying `}
					<span className="show-xs">XS 0</span>
					<span className="show-sm">SM 576</span>
					<span className="show-md">MD 768</span>
					<span className="show-lg">LG 992</span>
					<span className="show-xl">XL 1200</span>
					px and above
				</Col>
			</Row>

			<Divider />
			<Row>
				<Col xs={12} sm={6} md={4} lg={3} xl={2}>
					<TextExample />
				</Col>
				<Col xs={12} sm={6} md={4} lg={3} xl={2}>
					<TextExample />
				</Col>
				<Col xs={12} sm={6} md={4} lg={3} xl={2}>
					<TextExample />
				</Col>
				<Col xs={12} sm={6} md={4} lg={3} xl={2}>
					<TextExample />
				</Col>
				<Col xs={12} sm={6} md={4} lg={3} xl={2}>
					<TextExample />
				</Col>
				<Col xs={12} sm={6} md={4} lg={3} xl={2}>
					<TextExample />
				</Col>
			</Row>

			<Divider />
			<Row between="xs">
				<Col md={4}>
					<h1>1/3</h1>
				</Col>
				<Col md={4}>
					<h1>1/3</h1>
				</Col>
			</Row>

			<Divider />
			<Row between="xs">
				<Col md={4}>
					<h1>1/3</h1>
				</Col>
				<Col md={4}>
					<h1>1/3</h1>
				</Col>
				<Col md={4}>
					<h1>1/3</h1>
				</Col>
				<Col>
					<h1>Auto</h1>
				</Col>
			</Row>
		</Grid>
	</div>
);
export const GridSystem = AllBreakpointsColumns.bind({});

GridSystem.args = {
	// primary: true,
	// children: object
	noMargin: 'string',
	noPadding: 'string',
	fullHeight: 'string',
	className: 'string',
};

export const NestedGrid = () => (
	<div className={'example'}>
		<Grid>
			<Row>
				<Col xs={12}>
					{`Displaying `}
					<span className="show-xs">XS 0</span>
					<span className="show-sm">SM 576</span>
					<span className="show-md">MD 768</span>
					<span className="show-lg">LG 992</span>
					<span className="show-xl">XL 1200</span>
					px and above
				</Col>
			</Row>

			<Divider />
			<Row>
				<Col xs={6}>
					<h1>1/2</h1>
				</Col>
				<Col xs={6}>
					<h1>1/2</h1>
					<Divider />
					<Row>
						<Col xs={4}>
							<h1>1/3</h1>
						</Col>
						<Col xs={4}>
							<h1>1/3</h1>
						</Col>
						<Col xs={4}>
							<h1>1/3</h1>
						</Col>
					</Row>
				</Col>
			</Row>
		</Grid>
	</div>
);

export const ManyItemsWithDivider = () => (
	<div className={'example'}>
		<Grid>
			<Row>
				<Col xs={4}>
					<h1>1/3</h1>
				</Col>
			</Row>

			<Divider />
			<Row>
				<Col xs={4}>
					<h1>1/3</h1>
				</Col>
				<Col xs={4}>
					<h1>1/3</h1>
				</Col>
			</Row>
		</Grid>
	</div>
);

//
// export const Secondary = Template.bind({});
// Secondary.args = {
//     label: 'Grid',
//     text: 'Secona',
// };
//
// export const Large = Template.bind({});
// Large.args = {
//     label: 'Grid',
//     text: 'large',
//     // large: true,
// };
//
// export const Small = Template.bind({});
// Small.args = {
//     label: 'Grid',
//     // small: true,
// };
