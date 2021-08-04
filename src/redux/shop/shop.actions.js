import ShopActionTpes from "./shop.types";

export const updateCollections = (collectionMap) => ({
    type: ShopActionTpes.UPDATE_COLLECTIONS,
    payload: collectionMap
});