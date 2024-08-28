/**
 * @file global-hook.d.ts
 * @description Global hook types.
 */

export type GlobalHook = {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
    deviceType: {
        deviceType: string;
        deviceWidth: number;
        deviceHeight: number;
    };
    setAllowScrolling: React.Dispatch<React.SetStateAction<boolean>>;
};
