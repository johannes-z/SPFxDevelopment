import { OnInit, ChangeDetectorRef } from "@angular/core";
import { GraphService } from "./graph.service";
import { MSGraphClient } from "@microsoft/sp-client-preview";
export declare class HelloGraphComponent implements OnInit {
    private graphService;
    private cd;
    client: MSGraphClient;
    displayName: string;
    constructor(graphService: GraphService, cd: ChangeDetectorRef);
    ngOnInit(): void;
}
