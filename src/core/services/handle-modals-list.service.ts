import { transformActivateField } from '../helpers/modals.helper';
import { IModal, loadModalList, updateModalStatus } from '../store';

export const Modals = {
  init: (modalWindows: IModal): void => loadModalList(modalWindows),
  open: (modal: string): void => updateModalStatus(transformActivateField(modal, true)),
  close: (modal: string): void => updateModalStatus(transformActivateField(modal, false)),
};
