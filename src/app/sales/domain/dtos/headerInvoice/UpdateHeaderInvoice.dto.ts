

export class UpdateHeaderInvoiceDto {

    private constructor(
        public readonly inv_subTotal?: number,
        public readonly inv_total?: number,
        public readonly inv_client_name?: string,
        public readonly inv_client_email?: string,
        public readonly inv_client_phone?: string,
        public readonly inv_quantity_items?: number,
    ) {}

    get values() {
        const returnObj: { [key: string]: any } = {};

        if (this.inv_subTotal) returnObj.inv_subTotal = this.inv_subTotal;
        if (this.inv_total) returnObj.inv_total = this.inv_total;
        if (this.inv_client_name) returnObj.inv_client_name = this.inv_client_name;
        if (this.inv_client_email) returnObj.inv_client_email = this.inv_client_email;
        if (this.inv_client_phone) returnObj.inv_client_phone = this.inv_client_phone;
        if (this.inv_quantity_items) returnObj.inv_quantity_items = this.inv_quantity_items;

        return returnObj;
    }

    static create(object: { [key: string]: any }): [string?, UpdateHeaderInvoiceDto?] {

        const { inv_subTotal, inv_total, inv_client_name, inv_client_email, inv_client_phone, inv_quantity_items } = object;

        if (
            !inv_subTotal && !inv_total && !inv_client_name &&
            !inv_client_email && !inv_client_phone && !inv_quantity_items
        ) {
            return ["Al menos una propiedad debe ser proporcionada para actualizar"];
        }

        if (inv_subTotal !== undefined && inv_subTotal <= 0) {
            return ["El subtotal de la factura no puede ser negativo"];
        }

        if (inv_total !== undefined && inv_total <= 0) {
            return ["El total de la factura no puede ser negativo"];
        }

        if (inv_quantity_items !== undefined && inv_quantity_items <= 0) {
            return ["El numero de items no puede ser negativo"];
        }

        return [
            "",
            new UpdateHeaderInvoiceDto(inv_subTotal, inv_total, inv_client_name, inv_client_email, inv_client_phone, inv_quantity_items)
        ];
    }   
    
}