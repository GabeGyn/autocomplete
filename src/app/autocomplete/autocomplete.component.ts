import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, of, startWith } from 'rxjs';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutocompleteComponent implements AfterViewInit{
  constructor() {}

  @Input() options: any[]=[];
  @Input() propriedade: any
  @Output() selecionado: EventEmitter<any> = new EventEmitter();

  filteredOptions$: Observable<string[]> = new Observable();
  inputFormControl: FormControl = new FormControl;
  
  ngAfterViewInit() {

    this.filteredOptions$ = of(this.options);
    this.inputFormControl = new FormControl();

    this.filteredOptions$ = this.inputFormControl.valueChanges
    .pipe(
      startWith(''),
      map((filterString) => {
        return typeof filterString=='string'?this.filter(filterString):[]
      }),
    );
  }

  private filter(value: any): any[] {
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