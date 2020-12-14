import { mainUrl } from '../config';

interface IPostBody {
  url: string;
  city: string;
  'user-agent': string;
}

export const http = async (func, callback) => {
  const fetchData = await func();
  return !!fetchData.statusCode ? [] : callback(fetchData);
};

export const getCities = async () => {
  return await fetch(`${mainUrl}/status`).then((r) => r.json());
};

export const getHistory = async (body: IPostBody) => {
  const formData = new FormData();
  formData.append('city', body.city);
  formData.append('url', body.url);
  formData.append('user-agent', body['user-agent']);

  const postData = await fetch(`${mainUrl}/history`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  }).then((r) => r.json());

  return postData;
};
