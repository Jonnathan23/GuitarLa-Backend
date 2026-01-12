import { HasMany, Model } from "sequelize-typescript";
import { Column, DataType, Table } from "sequelize-typescript";
import DetailInvoice from "../invoices/DetailInvoice.model";

interface GuitarI {
    gui_id: string;
    gui_name: string;
    gui_price: number;
    gui_description: string;
    gui_image: string;
    gui_stock: number;

    gui_createdAt: string;
    gui_updatedAt: string;
}


@Table({
    tableName: 'Guitars',
    timestamps: true,
    createdAt: 'gui_createdAt',
    updatedAt: 'gui_updatedAt'
})
class Guitar extends Model{
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        allowNull: false,
        primaryKey: true
    })
    declare gui_id: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    declare gui_name: string;

    @Column({
        type: DataType.DECIMAL,
        allowNull: false
    })
    declare gui_price: number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    declare gui_description: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    declare gui_image: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    declare gui_stock: number;

    //* |------| | HasMany | |------|
    @HasMany(() => DetailInvoice)
    declare detail_invoices: DetailInvoice[];    

}

export default Guitar;