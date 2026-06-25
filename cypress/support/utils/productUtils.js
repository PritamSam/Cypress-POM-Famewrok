export const getLowestProduct = (products) =>
    products.reduce((prev, curr) =>
        curr.price < prev.price ? curr : prev
    );

export const getHighestProduct = (products) =>
    products.reduce((prev, curr) =>
        curr.price > prev.price ? curr : prev
    );