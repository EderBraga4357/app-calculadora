import { Component } from '@angular/core';
import {ServiceService} from "../service.service";

@Component({
  selector: 'app-visual',
  templateUrl: './visual.component.html',
  styleUrls: ['./visual.component.css']
})
export class VisualComponent {

  private numero1: string = '0';
  private numero2: string | null = null;
  private resultado: number | null = null;
  private operacao: string | null = null;

  constructor(private serviceService: ServiceService) { }

  ngOnInit() {
    this.limpar();
  }

  /**
   * Inicializa todos os operadores para os valores padrão.
   *
   * @return void
   */
  limpar(): void {
    this.numero1 = '0';
    this.numero2 = null;
    this.resultado = null;
    this.operacao = null;
  }

  /**
   * Adiciona o número selecionado para o cálculo posteriormente.
   *
   * @param string numero
   * @return void
   */
  adicionarNumero(numero: string): void {
    if (this.operacao === null) {
      this.numero1 = this.concatenarNumero(this.numero1, numero);
    } else {
      this.numero2 = this.concatenarNumero(this.numero2 || '0', numero);
    }
  }

  /**
   * Returna o valor concatenado. Trata o separador decimal.
   *
   * @param string numAtual
   * @param string numConcat
   * @return string
   */
  concatenarNumero(numAtual: string, numConcat: string): string {
    // caso contenha apenas '0' ou null, reinicia o valor
    if (numAtual === '0' || numAtual === '') {
      numAtual = '';
    }

    // primeiro dígito é '.', concatena '0' antes do ponto
    if (numConcat === '.' && numAtual === '') {
      return '0.';
    }

    // caso '.' digitado e já contenha um '.', apenas retorna
    if (numConcat === '.' && numAtual.indexOf('.') > -1) {
      return numAtual;
    }

    return numAtual + numConcat;
  }


  /**
   * Executa lógica quando um operador for selecionado.
   * Caso já possua uma operação selecionada, executa a
   * operação anterior, e define a nova operação.
   *
   * @param string operacao
   * @return void
   */
  definirOperacao(operacao: string): void {
    // apenas define a operação caso não exista uma
    if (this.operacao === null) {
      this.operacao = operacao;
      return;
    }

    /* caso operação definida e número 2 selecionado,
       efetua o cálculo da operação */
    if (this.numero2 !== null) {
      this.resultado = this.serviceService.calcular(
        parseFloat(this.numero1),
        parseFloat(this.numero2),
        this.operacao);
      this.operacao = operacao;
      this.numero1 = this.resultado.toString();
      this.numero2 = null;
      this.resultado = null;
    }
  }

  /**
   * Efetua o cálculo de uma operação.
   *
   * @return void
   */
  calcular(): void {
    if (this.numero2 === null) {
      return;
    }

    this.resultado = this.serviceService.calcular(
      parseFloat(this.numero1),
      parseFloat(this.numero2),
      this.operacao || '0');

  }

  /**
   * Retorna o valor a ser exibido na tela da calculadora.
   *
   * @return string
   */
  get display(): string {
    if (this.resultado !== null) {
      return this.resultado.toString();
    }
    if (this.numero2 !== null) {
      return this.numero2;
    }
    return this.numero1;
  }

}
