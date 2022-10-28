import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HardSoftSkills } from 'src/app/model/hard-soft-skills';
import { HardSoftSkillsService } from 'src/app/service/hard-soft-skills.service';

@Component({
  selector: 'app-edit-hard-soft-skills',
  templateUrl: './edit-hard-soft-skills.component.html',
  styleUrls: ['./edit-hard-soft-skills.component.css']
})

export class EditHardSoftSkillsComponent implements OnInit {
  hardSoftSkills: HardSoftSkills = null;

  constructor(private sHardSoftSkills: HardSoftSkillsService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sHardSoftSkills.detail(id).subscribe(
      data =>{
        this.hardSoftSkills = data;
      }, err =>{
        alert("Error al modificar habilidad");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sHardSoftSkills.update(id, this.hardSoftSkills).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar habilidad");
         this.router.navigate(['']);
      }
    )
  }

}
