import HttpService from './HttpService';

export async function apiCall(fn, ...args) {
  try {
    return await fn(...args, HttpService.getAuthToken());
  } catch (err) {
    if (err.message === 'Unauthorized') {

      const refreshToken = HttpService.getRefreshToken();
      const { token } = await HttpService.refreshAuthToken(refreshToken);

      return await fn(...args, token);
    }
    throw err;
  }
}