import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  public get(path:string){
    return this.http.get<any>(`${environment.base_api}${path}`,{
      headers:new HttpHeaders({
        "charset":"UTF-8",
        "accept": "application/json",
        "Access-Control-Allow-Origin":"*"
      })
    }); // GET  
  }

  public post(path:string, body:any){
    return this.http.post<any>(`${environment.base_api}${path}`,body,{
      headers:new HttpHeaders({
          "charset":"UTF-8",
          "accept": "application/json",
          "Access-Control-Allow-Origin":"*"          
      })
    }); // POST
  }

  public put(path:string, body:any){
    return this.http.put<any>(`${environment.base_api}${path}`,body,{
      headers:new HttpHeaders({
          "charset":"UTF-8",
          "accept": "application/json",
          "Access-Control-Allow-Origin":"*"          
      })
    }); // PUT  
  }

  public delete(path:string){
    return this.http.delete<any>(`${environment.base_api}${path}`,{
      headers:new HttpHeaders({
        "charset":"UTF-8",
        "accept": "application/json",
        "Access-Control-Allow-Origin":"*"        
      })
    }); // DELETE  
  }
}