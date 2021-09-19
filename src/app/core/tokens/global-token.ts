import { InjectionToken } from "@angular/core";

export const GLOBAL_TOKEN = new InjectionToken<Window>('GLOBAL', {
  providedIn: 'root',
  factory: () => window,
});
