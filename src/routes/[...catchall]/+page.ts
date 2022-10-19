import type { PageLoad } from "./$types";

export const load: PageLoad = ({ params, url }) => {
  if (url.search) {
    return {
      param: url.searchParams
    };
  }

  return {
    param: params.catchall
  }
};