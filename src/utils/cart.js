// ids repeat across categories and one product can be in the cart in several sizes
export const getCartKey = (item) => `${item.id}-${item.name}-${item.size ?? ""}`;
