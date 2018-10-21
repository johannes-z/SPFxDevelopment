import { OnInit, ChangeDetectorRef } from "@angular/core";
import { GraphService } from "./graph.service";
export declare class HelloPnPJSGraphComponent implements OnInit {
    private graphService;
    private cd;
    displayName: string;
    constructor(graphService: GraphService, cd: ChangeDetectorRef);
    ngOnInit(): void;
}
