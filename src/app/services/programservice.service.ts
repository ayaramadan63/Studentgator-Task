import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Program } from '../interfaces/program';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  Api = "https://admin-mfyg726r7q-uc.a.run.app/filter2/1?name=None&city=None&Language=None&type=None&level=None&sort=None&school=None&category=None";
  programs: {} = {};
  constructor(private http:HttpClient) { }

  // ngOnInit(): void {
  //   this.getAllPrograms()
    
  // }


  getAllPrograms() {
    return this.http.post<Program[]>(this.Api, {})
    //   .subscribe(res => {
    //   console.log(res);
    // });

  }





}
