import { GuitarEntity } from "../../domain";


export class GuitarMapper {
    static toEntity(object: { [key: string]: any }): GuitarEntity {
        const { gui_id, gui_name, gui_price, gui_description, gui_image, gui_stock } = object;

        if (!gui_id) {
            throw new Error("gui_id is required");
        }

        if (!gui_name) {
            throw new Error("gui_name is required");
        }

        if (!gui_price) {
            throw new Error("gui_price is required");
        }

        if (!gui_description) {
            throw new Error("gui_description is required");
        }

        if (!gui_image) {
            throw new Error("gui_image is required");
        }

        if (!gui_stock) {
            throw new Error("gui_stock is required");
        }
        
        const attributes = {
            gui_createdAt: Date.now().toString(),
            gui_updatedAt: Date.now().toString()
        }

        return new GuitarEntity(
            attributes,
            gui_id,
            gui_name,
            gui_price,
            gui_description,
            gui_image,
            gui_stock
        );
    }

}