import React from 'react';
import { addons, types } from '@storybook/addons';
import { AddonPanel } from '@storybook/components';
import { useGlobals } from '@storybook/api';

const ADDON_ID = 'myaddon';
const PANEL_ID = `${ADDON_ID}/panel`;

// give a unique name for the panel
const MyPanel = () => {
	return <div>Just imagine what could go here</div>
}
addons.register(ADDON_ID, (api) => {
	addons.add(PANEL_ID, {
		type: types.PANEL,
		title: `Luke's Add-on`,
		render: ({ active, key }) => (
			<AddonPanel active={active} key={key}>
				<MyPanel />
			</AddonPanel>
		),
	});
});

// // your-addon-register-file.js
//
// import { AddonPanel, Placeholder, Separator, Source, Spaced, Title } from '@storybook/components';
//
// const ThemePanel = props => {
// 	const [{ theme: themeName }] = useGlobals();
// 	const theme = getTheme(themeName);
//
// 	return (
// 		<AddonPanel {...props}>
// 			{theme ? (
// 				<Spaced row={3} outer={1}>
// 					<Title>{theme.name}</Title>
// 					<p>The full theme object/p>
// 						<Source code={JSON.stringify(theme, null, 2)} language="js" copyable padded showLineNumbers/>
// 					</p>
// 				</Spaced>
// 			) : (<Placeholder>No theme selected</Placeholder>)}
// 		</AddonPanel>
// 	);
// };
