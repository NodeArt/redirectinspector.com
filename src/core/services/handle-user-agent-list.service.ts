import {AddingUserAgentWrapper, getUserAgents, RemovingUserAgentWrapper} from '../helpers/user-agents.helper';
import {addUserAgent, IUserAgent, loadUserAgents} from '../store';



export const UserAgents = {
  init: () => loadUserAgents(getUserAgents()),
  add: (userAgent: IUserAgent) => addUserAgent(AddingUserAgentWrapper(userAgent)),
  remove: (index: number) =>loadUserAgents(RemovingUserAgentWrapper(index)),
};
