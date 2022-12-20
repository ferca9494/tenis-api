import JugadorService from '../../server/api/services/jugador.service';
import * as typeorm from "typeorm";
import { JugadorRepository } from '../../server/api/repositories/jugador.repository';
import { Jugador } from '../../server/api/model/jugador';

describe('JugadorService Tests', () => {

    let customRepositorySpy;
    let jugadorRepositorySpy;

    beforeEach(() => {
        jugadorRepositorySpy = {} as JugadorRepository;
        customRepositorySpy = spyOn(typeorm, 'getCustomRepository').and.returnValue(jugadorRepositorySpy);
    });

    it('should save Jugador', () => {
        let jugador = { id: 5, nombre: 'Pepe', puntos: 1000 } as Jugador;

        jugadorRepositorySpy.save = jasmine.createSpy('save').and.callFake((j) => Promise.resolve(j));

        JugadorService.save(jugador).then(j => {
            expect(j).toBe(jugador);

            expect(customRepositorySpy).toHaveBeenCalledTimes(1);

            expect(jugadorRepositorySpy.save).toHaveBeenCalledTimes(1);
            expect(jugadorRepositorySpy.save).toHaveBeenCalledWith(jugador);
        });
    });

    it('should update Jugador', () => {
        let jugador = { id: 5, nombre: 'Pepe', puntos: 1000 } as Jugador;

        jugadorRepositorySpy.update = jasmine.createSpy('update').and.callFake((id, j) => Promise.resolve(j));

        JugadorService.update(5, jugador).then(j => {
            expect(j).toBe(jugador);

            expect(customRepositorySpy).toHaveBeenCalledTimes(1);

            expect(jugadorRepositorySpy.update).toHaveBeenCalledTimes(1);
            expect(jugadorRepositorySpy.update).toHaveBeenCalledWith(5, jugador);
        });
    });

    it('should remove Jugador', () => {
        let jugador = { id: 5, nombre: 'Pepe', puntos: 1000 } as Jugador;

        jugadorRepositorySpy.remove = jasmine.createSpy('remove').and.returnValue(Promise.resolve(jugador));

        JugadorService.remove(5).then(j => {
            expect(j).toBe(jugador);

            expect(customRepositorySpy).toHaveBeenCalledTimes(1);

            expect(jugadorRepositorySpy.remove).toHaveBeenCalledTimes(1);
            expect(jugadorRepositorySpy.remove).toHaveBeenCalledWith(5);
        });
    });

    it('should find one Jugador', () => {
        let jugador = { id: 5, nombre: 'Pepe', puntos: 1000 } as Jugador;
        jugadorRepositorySpy.findOne = jasmine.createSpy('findOne').and.returnValue(Promise.resolve(jugador));

        JugadorService.findOne(5).then(j => {
            expect(j).toBe(jugador);

            expect(customRepositorySpy).toHaveBeenCalledTimes(1);

            expect(jugadorRepositorySpy.findOne).toHaveBeenCalledTimes(1);
            expect(jugadorRepositorySpy.findOne).toHaveBeenCalledWith(5);
        });
    });

    it('should get all Jugadores', () => {
        let jugador = { id: 5, nombre: 'Pepe', puntos: 1000 } as Jugador;
        let jugadores = [jugador];

        jugadorRepositorySpy.findAll = jasmine.createSpy('findAll').and.returnValue(Promise.resolve(jugadores));

        JugadorService.getAll().then(j => {
            expect(j).toBe(jugadores);

            expect(customRepositorySpy).toHaveBeenCalledTimes(1);

            expect(jugadorRepositorySpy.findAll).toHaveBeenCalledTimes(1);
        });
    });
});