
import { CustomError } from "../../../../errors/errors";
import { HeaderInvoiceEntity } from "../../domain";


export class HeaderInvoiceMapper {
    static toEntity(object: { [key: string]: any }): HeaderInvoiceEntity {
        
        const { inv_id, inv_subTotal, inv_total, inv_client_name, inv_client_email, inv_client_phone, inv_quantity_items, inv_createdAt, inv_updatedAt } = object;

        if (!inv_id) throw new CustomError(400, "inv_id is required");

        if (!inv_subTotal) throw new CustomError(400, "inv_subTotal is required");

        if (!inv_total) throw new CustomError(400, "inv_total is required");

        if (!inv_client_name) throw new CustomError(400, "inv_client_name is required");

        if (!inv_client_email) throw new CustomError(400, "inv_client_email is required");

        if (!inv_client_phone) throw new CustomError(400, "inv_client_phone is required");

        if (!inv_quantity_items) throw new CustomError(400, "inv_quantity_items is required");

        const attributes = {
            inv_createdAt: inv_createdAt ?? Date.now().toString(),
            inv_updatedAt: inv_updatedAt ?? Date.now().toString()
        }

        return new HeaderInvoiceEntity(
            attributes,
            inv_id,
            inv_subTotal,
            inv_total,
            inv_client_name,
            inv_client_email,
            inv_client_phone,
            inv_quantity_items
        )
    }
}