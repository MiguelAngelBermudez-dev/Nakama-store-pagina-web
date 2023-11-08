import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { EmailAuthProvider } from 'firebase/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
constructor(private auth: AngularFireAuth, private router: Router){}
/*try {
  
} catch (error) {
  
}*/
}
