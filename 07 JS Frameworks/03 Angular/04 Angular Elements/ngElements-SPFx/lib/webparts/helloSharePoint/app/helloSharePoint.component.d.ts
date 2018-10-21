import { OnInit, ChangeDetectorRef } from "@angular/core";
import { SharePointService } from "./sharePoint.service";
export declare class HelloSharePointComponent implements OnInit {
    private sharePointService;
    private cd;
    siteUrl: string;
    title: string;
    constructor(sharePointService: SharePointService, cd: ChangeDetectorRef);
    ngOnInit(): void;
}
