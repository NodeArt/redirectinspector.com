import {LocalStorageService} from './local-storage.service';

let storage = null;

export function localStorage() {
  return storage === null ? storage = new LocalStorageService() : storage;

}
