import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {

  setItem<T>(key: string, value: T): void {
    if (typeof value === 'object') {
      localStorage.setItem(key, JSON.stringify(value)); // Serialize objects
    } else {
      localStorage.setItem(key, String(value)); // Store other types as strings
    }
  }

  getItem<T>(key: string): T | null {
    const rawValue = localStorage.getItem(key);
    if (!rawValue) {
      return null; // Return null if the key does not exist
    }

    try {
      // Attempt to parse JSON, if applicable
      return JSON.parse(rawValue) as T;
    } catch {
      // If parsing fails, return the raw value for primitive types
      return rawValue as unknown as T;
    }
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }
}
