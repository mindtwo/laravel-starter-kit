declare global {
  interface Window {
    COOKIE_CONSENT_ENABLED: boolean | undefined;
    COOKIE_DOMAINS: string[] | undefined;
    CONSENT_DOMAIN: string | undefined;
    GTM_ID: string;
  }
}

export type ExtractFnReturnType<FnType extends (...args: any) => any> = Awaited<ReturnType<FnType>>;
