import type { IParams } from '../helpers/get-params-parse.helper';
import { emptyUA } from './get-user-agent.mock';

export const emptyParams: IParams = {
  city: {},
  urlAddress: '',
  userAgent: emptyUA,
  tab: '0'
};
