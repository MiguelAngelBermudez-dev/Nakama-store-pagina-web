import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

interface Producto {
  id: string;
  Nombre: string;
  Precio: number;
  Foto: string; 
  Categoria: string; 
}

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  public readonly productos$: Observable<Producto[]>;

  constructor(firestore: AngularFirestore) {
    const productosCollection = firestore.collection<Producto>('Productos');
    this.productos$ = productosCollection.valueChanges({ idField: 'id' });
  }

  ngOnInit(): void {
  }
}
