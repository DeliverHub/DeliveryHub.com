import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.apiurl + 'Auth/';
  jwtHelper = new JwtHelperService();
  decodedToken: any;
constructor(private http: HttpClient,private router: Router) { }
Register(form: any){
  return this.http.post<any>(this.baseUrl+'ConsumerRegisteration', form)

  .pipe(map ((response: any) => {
    debugger;
    const user = response.res;
    console.log(response.res)
    if (user) {
      localStorage.setItem('token', user);
      this.decodedToken = this.jwtHelper.decodeToken(user);
      localStorage.setItem('name',this.decodedToken.Name)
      this.router.navigate['/home'];
      console.log(this.decodedToken);
    }
  }));
  
  
};


login(form: any){
  return this.http.post(this.baseUrl+'ConsumerLogin', form)
  .pipe(map ((response: any) => {
    const user = response.res;
    if (user) {
      localStorage.setItem('token', user);
      this.decodedToken = this.jwtHelper.decodeToken(user);
      debugger;
      localStorage.setItem('name',this.decodedToken.Name)
      localStorage.setItem('ID',this.decodedToken.ID)
      console.log(this.decodedToken);
    }
  }));
}
loggedIn() {
  debugger;
  const token = localStorage.getItem('token');
  if(token!=null){
    return !this.jwtHelper.isTokenExpired(token);
  }

}

}
