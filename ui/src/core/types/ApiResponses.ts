export interface AddProductsResponse {
  removedCount?: number;
  addedCount?: number;
  fileName?: string | undefined;
}

export interface ProductModel {
  providerCode?: string | undefined;
  barcode?: string | undefined;
  name?: string | undefined;
  description?: string | undefined;
  brandName?: string | undefined;
  retailPrice?: number | undefined;
}
