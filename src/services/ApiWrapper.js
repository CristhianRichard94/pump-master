import httpService from './HttpService';

export async function apiCall(fn, ...args) {
  try {
    return await fn(...args, httpService.getAuthToken());
  } catch (err) {
    if (err.message === 'Unauthorized') {

      const refreshToken = httpService.getRefreshToken();
      const { token } = await httpService.refreshAuthToken(refreshToken);

      return await fn(...args, token);
    }
    throw err;
  }
}