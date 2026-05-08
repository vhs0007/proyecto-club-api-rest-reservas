import { AsyncLocalStorage } from 'node:async_hooks';

type AuthStore = { token?: string };

const authStorage = new AsyncLocalStorage<AuthStore>();

export const runWithToken = (token: string | undefined, fn: () => void) =>
  authStorage.run({ token }, fn);

export const getToken = (): string | undefined =>
  authStorage.getStore()?.token;
