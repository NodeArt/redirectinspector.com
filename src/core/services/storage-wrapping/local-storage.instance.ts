import { LocalStorageService } from './local-storage.service';

let storage = null;

export function localStorage (): LocalStorageService {
  storage = storage === null ? new LocalStorageService() : storage;
  return storage;
}
