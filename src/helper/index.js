export const findPath = (data, findKey) => {
    let path = ''; 
    Object.keys(data).some(key => {
        if(key === findKey) {
            path = `${key}.category`;
            return key === findKey;
        };
        if(data[key].subCategory) {
            const subCategory = {...data[key].subCategory};
            Object.keys(subCategory).some(subKey => {
                if(subKey === findKey) {
                    path = `${key}.subCategory.${subKey}.category`;
                    return subKey === findKey;
                };
            });
        }
    });
    return path;
};

export const getDataByPath = (object, path) => path.split('.').reduce((p,c)=> p && p[c], object);