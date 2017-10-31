import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from './../environments/environment';

/**
 * author: Raghulraj
 * Method: GET and POST
 * This is Common Service to Get and Post Methods, to access all component
 * services
 */


@Injectable() export class GameService {

  constructor(private http: Http) { }


  /**
   * Token validation for Page redirect
   */

  tokenchecking(body,url,token){
    
     let bodyString = JSON.stringify(body); // Stringify payload @body to bodyString
 
     let headers = new Headers({ 'Content-Type': 'application/json',
     'Accept': 'application/json',
     'token':token
   }); // ... Set content type to JSON
 
     let options = new RequestOptions({ headers: headers }); // Create a request option
 
     this.debugConsole(options); // console error
 
     return this.http.post(url,{}, options) // ...using post request
       // ...and calling .json() on the response to return data
       .map((res: Response) => res.json())
       //...errors if any
       .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
   }
 
   // Get Data
   getAPIData(token,url) {
    
     let headers = new Headers({ 'Content-Type': 'application/json',
     'Accept': 'application/json',
     'token':token
   }); // ... Set content type to JSON
 
     let options = new RequestOptions({ headers: headers }); // Create a request option
 
     this.debugConsole(options); // console error
 
     return this.http.get(url,options)
 
       // ...and calling .json() on the response to return data
       .map((res: Response) => res.json())
 
       //...errors if any
       .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
 
 
   }
 
   // Post Data
   postAPIData(token,url, body: Object): Observable<any> {
     let bodyString = JSON.stringify(body); // Stringify payload
 
     
 
     let headers = new Headers({ 'Content-Type': 'application/json',
     'Accept': 'application/json',
     'token':token
   }); // ... Set content type to JSON
     
     let options = new RequestOptions({ headers: headers }); // Create a request option
 
     this.debugConsole({"info":options,"url":url}); // console error
 
     return this.http.post(url, body, options) // ...using post request
       // ...and calling .json() on the response to return data
       .map((res: Response) => res.json())
       //...errors if any
       .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
   }
 
 
 
   
 
 
 
 
   debugConsole(data){
     if(environment.debugMode){
 
       console.log(data);
 
     }
   }

}
