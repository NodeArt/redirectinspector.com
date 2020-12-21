import type { IProxyData } from '../services/handle-cities-list.service';

export const emptyProxy: IProxyData = {
  isAvailable: true,
  host: '0.0.0.0',
  country: 'Unknown',
  city: 'Unknown'
};
