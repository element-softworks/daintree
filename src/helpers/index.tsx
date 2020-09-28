// capitalised the first letter of a sentence, useful for Formik form errors
export const capitalise = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
export const camelCase = (str) => str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
export const pascalCase = (str) => str.replace(/(^\w|-\w)/g, (g) => g.replace(/-/, '').toUpperCase());
