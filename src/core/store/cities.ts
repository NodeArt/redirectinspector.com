import { writable } from 'svelte/store';
import { emptyProxy } from '../mocks';
import type { IProxyData } from '../services/handle-cities-list.service';

export const cities = writable([emptyProxy]);

export const loadCities = (_cities: IProxyData[]): void => cities.update(() => _cities);

export const selectedProxy = writable(emptyProxy);

export const changeSelectedProxy = (proxy: IProxyData): void => selectedProxy.update(() => proxy);
