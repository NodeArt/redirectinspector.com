import { localStorageProp } from '../config';
import { localStorage } from '../services/storage-wrapping/local-storage.instance';
// @ts-ignore
import { IUserAgent } from '../store';
import { SafeJSON } from './safe-json';

export const getCustomUserAgents = () =>
  SafeJSON.parse(localStorage().getItem(localStorageProp), []) || [];

export const saveCustomUserAgents = (userAgent: IUserAgent) =>
  localStorage().setItem(
    localStorageProp,
    SafeJSON.stringify([...getCustomUserAgents(), userAgent])
  );

export const removeCustomUserAgent = (index: number) => {
  const customUA = getCustomUserAgents();
  customUA.splice(index, 1);
  localStorage().setItem(localStorageProp, SafeJSON.stringify(customUA));
};
