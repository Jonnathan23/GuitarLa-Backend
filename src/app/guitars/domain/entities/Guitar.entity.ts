

export class GuitarEntity {

    public gui_createdAt?: string;
    public gui_updatedAt?: string;

    constructor(
        attributes: {
            gui_createdAt?: string;
            gui_updatedAt?: string;
        },
        public gui_id: string,
        public gui_name: string,
        public gui_price: number,
        public gui_description: string,
        public gui_image: string,
        public gui_stock: number,

    ) {
        this.gui_createdAt = attributes.gui_createdAt;
        this.gui_updatedAt = attributes.gui_updatedAt;
    }

}