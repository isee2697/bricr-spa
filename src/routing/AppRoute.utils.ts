export const joinUrlParams = (baseUrl: string, params: Record<string, string>): string => {
  return Object.keys(params).reduce((url, paramKey) => {
    return url.replace(`:${paramKey}`, params[paramKey]);
  }, baseUrl);
};
