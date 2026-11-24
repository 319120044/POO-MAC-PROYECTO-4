import { Dispositivo } from "./Dispositivo.js"
export class climatizador extends Dispositivo{
    #modo
    #turbo
    constructor(modo, id, nombre, potenciaWatts, turbo, encendido) {
        super(id, potenciaWatts, nombre, encendido)
        this.#modo = modo
        this.#turbo = false

    }

    activarTurbo(){
        this.#turbo = true
        console.log("Turbo activado")
        
    }

    desactivarTurbo(){
        this.#turbo = false 
        console.log("Turbo desactivado")
    }

    calcularConsumoKWH(horas){
        let consumoHora = super.calcularConsumoKWH(horas)

        if(this.#turbo){
            consumoHora * 1.2
        }
        return consumoHora

    }
}