import { Injectable } from '@angular/core';
import { apiService } from './apiService';

    @Injectable({

     providedIn: 'root', 

    })

    export class partiteServices{

        constructor(private apiService:apiService) {}
        getStats(){
            
              return this.apiService.getRisultatiPartite();
        }
        }