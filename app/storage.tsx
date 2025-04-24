'use client';

export const STORAGE_KEYS = {
  VISITED_LINKS: 'visited_links',
  THEME: 'theme_preference',
  LAST_SECTION: 'last_section'
};

class Storage {
  static isAvailable(): boolean {
    try {
      const testKey = '__test__';
      localStorage.setItem(testKey, testKey);
      localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  }

  static set(key: string, value: any): void {
    if (!this.isAvailable()) return;
    
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
      
      // Dispatch storage event for cross-tab communication
      window.dispatchEvent(new StorageEvent('storage', {
        key: key,
        newValue: serializedValue
      }));
    } catch (error) {
      console.error('Error setting storage:', error);
    }
  }

  static get(key: string): any {
    if (!this.isAvailable()) return null;
    
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error('Error getting storage:', error);
      return null;
    }
  }

  static remove(key: string): void {
    if (!this.isAvailable()) return;
    
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing storage:', error);
    }
  }

  static clear(): void {
    if (!this.isAvailable()) return;
    
    try {
      localStorage.clear();
    } catch (error) {
      console.error('Error clearing storage:', error);
    }
  }
}

export default Storage;