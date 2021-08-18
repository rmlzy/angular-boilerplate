import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class UtilService {
  constructor() {}

  getPathFromUrl(url: string): string {
    const idx = url.indexOf("?");
    if (idx === -1) {
      return url;
    }
    return url.substring(0, idx);
  }
}
