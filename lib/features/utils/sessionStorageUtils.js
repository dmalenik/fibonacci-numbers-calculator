const updateItemToSessionStorage = (key, value) => {
    if (sessionStorage.getItem(key)) {
        sessionStorage.removeItem(key);
    }

    sessionStorage.setItem(key, value);
};

export default updateItemToSessionStorage;