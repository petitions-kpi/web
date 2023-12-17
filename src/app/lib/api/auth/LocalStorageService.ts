export const setToken = (key: string, value: string) => {
    localStorage.setItem(key, value);
};

export const getToken = (key: string) => {
    if (typeof window !== 'undefined') {
        return window.localStorage.getItem(key);
    }
    return null;
}
