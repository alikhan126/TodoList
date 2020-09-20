import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig } from '../../../constants/app-config';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TodoListService  {

  constructor(private http: HttpClient,
    ) {
}


add (record: any): Observable<any> {

  return this.http.post<any>(`${AppConfig.URL_TodoList}`, record).pipe(
    map(x => x ),
    tap((newP: any) => console.log(`added record w/ id=${newP}`)),
    catchError(this.handleError<any>('add'))
  );
}

getAll()
{
  console.log(`${AppConfig.URL_TodoList}`)
  return this.http.get<any []>(`${AppConfig.URL_TodoList}`)
  .pipe(
    map(x => x ),
    tap(_ => console.log('fetched record')),
    catchError(this.handleError('getRecord', []))
  );
}

get(id){
  return this.http.get<any>(`${AppConfig.URL_TodoList}${id}/`).pipe(
    map(x => x ),
    tap(_ => console.log(`get record=${id}`)),
    catchError(this.handleError<any>('getRecord'))
  );
}

update (record: any): Observable<any> {
  return this.http.put(`${AppConfig.URL_TodoList}${record["id"]}/`, record).pipe(
    tap(_ => this.log(`updated record id=${record["id"]}`)),
    catchError(this.handleError<any>('updateRecord'))
  );
  
}

delete(id){
  return this.http.delete<any>(`${AppConfig.URL_TodoList}${id}/`).pipe(
    map(x => x ),
    tap(_ => console.log(`get record=${id}`)),
    catchError(this.handleError<any>('getRecord'))
  );
}

private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    return of(result as T);
  };
}

/** Log a  message with the MessageService */
private log(message: string) {
  //  alert(message)
    console.log(message)
  // this.ts.success("Operation Performed Successfully");
  // this.messageService.add(`DealerService: ${message}`);
}

}
