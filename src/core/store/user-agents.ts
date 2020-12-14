import {writable} from 'svelte/store';

export interface IUserAgent {
  ua: string;
  name: string;
}

export const userAgents = writable([] as IUserAgent[]);

export const loadUserAgents = (_userAgents: IUserAgent[]) => userAgents.update(() => _userAgents);
export const addUserAgent = (userAgent: IUserAgent) => userAgents.update((state: IUserAgent[]) => [...state, userAgent]);

export const selectedUA = writable('');

export const changeSelectedUA = (new_ua: string) => selectedUA.update(() => new_ua);
