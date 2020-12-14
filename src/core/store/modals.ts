// @ts-ignore
import { SvelteComponent } from 'svelte/internal';
import { writable } from 'svelte/store';
import { saveAfterUpdate } from '../helpers/modals.helper';

export interface IModal {
  [key: string]: { isActive: boolean; component: SvelteComponent };
}

export interface IActivateModal {
  name: string;
  isActive: boolean;
}

export const modals = writable({} as IModal);

export const loadModalList = (_modals) => modals.update(() => _modals);
export const updateModalStatus = (modal: IActivateModal) =>
  modals.update((state: IModal) => saveAfterUpdate(state, modal));
