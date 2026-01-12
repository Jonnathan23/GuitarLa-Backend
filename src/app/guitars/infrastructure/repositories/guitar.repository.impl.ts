import { GuitarDataSource, GuitarEntity, GuitarRepository, PatchGuitarDto, UpdateGuitarDto } from "../../domain";


export class GuitarRepositoryImpl implements GuitarRepository {
    constructor(
        private readonly guitarDataSource: GuitarDataSource
    ) { }

    createGuitar(guitar: PatchGuitarDto): Promise<GuitarEntity> {
        return this.guitarDataSource.createGuitar(guitar);
    }

    getAllGuitars(): Promise<GuitarEntity[]> {
        return this.guitarDataSource.getAllGuitars();
    }

    getGuitarById(id: string): Promise<GuitarEntity> {
        return this.guitarDataSource.getGuitarById(id);
    }

    updateGuitar(id: string, guitar: UpdateGuitarDto): Promise<GuitarEntity> {
        return this.guitarDataSource.updateGuitar(id, guitar);
    }
    
    deleteGuitar(id: string): Promise<void> {
        return this.guitarDataSource.deleteGuitar(id);
    }

}