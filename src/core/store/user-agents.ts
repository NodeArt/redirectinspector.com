import { writable } from 'svelte/store';
import { emptyUA } from '../mocks/get-user-agent.mock';

export type IUserAgent = {
  ua: string;
  name: string;
}

export const userAgents = writable([emptyUA]);

export const loadUserAgents = (_userAgents: IUserAgent[]): void => userAgents.update(() => _userAgents);
export const addUserAgent = (userAgent: IUserAgent): void => userAgents.update((state: IUserAgent[]) => [...state, userAgent]);

export const selectedUA = writable(emptyUA);

export const changeSelectedUA = (newUa: IUserAgent): void => selectedUA.update(() => newUa);
