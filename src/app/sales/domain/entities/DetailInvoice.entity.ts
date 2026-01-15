

export class DetailInvoiceEntity {
    
    public det_createdAt?: string;
    public det_updatedAt?: string;
    
    constructor(
        attributes: {
            det_createdAt: string,
            det_updatedAt: string
        },
        public readonly det_id: string,
        public readonly det_price: number,
        public readonly det_quantity: number,
        public readonly det_subTotal: number,
    ) {
        this.det_createdAt = attributes.det_createdAt;
        this.det_updatedAt = attributes.det_updatedAt;
    }
}