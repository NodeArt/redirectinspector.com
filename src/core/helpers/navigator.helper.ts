import { updateRoute } from '../store/route';

export const goTo = (route: string, options = { replace: false }): void => {
  navigate(route, options);
  updateRoute();
};

function navigate (to, { replace = false } = {}) {
  const state = { key: Date.now() + '' };
  // try...catch iOS Safari limits to 100 pushState calls
  try {
    if (replace) {
      window?.history?.replaceState(state, null, to);
    } else {
      window?.history?.pushState(state, null, to);
    }
  } catch (e) {
    window?.location?.[replace ? 'replace' : 'assign'](to);
  }
}
