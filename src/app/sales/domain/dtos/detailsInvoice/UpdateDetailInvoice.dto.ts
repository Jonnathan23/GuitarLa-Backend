

export class UpdateDetailInvoiceDto {
    private constructor(
        public readonly det_price?: number,
        public readonly det_quantity?: number,
        public readonly det_subTotal?: number,
    ) { }

    get values() {
        const returnObj: { [key: string]: any } = {};

        if (this.det_price) returnObj.det_price = this.det_price;
        if (this.det_quantity) returnObj.det_quantity = this.det_quantity;
        if (this.det_subTotal) returnObj.det_subTotal = this.det_subTotal;

        return returnObj;
    }

    static create(object: { [key: string]: any }): [string?, UpdateDetailInvoiceDto?] {
        const { det_price, det_quantity, det_subTotal } = object;

        if (!det_price && !det_quantity && !det_subTotal) {
            return ["Al menos una propiedad debe ser proporcionada para actualizar"];
        }

        if (det_price !== undefined && det_price <= 0) {
            return ["El precio del detalle debe ser mayor a 0"];
        }

        if (det_quantity !== undefined && det_quantity <= 0) {
            return ["La cantidad del detalle debe ser mayor a 0"];
        }

        if (det_subTotal !== undefined && det_subTotal <= 0) {
            return ["El subtotal del detalle debe ser mayor a 0"];
        }

        return ["", new UpdateDetailInvoiceDto(det_price, det_quantity, det_subTotal)];
    }
}