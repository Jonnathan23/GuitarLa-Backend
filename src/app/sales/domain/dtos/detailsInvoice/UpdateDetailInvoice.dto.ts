

export class UpdateDetailInvoiceDto {
    private constructor(
        public readonly det_price?: number,
        public readonly det_quantity?: number,
        public readonly det_subTotal?: number,
        public readonly det_inv_id?: string,
        public readonly det_guitar_id?: string,
    ) { }

    get values() {
        const returnObj: { [key: string]: any } = {};

        if (this.det_price) returnObj.det_price = this.det_price;
        if (this.det_quantity) returnObj.det_quantity = this.det_quantity;
        if (this.det_subTotal) returnObj.det_subTotal = this.det_subTotal;

        return returnObj;
    }

    static create(object: { [key: string]: any }): [string?, UpdateDetailInvoiceDto?] {
        const { det_price, det_quantity, det_subTotal, det_inv_id, det_guitar_id } = object;

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

        if (det_inv_id !== undefined && det_inv_id.length !== 36) {
            return ["El id de la factura debe tener 36 caracteres"];
        }

        if (det_guitar_id !== undefined && det_guitar_id.length !== 36) {
            return ["El id de la guitarra debe tener 36 caracteres"];
        }

        return ["", new UpdateDetailInvoiceDto(det_price, det_quantity, det_subTotal)];
    }
}