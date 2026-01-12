
export class HeaderInvoiceEntity {
    constructor(
        public atributes: {
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

    ) { }


}