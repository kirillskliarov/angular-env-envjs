import { inject, InjectionToken } from "@angular/core";
import { Environment } from "../interfaces/environment";
import { GLOBAL_TOKEN } from "./global-token";

export const ENVIRONMENT_TOKEN = new InjectionToken<Environment>('ENVIRONMENT', {
  providedIn: 'root',
  factory: () => {
    const global: Window = inject<Window>(GLOBAL_TOKEN);
    return global.__env;
  },
});
