import { userAgentsList } from '../config';
import type { IUserAgent } from '../store';
import { getCustomUserAgents, removeCustomUserAgent, saveCustomUserAgents } from './custom-user-agents.helper';

export const getUserAgents = (): IUserAgent[] => concatFromLocalStorage();

export const AddingUserAgentWrapper = (userAgent: IUserAgent): IUserAgent => {
  saveCustomUserAgents(userAgent);
  return userAgent;
};

export const RemovingUserAgentWrapper = (index: number): IUserAgent[] => {
  removeCustomUserAgent(index);
  return getUserAgents();
};

const concatFromLocalStorage = function (): IUserAgent[] {
  const customUserAgents = getCustomUserAgents();
  return [...userAgentsList, { ua: 'Custom', name: 'Custom' }, ...customUserAgents];
};
