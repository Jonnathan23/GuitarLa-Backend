import { CustomError } from "@/errors";
import { DetailInvoiceEntity } from "@/app/sales/domain";


export class DetailInvoiceMapper {
    static toEntity(object: { [key: string]: any }): DetailInvoiceEntity {
        const { det_id, det_price, det_quantity, det_subTotal, det_createdAt, det_updatedAt } = object;


        if (!det_price) throw new CustomError(400, "El precio del detalle es obligatorio");
        if (!det_quantity) throw new CustomError(400, "La cantidad del detalle es obligatoria");
        if (!det_subTotal) throw new CustomError(400, "El subtotal del detalle es obligatorio");

        const attributes = {
            det_createdAt: det_createdAt ?? Date.now().toString(),
            det_updatedAt: det_updatedAt ?? Date.now().toString()
        }

        return new DetailInvoiceEntity(
            attributes,
            det_id,
            det_price,
            det_quantity,
            det_subTotal
        );
    }
}