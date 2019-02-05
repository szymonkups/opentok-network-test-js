export declare type Browser = 'Chrome' | 'Firefox' | 'not a browser' | 'unsupported browser' | 'WebKit browser without WebRTC support' | 'Safari' | 'Internet Explorer' | 'Edge';
export default function isSupportedBrowser(): {
    supported: boolean;
    browser: Browser;
};
