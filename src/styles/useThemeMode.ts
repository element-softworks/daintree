import { useEffect, useState } from 'react';

const useThemeMode: () => [string, () => void, boolean] = () => {
	const [themeMode, setThemeMode] = useState('light');
	const [mountedComponent, setMountedComponent] = useState(false);

	const setMode = (mode: string) => {
		window?.localStorage?.setItem('theme', mode);
		setThemeMode(mode);
	};

	const themeToggler = () => {
		themeMode === 'light' ? setMode('dark') : setMode('light');
	};

	useEffect(() => {
		const localTheme = window?.localStorage?.getItem('theme');
		localTheme && setThemeMode(localTheme);
		setMountedComponent(true);
	}, []);

	return [themeMode, themeToggler, mountedComponent];
};

export default useThemeMode;
