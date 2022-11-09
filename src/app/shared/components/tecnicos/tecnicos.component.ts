import { Component, OnInit } from '@angular/core';
import { Tecnico } from 'src/app/models/tecnico.model';
import { TechniciansFormComponent } from './technicians-form/technicians-form.component';

@Component({
  selector: 'app-tecnicos',
  templateUrl: './tecnicos.component.html',
  styleUrls: ['./tecnicos.component.scss']
})
export class TecnicosComponent implements OnInit {
  public filterDate: string = '';
  public technical: Tecnico[] = [];
  public filteredTxns: Tecnico[] = [];
  public showModal: boolean = false;

  constructor(){
  }

  ngOnInit() {
    this.technical = getTransactions();
    console.log(this.technical);

  }

  openModal(){

  }

  onAmount(){
    //this.technical.sort((b,a) => b.amount - a.amount);
  }


  onFilter(){
    /* if(this.filterDate !== undefined || this.filterDate !== null){
      this.technical = this.technical.filter(({date}) => {
        return date  === this.filterDate
        });

    } */
  }

  onChangeDataPicker($event: any){
    this.filterDate = $event.value
  }

}

export const getTransactions: () => Tecnico[] = () => [

  {
    id: "1",
    nombre: 'juan camilo medina',
    payroll: true,
    status: true,
    idNumber: '1075877441',
    eps: 'sanitas',
    pension: '232562',
    positionHeld: 'Tecnico de soporte',
    address: 'calle 98 # 3d 02',
    neigborhood: 'peñon',
    mobility: 'moto',
    cost: '60000',
    bank: 'Bancolombia',
    accountNumber: '87868461'

  },
  {
    id: "2",
    nombre: 'Diego Fernando Caviedes',
    payroll: false,
    status: false,
    idNumber: '1075877241',
    eps: 'sanitas',
    pension: '23002',
    positionHeld: 'Tecnico de soporte',
    address: 'calle 78 # 7c 02',
    neigborhood: 'alcala',
    mobility: 'moto',
    cost: '60000',
    bank: 'Bancolombia',
    accountNumber: '87868461'
  },
  {
    id: "2",
    nombre: 'juan gabriel astudillo',
    payroll: true,
    status: true,
    idNumber: '104885566',
    eps: 'Nueva EPS',
    pension: '656545',
    positionHeld: 'CEO',
    address: 'calle 5454  ',
    neigborhood: 'Candido',
    mobility: 'Carro',
    cost: '100000',
    bank: 'Davivienda',
    accountNumber: '8746341'
  },
];
