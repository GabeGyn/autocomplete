import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, of, startWith } from 'rxjs';

@Component({
  selector: 'app-autocomplete-produto',
  templateUrl: './autocomplete-produto.component.html',
  styleUrls: ['./autocomplete-produto.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutocompleteProdutoComponent implements AfterViewInit{
  constructor() {}

  @Input() options: any[]=[];
  @Output() selecionado: EventEmitter<any> = new EventEmitter();
  @Input() propriedade:any
  
  filteredOptions$: Observable<string[]>= new Observable();
  inputFormControl: FormControl=new FormControl;
  
  ngAfterViewInit() {

    this.filteredOptions$ = of(this.options);
    this.inputFormControl = new FormControl();

    this.filteredOptions$ = this.inputFormControl.valueChanges
    .pipe(
      startWith(''),
      map(filterString => this.filter(filterString)),
    );
  }

  private filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(optionValue => optionValue[this.propriedade].toLowerCase().includes(filterValue));
  }

  valorSelecionado(event: any){
    if(event && event[this.propriedade]){
      this.inputFormControl.setValue((event[this.propriedade]).toString());
      this.selecionado.emit(event);
    }
  }
}