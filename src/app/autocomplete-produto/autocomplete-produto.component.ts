import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, debounceTime, startWith, switchMap } from 'rxjs';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-autocomplete-produto',
  templateUrl: './autocomplete-produto.component.html',
  styleUrls: ['./autocomplete-produto.component.css']
})
export class AutocompleteProdutoComponent {
  
  constructor(private produtoService: ProdutoService) {}
  
  @Output() selecionado: EventEmitter<any> = new EventEmitter();
  
  @Input() multiplosInputs: boolean = false;
  @Input() listaSelecionados: any;
  @Input() propriedade:any

  filteredControlOptions$: Observable<any[]> = new Observable; 
  inputFormControlItem: FormControl = new FormControl();
  selecionaProduto: any;

  ngOnInit() {
    this.filteredControlOptions$ = this.inputFormControlItem.valueChanges
    .pipe(startWith(' '), 
    debounceTime(500),
    switchMap((valorBuscado: any) => {
      return this.produtoService.buscaRegistroProduto(encodeURIComponent(valorBuscado));  
    }));
  }

  limpar(){
    this.inputFormControlItem.enable();
    this.inputFormControlItem.setValue(' ');
    this.selecionado.emit(' ')
  }

  valorSelecionado(event: any){
    if(event && event[this.propriedade]){
      this.inputFormControlItem.setValue((event[this.propriedade]).toString());
      this.selecionado.emit(event)
      this.inputFormControlItem.disable()
    } 
  } 
}