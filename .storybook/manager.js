import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';
import testTheme from './testTheme';

// this file is used to style story book itself, nothing to do with components you are making
addons.setConfig({
	// theme: testTheme,
	theme: themes.light,
});
