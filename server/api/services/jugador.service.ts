//import Promise from 'bluebird';
import L from '../../common/logger'
import { Jugador } from '../model/jugador';
import {JugadorRepository} from '../repositories/jugador.repository'
import { getCustomRepository } from "typeorm";

export class JugadorService {
    
    save(player: Jugador): Promise<Jugador> {
        return getCustomRepository(JugadorRepository).save(player);
    }

    update(id: number, player: any): Promise<Jugador> {
        return getCustomRepository(JugadorRepository).update(id, player);
    }

    remove(id: number): Promise<Jugador> {
        return getCustomRepository(JugadorRepository).remove(id);
    }

    findOne(id: number): Promise<Jugador> {
        return getCustomRepository(JugadorRepository).findOne(id);
    }

    getAll(): Promise<Array<Jugador>> {
        return getCustomRepository(JugadorRepository).findAll();
    }
}

export default new JugadorService();