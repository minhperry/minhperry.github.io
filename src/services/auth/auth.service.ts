import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';
import {catchError, map, of, tap} from 'rxjs';
import {jwtDecode} from 'jwt-decode';

interface TokenPayload {
    role: string,
    iat: number,
    iss: string
    aud: string,
    exp: number
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    readonly TOKEN_NAME = 'authJWT'
    private readonly API_BASE = environment.apiUrl
    private readonly API = this.API_BASE + 'auth/login';

    constructor(private http: HttpClient, private cookie: CookieService, private router: Router) {
    }

    login(password: string) {
        return this.postWithAuth<{ token: string, role: string }>('auth/login', {password})
            .pipe(
                tap(resp => {
                    if (resp.token) {
                        this.cookie.set(this.TOKEN_NAME, resp.token);
                    }
                }),
                map(response => !!response.token),
                catchError(() => of(false))
            )
    }

    logout() {
        this.cookie.delete(this.TOKEN_NAME);
        this.router.navigate(['']);
    }

    isLoggedIn(): boolean {
        return !!this.cookie.get(this.TOKEN_NAME);
    }

    isAdmin(): boolean {
        return this.getRole() === 'admin';
    }

    isRecruiter(): boolean {
        return this.getRole() === 'recruiter';
    }

    hasRights(): boolean {
        return this.isAdmin() || this.isRecruiter();
    }

    getRoleCapitalized(): string {
        let role = this.getRole()
        if (role === undefined) return ''
        return role.charAt(0).toUpperCase() + role.slice(1)
    }

    getWithAuth<T>(route: string) {
        return this.http.get<T>(this.API_BASE + route, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.cookie.get(this.TOKEN_NAME)
            }
        })
    }

    get<T>(route: string) {
        return this.http.get<T>(this.API_BASE + route)
    }

    postWithAuth<T>(route: string, body: any) {
        return this.http.post<T>(this.API_BASE + route, body, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.cookie.get(this.TOKEN_NAME)
            }
        })
    }

    private getRole(): string | undefined {
        let token = this.cookie.get(this.TOKEN_NAME);
        if (token === '') return undefined
        return jwtDecode<TokenPayload>(token).role
    }

}
