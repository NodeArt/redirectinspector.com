import { localStorageProp } from '../config';
import { emptyUA } from '../mocks';
import { localStorage } from '../services/storage-wrapping/local-storage.instance';
import type { IUserAgent } from '../store';
import { SafeJSON } from './safe-json';

export const getCustomUserAgents = (): IUserAgent[] =>
  SafeJSON.parse<Array<IUserAgent>>(localStorage().getItem(localStorageProp), [emptyUA]) || [];

export const saveCustomUserAgents = (userAgent: IUserAgent): void =>
  localStorage().setItem(localStorageProp, SafeJSON.stringify([...getCustomUserAgents(), userAgent]));

export const removeCustomUserAgent = (index: number): void => {
  const customUA = getCustomUserAgents();
  customUA.splice(index, 1);
  localStorage().setItem(localStorageProp, SafeJSON.stringify(customUA));
};
