import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, tap } from 'rxjs'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  getCategorias(): Observable<any>{
    return this.http.get(`${environment.BASE_URL}/categoria/list`).pipe(
        tap(
          (res) => {
            console.log(res)
          },
          (err) => {
            console.log(err)
          }
        )
      );
  }

}
