import {writable} from 'svelte/store';

export interface ICity {
  id: string;
  text: string;
}

export const cities = writable([] as ICity[]);

export const loadCities = (_cities) => cities.update(() => _cities);
