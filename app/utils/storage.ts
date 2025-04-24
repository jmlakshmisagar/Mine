export const StorageUtil = {
    setItem: (key: string, value: any): boolean => {
        try {
            if (typeof window !== 'undefined') {
                localStorage.setItem(key, JSON.stringify(value));
                return true;
            }
            return false;
        } catch (e) {
            console.error('Storage error:', e);
            return false;
        }
    },

    getItem: (key: string): any => {
        try {
            if (typeof window !== 'undefined') {
                const item = localStorage.getItem(key);
                return item ? JSON.parse(item) : null;
            }
            return null;
        } catch (e) {
            console.error('Storage error:', e);
            return null;
        }
    },

    removeItem: (key: string): boolean => {
        try {
            if (typeof window !== 'undefined') {
                localStorage.removeItem(key);
                return true;
            }
            return false;
        } catch (e) {
            console.error('Storage error:', e);
            return false;
        }
    }
}