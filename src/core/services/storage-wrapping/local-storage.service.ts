import type { LocalStorage } from '../../helpers/storageWrapper/local-storage';
import { MemoryStorage } from '../../helpers/storageWrapper/memory-storage';
import { storageAvailable } from './storage-available';

export class LocalStorageService implements LocalStorage {
  private readonly storage: Storage;

  constructor () {
    if (storageAvailable('localStorage')) {
      this.storage = window.localStorage;
    } else if (storageAvailable('sessionStorage')) {
      this.storage = window.sessionStorage;
    } else {
      this.storage = new MemoryStorage();
    }
  }

  get length (): number {
    return this.storage.length;
  }

  clear (): void {
    this.storage.clear();
  }

  getItem (key: string): string | null {
    return this.storage.getItem(key);
  }

  key (index: number): string | null {
    return this.storage.key(index);
  }

  removeItem (key: string): void {
    this.storage.removeItem(key);
  }

  setItem (key: string, value: string): void {
    this.storage.setItem(key, value);
  }
}
