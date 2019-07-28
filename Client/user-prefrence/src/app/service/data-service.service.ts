import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';
import { environment } from 'src/environments/environment';

@Injectable()
export class DataService {

  _baseUrl: string = '';

  constructor(private http: Http) {
    this._baseUrl = environment.baseURl;
  }

  // To fill the Datatable for Default Table [Dummy Data]
  public GetAllUsers() {
    return this.http.get(this._baseUrl + 'UserDetail')
      .map((res: Response) => {
        return res.json();
      })
      .catch(this.handleError);
  }

  public GetUser(id) {
    return this.http.get(this._baseUrl + 'UserDetail/' + id)
      .map((res: Response) => {
        return res.json();
      })
      .catch(this.handleError);
  }

  public CreateUser(userobj) {
    return this.http.post(this._baseUrl + 'UserDetail', userobj, this.generateHeaders()).map((res: Response) => {
        return res.json();
      })
      .catch(this.handleError);;    
  }

  public UpdateUser(userobj) {
    return this.http.put(this._baseUrl + 'UserDetail/' + userobj.id, userobj, this.generateHeaders()).map((res: Response) => {
        return res.json();
      })
      .catch(this.handleError);;    
  }

  public DeleteUser(id) {
    return this.http.delete(this._baseUrl + 'UserDetail/' + id)
      .map((res: Response) => {
        return res.json();
      })
      .catch(this.handleError);
  }


  private generateHeaders() {
    return {
      headers: new Headers({'Content-Type': 'application/json'})
    }
  }

  // To provide error description - Manav
  private handleError(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.status);
  }
}
