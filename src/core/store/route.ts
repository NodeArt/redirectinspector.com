import { writable } from 'svelte/store';
const getRoute = () => window?.location?.pathname || '/';
export const route = writable(getRoute());

export const updateRoute = (): void => route.update(() => getRoute());
