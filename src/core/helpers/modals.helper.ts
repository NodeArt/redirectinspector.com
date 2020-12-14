// @ts-ignore
import {IActivateModal, IModal} from '../store';


export const saveAfterUpdate = (state: IModal, modal: IActivateModal) =>
  ({...state, [modal.name]: {...state[modal.name], isActive: modal.isActive}});

export const transformActivateField = (name: string, isActive: boolean): IActivateModal => ({name, isActive});
