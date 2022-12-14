import { Component, OnInit } from '@angular/core';
import { Program } from 'src/app/interfaces/program';
import { ProgramService } from 'src/app/services/programservice.service';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent implements OnInit {

  programs: Program[] = [];
  p: number = 1;
  count: number = 6;
  constructor(private programService: ProgramService) { }

  ngOnInit(): void {
    this.getPrograms()
  }

  getPrograms() {

    this.programService.getAllPrograms().subscribe(data => {
      this.programs = data;
      console.log(data)
    })
  }

}
