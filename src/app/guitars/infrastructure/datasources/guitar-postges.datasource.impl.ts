import { GuitarMapper } from "..";
import Guitar from "../../../../data/models/guitars/Guitar.model";
import { CustomError, handleError } from "../../../../errors";

import { GuitarDataSource, GuitarEntity, PatchGuitarDto, UpdateGuitarDto } from "../../domain";



export class GuitarPostgresDataSource implements GuitarDataSource {

    async createGuitar(guitar: PatchGuitarDto): Promise<GuitarEntity> {
        const { gui_name, gui_price, gui_description, gui_image, gui_stock } = guitar;

        try {
            const findGuitar = await Guitar.findOne({ where: { gui_name } });
            if (findGuitar) throw new CustomError(400, "Guitar already exists");

            const newGuitar = await Guitar.create({ gui_name, gui_price, gui_description, gui_image, gui_stock });

            const guitarEntity = GuitarMapper.toEntity(newGuitar);

            return guitarEntity;

        } catch (error) {
            console.log(error);
            throw handleError(error);
        }
    }

    async getAllGuitars(): Promise<GuitarEntity[]> {
        try {
            const guitars = await Guitar.findAll();
            const guitarsEntities = guitars.map(guitar => GuitarMapper.toEntity(guitar));
            return guitarsEntities;
        } catch (error) {
            console.log(error);
            throw handleError(error);
        }
    }

    async getGuitarById(id: string): Promise<GuitarEntity> {
        try {
            const guitar = await Guitar.findByPk(id);
            if (!guitar) throw new CustomError(404, "Guitar not found");

            return GuitarMapper.toEntity(guitar);
        } catch (error) {
            console.log(error);
            throw handleError(error);
        }
    }

    async updateGuitar(id: string, updateGuitarDto: UpdateGuitarDto): Promise<GuitarEntity> {
        try {
            const guitar = await Guitar.findByPk(id);
            if (!guitar) throw new CustomError(404, "Guitar not found");

            guitar.gui_name = updateGuitarDto.gui_name ?? guitar.gui_name;
            guitar.gui_price = updateGuitarDto.gui_price ?? guitar.gui_price;
            guitar.gui_description = updateGuitarDto.gui_description ?? guitar.gui_description;
            guitar.gui_image = updateGuitarDto.gui_image ?? guitar.gui_image;
            guitar.gui_stock = updateGuitarDto.gui_stock ?? guitar.gui_stock;

            await guitar.save();
            return GuitarMapper.toEntity(guitar);
        } catch (error) {
            console.log(error);
            throw handleError(error);
        }
    }

    async deleteGuitar(id: string): Promise<void> {
        try {
            const guitar = await Guitar.findByPk(id);
            if (!guitar) throw new CustomError(404, "Guitar not found");

            await guitar.destroy();
        } catch (error) {
            console.log(error);
            throw handleError(error);
        }
    }
}