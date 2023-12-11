declare module globalThis {
  //   var mswServer: SetupServer;
  interface Window {
    __RUNTIME_CONFIG__: Record<string, string>;
  }
}
