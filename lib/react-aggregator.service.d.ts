/// <reference types="sketchapp" />
import { FormatService } from '@xlayers/sketch-lib';
import { WebCodeGenService } from '@xlayers/web-codegen';
declare type WebCodeGenOptions = any;
export declare class ReactAggregatorService {
    private readonly formatService;
    private readonly webCodeGenService;
    constructor(formatService: FormatService, webCodeGenService: WebCodeGenService);
    aggregate(current: SketchMSLayer, data: SketchMSData, options: WebCodeGenOptions): any[];
    private renderComponent;
    private renderSpec;
    private renderImportStatements;
    private generateDynamicImport;
}
export {};
