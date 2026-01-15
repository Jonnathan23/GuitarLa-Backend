
export class HeaderInvoiceEntity {

    public inv_createdAt?: string;
    public inv_updatedAt?: string;

    constructor(
        attributes: {
            inv_createdAt: string
            inv_updatedAt: string
        },
        public inv_id: string,
        public inv_subTotal: number,
        public inv_total: number,
        public inv_client_name: string,
        public inv_client_email: string,
        public inv_client_phone: string,
        public inv_quantity_items: number,

    ) {
        this.inv_createdAt = attributes.inv_createdAt;
        this.inv_updatedAt = attributes.inv_updatedAt;
    }

}