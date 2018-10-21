import { MSGraphClient } from "@microsoft/sp-client-preview";
import { Observable } from 'rxjs';
export declare class GraphService {
    getMe(client: MSGraphClient): Observable<{
        displayName: string;
    }>;
}
