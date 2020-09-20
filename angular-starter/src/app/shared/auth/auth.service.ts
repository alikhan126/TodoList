import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
@Injectable()
export class AuthService {
  token: string;

  constructor(private http: HttpClient,private router :Router) {}

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      // alert(error);
      console.log(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);
      // this.ts.error("Failed to Perform Operation");
      // // Let the app keep running by returning an empty result.
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
