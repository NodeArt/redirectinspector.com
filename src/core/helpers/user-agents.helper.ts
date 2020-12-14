import {userAgentsList} from '../config';
// @ts-ignore
import {IUserAgent} from '../store';
import {getCustomUserAgents, removeCustomUserAgent, saveCustomUserAgents} from './custom-user-agents.helper';

export const getUserAgents = () => userAgentsList.concatFromLocalStorage();

export const AddingUserAgentWrapper = (userAgent: IUserAgent) => {
  saveCustomUserAgents(userAgent);
  return userAgent;
};

export const RemovingUserAgentWrapper = (index: number) => {
  removeCustomUserAgent(index);
  return getUserAgents();
};

declare global {
  interface Array<T> {
    concatFromLocalStorage(): Array<T>;
  }
}

Array.prototype.concatFromLocalStorage = function () {
  const customUserAgents = getCustomUserAgents();
  return [...this, {ua: 'Custom', name: 'Custom'}, ...customUserAgents];
}
