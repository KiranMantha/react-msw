const envVariables = {
  ...((window.__RUNTIME_CONFIG__ || { ...process.env }) as object),
};
export const env: Record<string, string> = { ...envVariables };
