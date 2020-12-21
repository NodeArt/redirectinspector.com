import { ICookie, updateCookies } from '../store/cookies';

export const Cookie = {
  update: (cookie: ICookie): void => updateCookies(cookie)
};
