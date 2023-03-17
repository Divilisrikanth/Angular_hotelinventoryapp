import { InjectionToken } from "@angular/core";

export const localStorageToken = new InjectionToken<any>('local storsge',{
    providedIn : 'root',
    factory() {
        return localStorage;
    },
});