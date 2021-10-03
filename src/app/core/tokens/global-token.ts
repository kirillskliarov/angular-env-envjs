import { InjectionToken } from "@angular/core";
import { Environment } from "../interfaces/environment";

declare global {
  interface Window {
    __env: Environment;
  }
}

export const GLOBAL_TOKEN = new InjectionToken<Window>('GLOBAL', {
  providedIn: 'root',
  factory: () => window,
});
