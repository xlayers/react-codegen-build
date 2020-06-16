/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { FormatService } from '@xlayers/sketch-lib';
import { WebCodeGenService } from '@xlayers/web-codegen';
import * as i0 from "@angular/core";
import * as i1 from "@xlayers/sketch-lib";
import * as i2 from "@xlayers/web-codegen";
var ReactAggregatorService = /** @class */ (function () {
    function ReactAggregatorService(formatService, webCodeGenService) {
        this.formatService = formatService;
        this.webCodeGenService = webCodeGenService;
    }
    /**
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    ReactAggregatorService.prototype.aggregate = /**
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    function (current, data, options) {
        /** @type {?} */
        var fileName = this.formatService.normalizeName(current.name);
        /** @type {?} */
        var files = this.webCodeGenService.aggregate(current, data, options);
        /** @type {?} */
        var html = files.find((/**
         * @param {?} file
         * @return {?}
         */
        function (file) { return file.language === 'html'; }));
        return tslib_1.__spread([
            {
                kind: 'react',
                value: this.renderComponent(current, html.value),
                language: 'javascript',
                uri: options.componentDir + "/" + fileName + ".jsx"
            },
            {
                kind: 'react',
                value: this.renderSpec(current),
                language: 'javascript',
                uri: options.componentDir + "/" + fileName + ".spec.js"
            }
        ], files
            .filter((/**
         * @param {?} file
         * @return {?}
         */
        function (file) { return file.language !== 'html'; }))
            .map((/**
         * @param {?} file
         * @return {?}
         */
        function (file) { return (tslib_1.__assign({}, file, { kind: 'react' })); })));
    };
    /**
     * @private
     * @param {?} current
     * @param {?} html
     * @return {?}
     */
    ReactAggregatorService.prototype.renderComponent = /**
     * @private
     * @param {?} current
     * @param {?} html
     * @return {?}
     */
    function (current, html) {
        /** @type {?} */
        var className = this.formatService.className(current.name);
        /** @type {?} */
        var importStatements = this.renderImportStatements(current);
        return importStatements + "\n\nclass " + className + " extends Component {\n  render() {\n    return (\n      " + this.formatService.indentFile(1, html).join('\n') + "\n    );\n  }\n}\n\nexport default " + className + ";";
    };
    /**
     * @private
     * @param {?} current
     * @return {?}
     */
    ReactAggregatorService.prototype.renderSpec = /**
     * @private
     * @param {?} current
     * @return {?}
     */
    function (current) {
        /** @type {?} */
        var className = this.formatService.className(current.name);
        /** @type {?} */
        var fileName = this.formatService.normalizeName(current.name);
        return "import React from 'react';\nimport ReactDOM from 'react-dom';\nimport " + className + " from './" + fileName + "';\nit('renders without crashing', () => {\n  const div = document.createElement('div');\n  ReactDOM.render(<" + className + " />, div);\n  ReactDOM.unmountComponentAtNode(div);\n})";
    };
    /**
     * @private
     * @param {?} current
     * @return {?}
     */
    ReactAggregatorService.prototype.renderImportStatements = /**
     * @private
     * @param {?} current
     * @return {?}
     */
    function (current) {
        /** @type {?} */
        var fileName = this.formatService.normalizeName(current.name);
        return tslib_1.__spread([
            'import React, { Component } from \'react\';'
        ], this.generateDynamicImport(current), [
            "import './" + fileName + ".css';"
        ]).join('\n');
    };
    /**
     * @private
     * @param {?} current
     * @return {?}
     */
    ReactAggregatorService.prototype.generateDynamicImport = /**
     * @private
     * @param {?} current
     * @return {?}
     */
    function (current) {
        var _this = this;
        /** @type {?} */
        var context = this.webCodeGenService.context(current);
        return context && context.components
            ? context.components.map((/**
             * @param {?} component
             * @return {?}
             */
            function (component) {
                /** @type {?} */
                var importclassName = _this.formatService.className(component);
                /** @type {?} */
                var importFileName = _this.formatService.normalizeName(component);
                return "import { " + importclassName + " } from \"./" + importFileName + "\";";
            }))
            : [];
    };
    ReactAggregatorService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ReactAggregatorService.ctorParameters = function () { return [
        { type: FormatService },
        { type: WebCodeGenService }
    ]; };
    /** @nocollapse */ ReactAggregatorService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ReactAggregatorService_Factory() { return new ReactAggregatorService(i0.ɵɵinject(i1.FormatService), i0.ɵɵinject(i2.WebCodeGenService)); }, token: ReactAggregatorService, providedIn: "root" });
    return ReactAggregatorService;
}());
export { ReactAggregatorService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ReactAggregatorService.prototype.formatService;
    /**
     * @type {?}
     * @private
     */
    ReactAggregatorService.prototype.webCodeGenService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3QtYWdncmVnYXRvci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhsYXllcnMvcmVhY3QtY29kZWdlbi8iLCJzb3VyY2VzIjpbImxpYi9yZWFjdC1hZ2dyZWdhdG9yLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7OztBQUl6RDtJQUlFLGdDQUNtQixhQUE0QixFQUM1QixpQkFBb0M7UUFEcEMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtJQUNwRCxDQUFDOzs7Ozs7O0lBRUosMENBQVM7Ozs7OztJQUFULFVBQ0UsT0FBc0IsRUFDdEIsSUFBa0IsRUFDbEIsT0FBMEI7O1lBRXBCLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDOztZQUN6RCxLQUFLLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQzs7WUFDaEUsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJOzs7O1FBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsUUFBUSxLQUFLLE1BQU0sRUFBeEIsQ0FBd0IsRUFBQztRQUV6RDtZQUNFO2dCQUNFLElBQUksRUFBRSxPQUFPO2dCQUNiLEtBQUssRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUNoRCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsR0FBRyxFQUFLLE9BQU8sQ0FBQyxZQUFZLFNBQUksUUFBUSxTQUFNO2FBQy9DO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO2dCQUMvQixRQUFRLEVBQUUsWUFBWTtnQkFDdEIsR0FBRyxFQUFLLE9BQU8sQ0FBQyxZQUFZLFNBQUksUUFBUSxhQUFVO2FBQ25EO1dBQ0UsS0FBSzthQUNMLE1BQU07Ozs7UUFBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxRQUFRLEtBQUssTUFBTSxFQUF4QixDQUF3QixFQUFDO2FBQ3hDLEdBQUc7Ozs7UUFBQyxVQUFBLElBQUksSUFBSSxPQUFBLHNCQUNSLElBQUksSUFDUCxJQUFJLEVBQUUsT0FBTyxJQUNiLEVBSFcsQ0FHWCxFQUFDLEVBQ0w7SUFDSixDQUFDOzs7Ozs7O0lBRU8sZ0RBQWU7Ozs7OztJQUF2QixVQUF3QixPQUFzQixFQUFFLElBQVk7O1lBQ3BELFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDOztZQUN0RCxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsT0FBTyxDQUFDO1FBQzdELE9BQ0YsZ0JBQWdCLGtCQUVWLFNBQVMsZ0VBR1QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsMkNBS3hDLFNBQVMsTUFBRyxDQUFDO0lBQzVCLENBQUM7Ozs7OztJQUVPLDJDQUFVOzs7OztJQUFsQixVQUFtQixPQUFzQjs7WUFDakMsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7O1lBQ3RELFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBQy9ELE9BQU8sMkVBR0YsU0FBUyxpQkFBWSxRQUFRLHFIQUdqQixTQUFTLDREQUUzQixDQUFDO0lBQ0YsQ0FBQzs7Ozs7O0lBRU8sdURBQXNCOzs7OztJQUE5QixVQUErQixPQUFzQjs7WUFDN0MsUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFDL0QsT0FBTztZQUNMLDZDQUE2QztXQUMxQyxJQUFJLENBQUMscUJBQXFCLENBQUMsT0FBTyxDQUFDO1lBQ3RDLGVBQWMsUUFBUSxXQUFTO1dBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNmLENBQUM7Ozs7OztJQUVPLHNEQUFxQjs7Ozs7SUFBN0IsVUFBOEIsT0FBc0I7UUFBcEQsaUJBU0M7O1lBUk8sT0FBTyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1FBQ3ZELE9BQU8sT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFVO1lBQ2xDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUc7Ozs7WUFBQyxVQUFBLFNBQVM7O29CQUMxQixlQUFlLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDOztvQkFDekQsY0FBYyxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQztnQkFDbEUsT0FBTyxjQUFZLGVBQWUsb0JBQWMsY0FBYyxRQUFJLENBQUM7WUFDckUsQ0FBQyxFQUFDO1lBQ0YsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNULENBQUM7O2dCQXpGRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVBRLGFBQWE7Z0JBQ2IsaUJBQWlCOzs7aUNBRjFCO0NBZ0dDLEFBMUZELElBMEZDO1NBdkZZLHNCQUFzQjs7Ozs7O0lBRS9CLCtDQUE2Qzs7Ozs7SUFDN0MsbURBQXFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtYXRTZXJ2aWNlIH0gZnJvbSAnQHhsYXllcnMvc2tldGNoLWxpYic7XHJcbmltcG9ydCB7IFdlYkNvZGVHZW5TZXJ2aWNlIH0gZnJvbSAnQHhsYXllcnMvd2ViLWNvZGVnZW4nO1xyXG5cclxudHlwZSBXZWJDb2RlR2VuT3B0aW9ucyA9IGFueTtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFJlYWN0QWdncmVnYXRvclNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBmb3JtYXRTZXJ2aWNlOiBGb3JtYXRTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByZWFkb25seSB3ZWJDb2RlR2VuU2VydmljZTogV2ViQ29kZUdlblNlcnZpY2VcclxuICApIHt9XHJcblxyXG4gIGFnZ3JlZ2F0ZShcclxuICAgIGN1cnJlbnQ6IFNrZXRjaE1TTGF5ZXIsXHJcbiAgICBkYXRhOiBTa2V0Y2hNU0RhdGEsXHJcbiAgICBvcHRpb25zOiBXZWJDb2RlR2VuT3B0aW9uc1xyXG4gICkge1xyXG4gICAgY29uc3QgZmlsZU5hbWUgPSB0aGlzLmZvcm1hdFNlcnZpY2Uubm9ybWFsaXplTmFtZShjdXJyZW50Lm5hbWUpO1xyXG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLndlYkNvZGVHZW5TZXJ2aWNlLmFnZ3JlZ2F0ZShjdXJyZW50LCBkYXRhLCBvcHRpb25zKTtcclxuICAgIGNvbnN0IGh0bWwgPSBmaWxlcy5maW5kKGZpbGUgPT4gZmlsZS5sYW5ndWFnZSA9PT0gJ2h0bWwnKTtcclxuXHJcbiAgICByZXR1cm4gW1xyXG4gICAgICB7XHJcbiAgICAgICAga2luZDogJ3JlYWN0JyxcclxuICAgICAgICB2YWx1ZTogdGhpcy5yZW5kZXJDb21wb25lbnQoY3VycmVudCwgaHRtbC52YWx1ZSksXHJcbiAgICAgICAgbGFuZ3VhZ2U6ICdqYXZhc2NyaXB0JyxcclxuICAgICAgICB1cmk6IGAke29wdGlvbnMuY29tcG9uZW50RGlyfS8ke2ZpbGVOYW1lfS5qc3hgXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBraW5kOiAncmVhY3QnLFxyXG4gICAgICAgIHZhbHVlOiB0aGlzLnJlbmRlclNwZWMoY3VycmVudCksXHJcbiAgICAgICAgbGFuZ3VhZ2U6ICdqYXZhc2NyaXB0JyxcclxuICAgICAgICB1cmk6IGAke29wdGlvbnMuY29tcG9uZW50RGlyfS8ke2ZpbGVOYW1lfS5zcGVjLmpzYFxyXG4gICAgICB9LFxyXG4gICAgICAuLi5maWxlc1xyXG4gICAgICAgIC5maWx0ZXIoZmlsZSA9PiBmaWxlLmxhbmd1YWdlICE9PSAnaHRtbCcpXHJcbiAgICAgICAgLm1hcChmaWxlID0+ICh7XHJcbiAgICAgICAgICAuLi5maWxlLFxyXG4gICAgICAgICAga2luZDogJ3JlYWN0J1xyXG4gICAgICAgIH0pKVxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVuZGVyQ29tcG9uZW50KGN1cnJlbnQ6IFNrZXRjaE1TTGF5ZXIsIGh0bWw6IHN0cmluZykge1xyXG4gICAgY29uc3QgY2xhc3NOYW1lID0gdGhpcy5mb3JtYXRTZXJ2aWNlLmNsYXNzTmFtZShjdXJyZW50Lm5hbWUpO1xyXG4gICAgY29uc3QgaW1wb3J0U3RhdGVtZW50cyA9IHRoaXMucmVuZGVySW1wb3J0U3RhdGVtZW50cyhjdXJyZW50KTtcclxuICAgIHJldHVybiBgXFxcclxuJHtpbXBvcnRTdGF0ZW1lbnRzfVxyXG5cclxuY2xhc3MgJHtjbGFzc05hbWV9IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAke3RoaXMuZm9ybWF0U2VydmljZS5pbmRlbnRGaWxlKDEsIGh0bWwpLmpvaW4oJ1xcbicpfVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0ICR7Y2xhc3NOYW1lfTtgO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW5kZXJTcGVjKGN1cnJlbnQ6IFNrZXRjaE1TTGF5ZXIpIHtcclxuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMuZm9ybWF0U2VydmljZS5jbGFzc05hbWUoY3VycmVudC5uYW1lKTtcclxuICAgIGNvbnN0IGZpbGVOYW1lID0gdGhpcy5mb3JtYXRTZXJ2aWNlLm5vcm1hbGl6ZU5hbWUoY3VycmVudC5uYW1lKTtcclxuICAgIHJldHVybiBgXFxcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCAke2NsYXNzTmFtZX0gZnJvbSAnLi8ke2ZpbGVOYW1lfSc7XHJcbml0KCdyZW5kZXJzIHdpdGhvdXQgY3Jhc2hpbmcnLCAoKSA9PiB7XHJcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgUmVhY3RET00ucmVuZGVyKDwke2NsYXNzTmFtZX0gLz4sIGRpdik7XHJcbiAgUmVhY3RET00udW5tb3VudENvbXBvbmVudEF0Tm9kZShkaXYpO1xyXG59KWA7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbmRlckltcG9ydFN0YXRlbWVudHMoY3VycmVudDogU2tldGNoTVNMYXllcikge1xyXG4gICAgY29uc3QgZmlsZU5hbWUgPSB0aGlzLmZvcm1hdFNlcnZpY2Uubm9ybWFsaXplTmFtZShjdXJyZW50Lm5hbWUpO1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAgJ2ltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFxcJ3JlYWN0XFwnOycsXHJcbiAgICAgIC4uLnRoaXMuZ2VuZXJhdGVEeW5hbWljSW1wb3J0KGN1cnJlbnQpLFxyXG4gICAgICBgaW1wb3J0IFxcJy4vJHtmaWxlTmFtZX0uY3NzXFwnO2BcclxuICAgIF0uam9pbignXFxuJyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdlbmVyYXRlRHluYW1pY0ltcG9ydChjdXJyZW50OiBTa2V0Y2hNU0xheWVyKSB7XHJcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy53ZWJDb2RlR2VuU2VydmljZS5jb250ZXh0KGN1cnJlbnQpO1xyXG4gICAgcmV0dXJuIGNvbnRleHQgJiYgY29udGV4dC5jb21wb25lbnRzXHJcbiAgICAgID8gY29udGV4dC5jb21wb25lbnRzLm1hcChjb21wb25lbnQgPT4ge1xyXG4gICAgICAgIGNvbnN0IGltcG9ydGNsYXNzTmFtZSA9IHRoaXMuZm9ybWF0U2VydmljZS5jbGFzc05hbWUoY29tcG9uZW50KTtcclxuICAgICAgICBjb25zdCBpbXBvcnRGaWxlTmFtZSA9IHRoaXMuZm9ybWF0U2VydmljZS5ub3JtYWxpemVOYW1lKGNvbXBvbmVudCk7XHJcbiAgICAgICAgcmV0dXJuIGBpbXBvcnQgeyAke2ltcG9ydGNsYXNzTmFtZX0gfSBmcm9tIFwiLi8ke2ltcG9ydEZpbGVOYW1lfVwiO2A7XHJcbiAgICAgIH0pXHJcbiAgICAgIDogW107XHJcbiAgfVxyXG59XHJcbiJdfQ==