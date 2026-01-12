

export class UpdateGuitarDto {
    private constructor(
        public readonly gui_name?: string,
        public readonly gui_price?: number,
        public readonly gui_description?: string,
        public readonly gui_image?: string,
        public readonly gui_stock?: number,
    ) { }

    get values() {
        // Un getter para devolver solo las propiedades que tienen valor
        const returnObj: { [key: string]: any } = {};

        if (this.gui_name) returnObj.gui_name = this.gui_name;
        if (this.gui_price) returnObj.gui_price = this.gui_price;
        if (this.gui_description) returnObj.gui_description = this.gui_description;
        if (this.gui_image) returnObj.gui_image = this.gui_image;
        if (this.gui_stock) returnObj.gui_stock = this.gui_stock;

        return returnObj;
    }

    static create(object: { [key: string]: any }): [string?, UpdateGuitarDto?] {

        const { gui_name, gui_price, gui_description, gui_image, gui_stock } = object;

        if (
            !gui_name && !gui_price && !gui_description &&
            !gui_image && !gui_stock
        ) {
            return ["Al menos una propiedad debe ser proporcionada para actualizar"];
        }

        if (gui_price !== undefined && gui_price < 0) {
            return ["El precio no puede ser negativo"];
        }


        return [
            "",
            new UpdateGuitarDto(gui_name, gui_price, gui_description, gui_image, gui_stock)
        ];
    }
}