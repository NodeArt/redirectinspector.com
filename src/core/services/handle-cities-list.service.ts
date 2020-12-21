import { testProxies } from '../config';
import { loadCities } from '../store';
import { getCities, http } from './api-requests.service';

export interface IProxyData {
  isAvailable?: boolean;
  host?: string;
  country?: string;
  city?: string;
}

export const Cities = {
  init: async (): Promise<void> => {
    await http<IProxyData[]>({
      func: getCities,
      callback: (proxies: IProxyData[]) => {
        loadCities(proxies.filter(proxy => proxy.isAvailable)
          .concat(testProxies));
      }
    });
  },
  getIsSelectedCity: (selected: IProxyData, proxyData: IProxyData): boolean => {
    return selected.host === proxyData.host &&
           selected.country === proxyData.country &&
           selected.city === proxyData.city;
  }
};
