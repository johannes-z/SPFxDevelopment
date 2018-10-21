import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export declare class SharePointService {
    private http;
    constructor(http: HttpClient);
    getSiteTitle(siteUrl: string): Observable<{
        Title: string;
    }>;
}
