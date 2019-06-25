import { Component, OnInit, ɵReflectionCapabilities } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-leerdatos',
  templateUrl: './leerdatos.component.html',
  styleUrls: ['./leerdatos.component.scss']
})
export class LeerdatosComponent implements OnInit {

  constructor(private  http: HttpClient) { }
  TablaSelecionada:number
  tablas:string[]
   datos:any;
   campos:string[]
   verTabla:boolean;
  ngOnInit() {
    this.tablas=['productos']
    this.TablaSelecionada=999;
    
  }
  leerDatos(){
    if (this.TablaSelecionada===999){
      this.verTabla=false;
    }else{
      this.verTabla=true;
    }
    let url=`http://localhost:8001/server/kawina?tabla=${this.tablas[this.TablaSelecionada]}`
    this.http.get<any>(url)
    .subscribe(resultados=>{
      if(resultados.ok=true){
      this.datos=resultados.data
      this.campos=Object.keys(this.datos[0])
      }else{
        alert(`la tabla selecionada no tiene datos`)
      }
      console.log(this.datos)

    })
    // alert(`la tabla selecionada es la numero ${this.TablaSelecionada}, ${this.tablas[this.TablaSelecionada]}`)
    
    console.log(this.datos)
    
  }
}
