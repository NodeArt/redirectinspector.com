import {writable} from 'svelte/store';
import {IUserAgent, userAgents} from './user-agents';

export const cookies = writable({})

export interface ICookie {
  [key: string]: string;
}

export const updateCookies = (cookie: ICookie) => cookies.update(() => cookie);
