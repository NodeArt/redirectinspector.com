import type { IModal } from '../store';
import { Cities } from './handle-cities-list.service';
import { Modals } from './handle-modals-list.service';
import { UserAgents } from './handle-user-agent-list.service';

const initPrepare = {
  'init cities': () => Cities.init(),
  'init userAgents': () => UserAgents.init(),
};

export const initModals = (modalWindows: IModal): void => Modals.init(modalWindows);

export const initApplication = (): void => {
  Object.keys(initPrepare).forEach(module => initPrepare[module]());
};
