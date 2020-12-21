import * as queryString from 'query-string';
import { emptyParams } from '../mocks/get-params.mock';
import type { IProxyData } from '../services/handle-cities-list.service';
import type { IUserAgent } from '../store';
import { SafeJSON } from './safe-json';

export interface IParams {
  city: IProxyData;
  urlAddress: string;
  userAgent: IUserAgent;
  tab: string;
}
export const getParsedParams = (): IParams => {
  const { params } = queryString.parse(window.location.search);
  return typeof params === 'string' ? SafeJSON.parse<IParams>(params, emptyParams) : emptyParams;
};
