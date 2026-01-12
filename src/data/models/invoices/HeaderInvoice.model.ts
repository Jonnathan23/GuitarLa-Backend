import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import DetailInvoice from "./DetailInvoice.model";


interface HeaderInvoiceI {
    inv_id: string;
    inv_subTotal: number;
    inv_total: number;
    inv_client_name: string;
    inv_client_email: string;
    inv_client_phone: string;
    inv_quantity_items: number;
    inv_createdAt: Date;
    inv_updatedAt: Date;

    inv_createdBy: string;
    inv_updatedBy: string;
}


@Table({
    tableName: 'Header_invoices',
    timestamps: true,
    createdAt: 'inv_createdAt',
    updatedAt: 'inv_updatedAt'
})
class HeaderInvoice extends Model<HeaderInvoiceI> {
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        allowNull: false,
        primaryKey: true
    })
    declare inv_id: string;

    @Column({
        type: DataType.DECIMAL,
        allowNull: false
    })
    declare inv_subTotal: number;

    @Column({
        type: DataType.DECIMAL,
        allowNull: false
    })
    declare inv_total: number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    declare inv_client_name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    declare inv_client_email: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    declare inv_client_phone: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    declare inv_quantity_items: number;


    //* |------| | HasMany | |------|
    @HasMany(() => DetailInvoice)
    declare detail_invoices: DetailInvoice[];
}

export default HeaderInvoice;
