import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';

  constructor() { }

  /**
   * Método que calcula uma operação matemática dado
   * dois números.
   * Suporta as operações soma, subtração, divisão,
   * e multiplicação.
   *
   * @param num1 number
   * @param num2 number
   * @param operacao string Operação a ser executada
   * @return number Resultado da operação
   */
  calcular(num1: number, num2: number, operacao: string): number {
    let resultado: number; // armazena o resultado da operação

    switch(operacao) {
      case ServiceService.SOMA:
        resultado = num1 + num2;
        break;
      case ServiceService.SUBTRACAO:
        resultado = num1 - num2;
        break;
      case ServiceService.DIVISAO:
        resultado = num1 / num2;
        break;
      case ServiceService.MULTIPLICACAO:
        resultado = num1 * num2;
        break;
      default:
        resultado = 0;
    }

    return resultado;
  }
}
