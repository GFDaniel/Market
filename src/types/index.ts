export interface IProductsData {
    item: [IProductData];
}

export interface IProductData {
    icon: string;
    companyName: string;
    titlePrice: string;
    savePrace: string;
    description: string;
    endorsedBy: string;
    seller: string;
}

export interface ISellerData {
    id: Number;
    name: string;
}

export interface IMarketNavBar {
    sellers: [ISellerData];
    sort: (arg0: any) => void;
    filterItemCompany: (arg0: any) => void;
    filterItemSeller: (arg0: any) => void;
    clearFilter: () => void;
}