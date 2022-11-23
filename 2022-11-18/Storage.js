export const getLocalStorage = (key) => {
    const data = localStorage.getItem(key);
    return JSON.parse(data);
};

export const setLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
}
