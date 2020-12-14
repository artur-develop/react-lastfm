export const get = async url => {
    const data = await fetch(url);
    return await data.json();
};