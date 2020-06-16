/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class ReactDocGenService {
    /**
     * @param {?} data
     * @return {?}
     */
    aggregate(data) {
        return [
            {
                uri: 'README.md',
                value: this.renderReadme(data.meta.app),
                language: 'markdown',
                kind: 'text'
            }
        ];
    }
    /**
     * @private
     * @param {?} name
     * @return {?}
     */
    renderReadme(name) {
        return `\
## How to use the ${name} react module

Import and use it with ReactDOM :

\`\`\`javascript
import ReactDOM from "react-dom";
import { MyComponent } from "./my-component";

ReactDOM.render(
  MyComponent,
  document.getElementById(\'root\')
);
\`\`\`

>  For more information about [Reactjs](https://reactjs.org/)`;
    }
}
ReactDocGenService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ ReactDocGenService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ReactDocGenService_Factory() { return new ReactDocGenService(); }, token: ReactDocGenService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3QtZG9jZ2VuLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGxheWVycy9yZWFjdC1jb2RlZ2VuLyIsInNvdXJjZXMiOlsibGliL3JlYWN0LWRvY2dlbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUszQyxNQUFNLE9BQU8sa0JBQWtCOzs7OztJQUM3QixTQUFTLENBQUMsSUFBa0I7UUFDMUIsT0FBTztZQUNMO2dCQUNFLEdBQUcsRUFBRSxXQUFXO2dCQUNoQixLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFDdkMsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLElBQUksRUFBRSxNQUFNO2FBQ2I7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRU8sWUFBWSxDQUFDLElBQVk7UUFDL0IsT0FBTztvQkFDUyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs4REFjc0MsQ0FBQztJQUM3RCxDQUFDOzs7WUFoQ0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVhY3REb2NHZW5TZXJ2aWNlIHtcclxuICBhZ2dyZWdhdGUoZGF0YTogU2tldGNoTVNEYXRhKSB7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICB7XHJcbiAgICAgICAgdXJpOiAnUkVBRE1FLm1kJyxcclxuICAgICAgICB2YWx1ZTogdGhpcy5yZW5kZXJSZWFkbWUoZGF0YS5tZXRhLmFwcCksXHJcbiAgICAgICAgbGFuZ3VhZ2U6ICdtYXJrZG93bicsXHJcbiAgICAgICAga2luZDogJ3RleHQnXHJcbiAgICAgIH1cclxuICAgIF07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbmRlclJlYWRtZShuYW1lOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBgXFxcclxuIyMgSG93IHRvIHVzZSB0aGUgJHtuYW1lfSByZWFjdCBtb2R1bGVcclxuXHJcbkltcG9ydCBhbmQgdXNlIGl0IHdpdGggUmVhY3RET00gOlxyXG5cclxuXFxgXFxgXFxgamF2YXNjcmlwdFxyXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgeyBNeUNvbXBvbmVudCB9IGZyb20gXCIuL215LWNvbXBvbmVudFwiO1xyXG5cclxuUmVhY3RET00ucmVuZGVyKFxyXG4gIE15Q29tcG9uZW50LFxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxcJ3Jvb3RcXCcpXHJcbik7XHJcblxcYFxcYFxcYFxyXG5cclxuPiAgRm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgW1JlYWN0anNdKGh0dHBzOi8vcmVhY3Rqcy5vcmcvKWA7XHJcbiAgfVxyXG59XHJcbiJdfQ==