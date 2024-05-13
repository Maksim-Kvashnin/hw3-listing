export type ItemObj = {
    state: string,
    listing_id: number,
    id: string,
    url: string,
    MainImage: {
        url_570xN?: string | undefined,
    } | undefined,
    title: string,
    currency_code: string,
    price: string,
    quantity: number,  
}