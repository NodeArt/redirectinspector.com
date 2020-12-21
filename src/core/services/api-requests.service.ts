import { mainUrl } from '../config';
import type { ICookie } from '../store';
import type { IProxyData } from './handle-cities-list.service';

interface IPostBody {
  url: string;
  city: string;
  'user-agent': string;
}

interface IResponseHistory {
  url: string;
  cookie: ICookie | null;
}

export type IResponseBody = {
  history: IResponseHistory[];
  error: string | null;
  redirectCounter: number;
  globalLoopCounter: number;
}

export interface IResponseError {
  error: string;
  history: string[];
}

interface HttpParams<T> {
  func: () => Promise<T | string>;
  callback: (data: T) => (void | [] | T);
}

export const http = async <T>({ func, callback }: HttpParams<T>): Promise<void | [] | T> => {
  const fetchData = await func();
  console.log(fetchData);
  return typeof fetchData !== 'string' ? callback(fetchData) : [];
};

export const getCities = async (): Promise<IProxyData[] | string> => {
  return await fetch(`${mainUrl}/status`)
    .then(r => r.json())
    .catch(e => e);
};

export const getHistory = async (body: IPostBody): Promise<IResponseBody |IResponseError > => {
  const formData = new FormData();
  formData.append('city', body.city);
  formData.append('url', body.url);
  formData.append('user-agent', body['user-agent']);

  return await fetch(`${mainUrl}/history`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  }).then(r => r.json()).catch(() => ({ error: 'error', history: [] }));
};
