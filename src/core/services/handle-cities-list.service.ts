
import {testProxies} from '../config';
import {loadCities} from '../store';
import {getCities, http} from './api-requests.service';


interface IProxyData {
  isAvailable: boolean;
  host: string;
  country: string;
  city: string;
}

export const Cities = {
  init: () => http(getCities, (proxies: IProxyData[]) => {
    loadCities(proxies.filter(proxy => !proxy.isAvailable)
      .map(proxy => ({id: proxy.host, text: `${proxy.country}, ${proxy.city}`}))
      .concat(testProxies))
  }),
};
