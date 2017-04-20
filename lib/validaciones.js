"use strict";

/**
 * Validar valores, telefono, cedula, etc
 *
 * @param valor
 */
function Validaciones(valor) {
    this.valor = valor;
    this.patrones = {
        cedula_rd: /\d{3}[. -]?\d{7}[. -]?\d{1}/g,
        telefono_rd: ''
    }
}

Validaciones.prototype = {
    validar: function(patron) {
        var re = new RegExp(patron);

        var result = re.test(this.valor);
        return result;
    },

    /**
     * Valida el formato de cedula de republica dominicana
     *  031-0495445-2, 03104954452, 031 0495445 2, 031.0495445.2
     *
     * @returns boolean
     */
    cedulaRd: function() {
       return this.validar(this.patrones.cedula_rd);
    }
}

var v = new Validaciones('031-0495445-');
console.log(v.cedulaRd());


