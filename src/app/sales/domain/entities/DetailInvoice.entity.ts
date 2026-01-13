

export class DetailInvoiceEntity {
    constructor(
        public atributes: {
            det_createdAt: string,
            det_updatedAt: string
        },
        public readonly det_id: string,
        public readonly det_price: number,
        public readonly det_quantity: number,
        public readonly det_subTotal: number,
    ) { }
}