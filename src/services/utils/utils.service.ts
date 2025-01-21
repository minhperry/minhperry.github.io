import {isPlatformBrowser, isPlatformServer} from "@angular/common";
import {Inject, Injectable, PLATFORM_ID} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class Utils {
  constructor(@Inject(PLATFORM_ID) private plat: object) {}

  public doIfBrowser(callbackFn: () => void): void {
    if (isPlatformBrowser(this.plat)) callbackFn();
  }

  public doIfServer(callbackFn: () => void): void {
    if (isPlatformServer(this.plat)) callbackFn();
  }
}