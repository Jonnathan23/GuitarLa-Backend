import { PatchGuitarDto, GuitarEntity } from "..";
import { UpdateGuitarDto } from "../dtos/UpdateGuitar.dto";




export abstract class GuitarRepository {
    //* Posts
    abstract createGuitar(guitar: PatchGuitarDto): Promise<GuitarEntity>;

    //* Gets
    abstract getAllGuitars(): Promise<GuitarEntity[]>;

    abstract getGuitarById(id: string): Promise<GuitarEntity>;

    //* Puts & Patches
    abstract updateGuitar(id: string, guitar: UpdateGuitarDto): Promise<GuitarEntity>;

    //* Deletes
    abstract deleteGuitar(id: string): Promise<void>;

}