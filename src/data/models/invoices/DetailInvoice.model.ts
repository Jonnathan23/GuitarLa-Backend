import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import HeaderInvoice from "./HeaderInvoice.model";
import Guitar from "../guitars/Guitar.model";

interface DetailInvoiceI {
    det_id: string;
    det_quantity: number;
    det_price: number;
    det_subTotal: number;
    det_createdAt: string;
    det_updatedAt: string;
}

@Table({
    tableName: 'Detail_invoices',
    timestamps: true,
    createdAt: 'det_createdAt',
    updatedAt: 'det_updatedAt'
})
class DetailInvoice extends Model {
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        allowNull: false,
        primaryKey: true
    })
    declare det_id: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    declare det_quantity: number;

    @Column({
        type: DataType.DECIMAL,
        allowNull: false
    })
    declare det_price: number;

    @Column({
        type: DataType.DECIMAL,
        allowNull: false
    })
    declare det_subTotal: number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    declare det_createdAt: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    declare det_updatedAt: string;

    //* |------| | ForeignKey | |------|
    @ForeignKey(() => HeaderInvoice)
    @Column({
        type: DataType.UUID,
        allowNull: false
    })
    declare det_inv_id: HeaderInvoice['inv_id'];

    @BelongsTo(() => HeaderInvoice)
    declare det_header_invoice: HeaderInvoice;

    @ForeignKey(() => Guitar)
    @Column({
        type: DataType.UUID,
        allowNull: false
    })
    declare det_guitar_id: Guitar['gui_id'];

    @BelongsTo(() => Guitar)
    declare det_guitar: Guitar;
}

export default DetailInvoice;