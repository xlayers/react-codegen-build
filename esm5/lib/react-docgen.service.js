/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var ReactDocGenService = /** @class */ (function () {
    function ReactDocGenService() {
    }
    /**
     * @param {?} data
     * @return {?}
     */
    ReactDocGenService.prototype.aggregate = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return [
            {
                uri: 'README.md',
                value: this.renderReadme(data.meta.app),
                language: 'markdown',
                kind: 'text'
            }
        ];
    };
    /**
     * @private
     * @param {?} name
     * @return {?}
     */
    ReactDocGenService.prototype.renderReadme = /**
     * @private
     * @param {?} name
     * @return {?}
     */
    function (name) {
        return "## How to use the " + name + " react module\n\nImport and use it with ReactDOM :\n\n```javascript\nimport ReactDOM from \"react-dom\";\nimport { MyComponent } from \"./my-component\";\n\nReactDOM.render(\n  MyComponent,\n  document.getElementById('root')\n);\n```\n\n>  For more information about [Reactjs](https://reactjs.org/)";
    };
    ReactDocGenService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ ReactDocGenService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ReactDocGenService_Factory() { return new ReactDocGenService(); }, token: ReactDocGenService, providedIn: "root" });
    return ReactDocGenService;
}());
export { ReactDocGenService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3QtZG9jZ2VuLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGxheWVycy9yZWFjdC1jb2RlZ2VuLyIsInNvdXJjZXMiOlsibGliL3JlYWN0LWRvY2dlbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUUzQztJQUFBO0tBaUNDOzs7OztJQTdCQyxzQ0FBUzs7OztJQUFULFVBQVUsSUFBa0I7UUFDMUIsT0FBTztZQUNMO2dCQUNFLEdBQUcsRUFBRSxXQUFXO2dCQUNoQixLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFDdkMsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLElBQUksRUFBRSxNQUFNO2FBQ2I7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRU8seUNBQVk7Ozs7O0lBQXBCLFVBQXFCLElBQVk7UUFDL0IsT0FBTyx1QkFDUyxJQUFJLCtTQWNzQyxDQUFDO0lBQzdELENBQUM7O2dCQWhDRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7NkJBSkQ7Q0FtQ0MsQUFqQ0QsSUFpQ0M7U0E5Qlksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVhY3REb2NHZW5TZXJ2aWNlIHtcclxuICBhZ2dyZWdhdGUoZGF0YTogU2tldGNoTVNEYXRhKSB7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICB7XHJcbiAgICAgICAgdXJpOiAnUkVBRE1FLm1kJyxcclxuICAgICAgICB2YWx1ZTogdGhpcy5yZW5kZXJSZWFkbWUoZGF0YS5tZXRhLmFwcCksXHJcbiAgICAgICAgbGFuZ3VhZ2U6ICdtYXJrZG93bicsXHJcbiAgICAgICAga2luZDogJ3RleHQnXHJcbiAgICAgIH1cclxuICAgIF07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbmRlclJlYWRtZShuYW1lOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBgXFxcclxuIyMgSG93IHRvIHVzZSB0aGUgJHtuYW1lfSByZWFjdCBtb2R1bGVcclxuXHJcbkltcG9ydCBhbmQgdXNlIGl0IHdpdGggUmVhY3RET00gOlxyXG5cclxuXFxgXFxgXFxgamF2YXNjcmlwdFxyXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgeyBNeUNvbXBvbmVudCB9IGZyb20gXCIuL215LWNvbXBvbmVudFwiO1xyXG5cclxuUmVhY3RET00ucmVuZGVyKFxyXG4gIE15Q29tcG9uZW50LFxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxcJ3Jvb3RcXCcpXHJcbik7XHJcblxcYFxcYFxcYFxyXG5cclxuPiAgRm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgW1JlYWN0anNdKGh0dHBzOi8vcmVhY3Rqcy5vcmcvKWA7XHJcbiAgfVxyXG59XHJcbiJdfQ==