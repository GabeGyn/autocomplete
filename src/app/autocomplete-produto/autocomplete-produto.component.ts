import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NbToastrService, NbGlobalLogicalPosition } from '@nebular/theme';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-autocomplete-produto',
  templateUrl: './autocomplete-produto.component.html',
  styleUrls: ['./autocomplete-produto.component.css']
})
export class AutocompleteProdutoComponent {
  constructor( private toastrService: NbToastrService ){ }

  @Output() selecionado: EventEmitter<any> = new EventEmitter();
  @Input() multiplosInputs: boolean = false;
  @Input() listaSelecionados: any;
  @Input() propriedade:any
  @Input() filteredControlOptions$: Observable<any[]> = new Observable; 
  @Input() inputFormControlItem: FormControl = new FormControl();

  ngOnChanges(changes: SimpleChanges): void {
    //console.log(this.inputFormControlItem)
    if(this.inputFormControlItem){
      //console.log('teste')
    }  
  }

  limpar(){
    this.inputFormControlItem.enable();
    this.inputFormControlItem.setValue(' ');
    this.selecionado.emit(' ')
  }

  valorSelecionado(event: any){
    if(event && event[this.propriedade]){
      if(this.multiplosInputs == false){
        this.inputFormControlItem.setValue((event[this.propriedade]).toString());
        this.selecionado.emit(event)
        this.inputFormControlItem.disable()
      } else{
        const listaContemTag = this.listaSelecionados.filter((item: any) => {
          return event.id == item.id
        }).length > 0;
  
        if(listaContemTag) {
          this.toastrService.show(
            "Essa categoria já foi adicionada na lista",
            "Erro",
            {status: 'danger', 
            position: NbGlobalLogicalPosition.TOP_END,  
            preventDuplicates: true,
            duplicatesBehaviour: 'all', 
            destroyByClick:true, });
        } else { 
          this.listaSelecionados.push(event) 
        }
        this.inputFormControlItem.setValue('');
        this.selecionado.emit('')
      } 
    }
  }
}
