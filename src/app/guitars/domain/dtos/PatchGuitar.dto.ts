
export class PatchGuitarDto {
    private constructor(
        public gui_name: string,
        public gui_price: number,
        public gui_description: string,
        public gui_image: string,
        public gui_stock: number,
    ) { }

    static create(object: { [key: string]: any }): [string?, PatchGuitarDto?] {

        const { gui_name, gui_price, gui_description, gui_image, gui_stock } = object;

        if (!gui_name) return ["Nombre de la guitarra es obligatorio"];
        if (!gui_price) return ["Precio de la guitarra es obligatorio"];
        if (!gui_description) return ["Descripcion de la guitarra es obligatorio"];
        if (!gui_image) return ["El nombre de la imagen de la guitarra es obligatorio"];
        if (!gui_stock) return ["Stock de la guitarra es obligatorio"];

        if(gui_price < 0) return ["El precio no puede ser negativo"];

        const guitarDto = new PatchGuitarDto(
            gui_name,
            gui_price,
            gui_description,
            gui_image,
            gui_stock
        )

        return ["", guitarDto];
    }

}