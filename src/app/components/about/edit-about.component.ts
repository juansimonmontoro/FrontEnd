import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.css']
})
export class EditAboutComponent implements OnInit {
  editpersona: persona = null;

  constructor(
    private sPersona: PersonaService,
    private activatedRouter: ActivatedRoute,
    private router: Router,){ }
    // public imageServise: ImageService) 
 

    ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.sPersona.detail(id).subscribe(
        data =>{
          this.editpersona = data;
        }, err =>{
          alert("Error al modificar Perfil");
          this.router.navigate(['']);
        }
      )
    }
  
    onUpdate(): void{
      const id = this.activatedRouter.snapshot.params['id'];
      // this.editpersona.img = this.imageServise.url
      this.sPersona.update(id, this.editpersona).subscribe(
        data => {
          this.router.navigate(['']);
        }, err =>{
           alert("Error al Perfil");
           this.router.navigate(['']);
        }
      )
    }

    // uploadImage($event:any){
    //   const id = this.activatedRouter.snapshot.params['id'];
    //   const name = 'perfil' + id;
    //   this.imageServise.uploadImage($event, name)
    // }

}
