
export class PatchDetailInvoiceDto {
    private constructor(
        public readonly det_price: number,
        public readonly det_quantity: number,
        public readonly det_subTotal: number,

        //FK
        public readonly inv_id: string,
        public readonly pro_id: string,
        
    ) {}    

    static create(object: { [key: string]: any }): [string?, PatchDetailInvoiceDto?] {
        const { det_price, det_quantity, det_subTotal, inv_id, pro_id } = object;

        if (!det_price) return ["El precio del detalle es obligatorio"];
        if (!det_quantity) return ["La cantidad del detalle es obligatoria"];
        if (!det_subTotal) return ["El subtotal del detalle es obligatorio"];

        if (det_price <= 0) return ["El precio del detalle debe ser mayor a 0"];
        if (det_quantity <= 0) return ["La cantidad del detalle debe ser mayor a 0"];
        if (det_subTotal <= 0) return ["El subtotal del detalle debe ser mayor a 0"];

        if (!inv_id) return ["El id de la factura es obligatorio"];

        
        if (!pro_id) return ["El id del producto es obligatorio"];

        return ["", new PatchDetailInvoiceDto(det_price, det_quantity, det_subTotal, inv_id, pro_id)];
    }
    
}