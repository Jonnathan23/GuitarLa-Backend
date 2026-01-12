
export class PatchHeaderInvoiceDto {
    constructor(
        public inv_subTotal: number,
        public inv_total: number,
        public inv_client_name: string,
        public inv_client_email: string,
        public inv_client_phone: string,
        public inv_quantity_items: number,

    ) { }

    static create(object: { [key: string]: any }): [string?, PatchHeaderInvoiceDto?] {

        const { inv_subTotal, inv_total, inv_client_name, inv_client_email, inv_client_phone, inv_quantity_items } = object;

        if (!inv_subTotal) return ["El subtotal de la factura es obligatorio"];
        if (!inv_total) return ["El total de la factura es obligatorio"];
        if (!inv_client_name) return ["El nombre del cliente es obligatorio"];
        if (!inv_client_email) return ["El email del cliente es obligatorio"];
        if (!inv_client_phone) return ["El telefono del cliente es obligatorio"];
        if (!inv_quantity_items) return ["El numero de items es obligatorio"];

        const headerInvoiceDto = new PatchHeaderInvoiceDto(
            inv_subTotal,
            inv_total,
            inv_client_name,
            inv_client_email,
            inv_client_phone,
            inv_quantity_items,
        )

        return ["", headerInvoiceDto];
    }

}