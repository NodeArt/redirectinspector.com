import { AddingUserAgentWrapper, getUserAgents, RemovingUserAgentWrapper } from '../helpers/user-agents.helper';
import { addUserAgent, loadUserAgents } from '../store';
import type { IUserAgent } from '../store';

export const UserAgents = {
  init: (): void => loadUserAgents(getUserAgents()),
  add: (userAgent: IUserAgent): void => addUserAgent(AddingUserAgentWrapper(userAgent)),
  remove: (index: number): void => loadUserAgents(RemovingUserAgentWrapper(index)),
};
