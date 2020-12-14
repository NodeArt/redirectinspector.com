import { transformActivateField } from '../helpers/modals.helper';
import { loadModalList, updateModalStatus } from '../store';

export const Modals = {
  init: (modalWindows) => loadModalList(modalWindows),
  open: (modal: string) =>
    updateModalStatus(transformActivateField(modal, true)),
  close: (modal: string) =>
    updateModalStatus(transformActivateField(modal, false)),
};
