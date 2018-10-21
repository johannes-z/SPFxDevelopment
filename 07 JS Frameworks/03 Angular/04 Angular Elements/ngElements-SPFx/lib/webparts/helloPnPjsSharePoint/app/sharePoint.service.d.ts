import { Observable } from 'rxjs';
export declare class SharePointService {
    getSiteTitle(): Observable<{
        Title: string;
    }>;
}
