// capitalised the first letter of a sentence, useful for Formik form errors
export const capitalise = (str: string) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
export const camelCase = (str: string) => str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
export const pascalCase = (str: string) => str.replace(/(^\w|-\w)/g, (g) => g.replace(/-/, '').toUpperCase());
