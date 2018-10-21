import { Observable } from 'rxjs';
export declare class GraphService {
    getMe(): Observable<{
        displayName: string;
    }>;
}
