import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StringsService {
  private url: string = "http://localhost:8070/"

  constructor(private client: HttpClient) { }

  getStrings(): Observable<string[]> { 
    return this.client.get<string[]>(this.url)
  }
}
