import { createSelector } from "reselect";

//string to Id mapping

const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
}

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

//select to convert list of element into array an return the array element

export const selectCollectionForPreview = createSelector(
    [selectShopCollections],
    collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = collectionUrlParam =>
    createSelector(
        [selectShopCollections],
        collections => collections[collectionUrlParam]
    );

    // array fashion
// export const selectCollection = collectionUrlParam =>
//     createSelector(
//         [selectShopCollections],
//         collections => collections.find(
//             collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
//         )
//     );