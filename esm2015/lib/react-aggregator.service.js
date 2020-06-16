/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FormatService } from '@xlayers/sketch-lib';
import { WebCodeGenService } from '@xlayers/web-codegen';
import * as i0 from "@angular/core";
import * as i1 from "@xlayers/sketch-lib";
import * as i2 from "@xlayers/web-codegen";
export class ReactAggregatorService {
    /**
     * @param {?} formatService
     * @param {?} webCodeGenService
     */
    constructor(formatService, webCodeGenService) {
        this.formatService = formatService;
        this.webCodeGenService = webCodeGenService;
    }
    /**
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    aggregate(current, data, options) {
        /** @type {?} */
        const fileName = this.formatService.normalizeName(current.name);
        /** @type {?} */
        const files = this.webCodeGenService.aggregate(current, data, options);
        /** @type {?} */
        const html = files.find((/**
         * @param {?} file
         * @return {?}
         */
        file => file.language === 'html'));
        return [
            {
                kind: 'react',
                value: this.renderComponent(current, html.value),
                language: 'javascript',
                uri: `${options.componentDir}/${fileName}.jsx`
            },
            {
                kind: 'react',
                value: this.renderSpec(current),
                language: 'javascript',
                uri: `${options.componentDir}/${fileName}.spec.js`
            },
            ...files
                .filter((/**
             * @param {?} file
             * @return {?}
             */
            file => file.language !== 'html'))
                .map((/**
             * @param {?} file
             * @return {?}
             */
            file => (Object.assign({}, file, { kind: 'react' }))))
        ];
    }
    /**
     * @private
     * @param {?} current
     * @param {?} html
     * @return {?}
     */
    renderComponent(current, html) {
        /** @type {?} */
        const className = this.formatService.className(current.name);
        /** @type {?} */
        const importStatements = this.renderImportStatements(current);
        return `\
${importStatements}

class ${className} extends Component {
  render() {
    return (
      ${this.formatService.indentFile(1, html).join('\n')}
    );
  }
}

export default ${className};`;
    }
    /**
     * @private
     * @param {?} current
     * @return {?}
     */
    renderSpec(current) {
        /** @type {?} */
        const className = this.formatService.className(current.name);
        /** @type {?} */
        const fileName = this.formatService.normalizeName(current.name);
        return `\
import React from 'react';
import ReactDOM from 'react-dom';
import ${className} from './${fileName}';
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<${className} />, div);
  ReactDOM.unmountComponentAtNode(div);
})`;
    }
    /**
     * @private
     * @param {?} current
     * @return {?}
     */
    renderImportStatements(current) {
        /** @type {?} */
        const fileName = this.formatService.normalizeName(current.name);
        return [
            'import React, { Component } from \'react\';',
            ...this.generateDynamicImport(current),
            `import \'./${fileName}.css\';`
        ].join('\n');
    }
    /**
     * @private
     * @param {?} current
     * @return {?}
     */
    generateDynamicImport(current) {
        /** @type {?} */
        const context = this.webCodeGenService.context(current);
        return context && context.components
            ? context.components.map((/**
             * @param {?} component
             * @return {?}
             */
            component => {
                /** @type {?} */
                const importclassName = this.formatService.className(component);
                /** @type {?} */
                const importFileName = this.formatService.normalizeName(component);
                return `import { ${importclassName} } from "./${importFileName}";`;
            }))
            : [];
    }
}
ReactAggregatorService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ReactAggregatorService.ctorParameters = () => [
    { type: FormatService },
    { type: WebCodeGenService }
];
/** @nocollapse */ ReactAggregatorService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ReactAggregatorService_Factory() { return new ReactAggregatorService(i0.ɵɵinject(i1.FormatService), i0.ɵɵinject(i2.WebCodeGenService)); }, token: ReactAggregatorService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3QtYWdncmVnYXRvci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhsYXllcnMvcmVhY3QtY29kZWdlbi8iLCJzb3VyY2VzIjpbImxpYi9yZWFjdC1hZ2dyZWdhdG9yLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7O0FBT3pELE1BQU0sT0FBTyxzQkFBc0I7Ozs7O0lBQ2pDLFlBQ21CLGFBQTRCLEVBQzVCLGlCQUFvQztRQURwQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBQ3BELENBQUM7Ozs7Ozs7SUFFSixTQUFTLENBQ1AsT0FBc0IsRUFDdEIsSUFBa0IsRUFDbEIsT0FBMEI7O2NBRXBCLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDOztjQUN6RCxLQUFLLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQzs7Y0FDaEUsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLE1BQU0sRUFBQztRQUV6RCxPQUFPO1lBQ0w7Z0JBQ0UsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsS0FBSyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQ2hELFFBQVEsRUFBRSxZQUFZO2dCQUN0QixHQUFHLEVBQUUsR0FBRyxPQUFPLENBQUMsWUFBWSxJQUFJLFFBQVEsTUFBTTthQUMvQztZQUNEO2dCQUNFLElBQUksRUFBRSxPQUFPO2dCQUNiLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQztnQkFDL0IsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLEdBQUcsRUFBRSxHQUFHLE9BQU8sQ0FBQyxZQUFZLElBQUksUUFBUSxVQUFVO2FBQ25EO1lBQ0QsR0FBRyxLQUFLO2lCQUNMLE1BQU07Ozs7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssTUFBTSxFQUFDO2lCQUN4QyxHQUFHOzs7O1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxtQkFDUixJQUFJLElBQ1AsSUFBSSxFQUFFLE9BQU8sSUFDYixFQUFDO1NBQ04sQ0FBQztJQUNKLENBQUM7Ozs7Ozs7SUFFTyxlQUFlLENBQUMsT0FBc0IsRUFBRSxJQUFZOztjQUNwRCxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQzs7Y0FDdEQsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQztRQUM3RCxPQUFPO0VBQ1QsZ0JBQWdCOztRQUVWLFNBQVM7OztRQUdULElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDOzs7OztpQkFLeEMsU0FBUyxHQUFHLENBQUM7SUFDNUIsQ0FBQzs7Ozs7O0lBRU8sVUFBVSxDQUFDLE9BQXNCOztjQUNqQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQzs7Y0FDdEQsUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFDL0QsT0FBTzs7O1NBR0YsU0FBUyxZQUFZLFFBQVE7OztxQkFHakIsU0FBUzs7R0FFM0IsQ0FBQztJQUNGLENBQUM7Ozs7OztJQUVPLHNCQUFzQixDQUFDLE9BQXNCOztjQUM3QyxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztRQUMvRCxPQUFPO1lBQ0wsNkNBQTZDO1lBQzdDLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQztZQUN0QyxjQUFjLFFBQVEsU0FBUztTQUNoQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNmLENBQUM7Ozs7OztJQUVPLHFCQUFxQixDQUFDLE9BQXNCOztjQUM1QyxPQUFPLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7UUFDdkQsT0FBTyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQVU7WUFDbEMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsR0FBRzs7OztZQUFDLFNBQVMsQ0FBQyxFQUFFOztzQkFDN0IsZUFBZSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQzs7c0JBQ3pELGNBQWMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUM7Z0JBQ2xFLE9BQU8sWUFBWSxlQUFlLGNBQWMsY0FBYyxJQUFJLENBQUM7WUFDckUsQ0FBQyxFQUFDO1lBQ0YsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNULENBQUM7OztZQXpGRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFQUSxhQUFhO1lBQ2IsaUJBQWlCOzs7Ozs7OztJQVN0QiwrQ0FBNkM7Ozs7O0lBQzdDLG1EQUFxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybWF0U2VydmljZSB9IGZyb20gJ0B4bGF5ZXJzL3NrZXRjaC1saWInO1xyXG5pbXBvcnQgeyBXZWJDb2RlR2VuU2VydmljZSB9IGZyb20gJ0B4bGF5ZXJzL3dlYi1jb2RlZ2VuJztcclxuXHJcbnR5cGUgV2ViQ29kZUdlbk9wdGlvbnMgPSBhbnk7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZWFjdEFnZ3JlZ2F0b3JTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0U2VydmljZTogRm9ybWF0U2VydmljZSxcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgd2ViQ29kZUdlblNlcnZpY2U6IFdlYkNvZGVHZW5TZXJ2aWNlXHJcbiAgKSB7fVxyXG5cclxuICBhZ2dyZWdhdGUoXHJcbiAgICBjdXJyZW50OiBTa2V0Y2hNU0xheWVyLFxyXG4gICAgZGF0YTogU2tldGNoTVNEYXRhLFxyXG4gICAgb3B0aW9uczogV2ViQ29kZUdlbk9wdGlvbnNcclxuICApIHtcclxuICAgIGNvbnN0IGZpbGVOYW1lID0gdGhpcy5mb3JtYXRTZXJ2aWNlLm5vcm1hbGl6ZU5hbWUoY3VycmVudC5uYW1lKTtcclxuICAgIGNvbnN0IGZpbGVzID0gdGhpcy53ZWJDb2RlR2VuU2VydmljZS5hZ2dyZWdhdGUoY3VycmVudCwgZGF0YSwgb3B0aW9ucyk7XHJcbiAgICBjb25zdCBodG1sID0gZmlsZXMuZmluZChmaWxlID0+IGZpbGUubGFuZ3VhZ2UgPT09ICdodG1sJyk7XHJcblxyXG4gICAgcmV0dXJuIFtcclxuICAgICAge1xyXG4gICAgICAgIGtpbmQ6ICdyZWFjdCcsXHJcbiAgICAgICAgdmFsdWU6IHRoaXMucmVuZGVyQ29tcG9uZW50KGN1cnJlbnQsIGh0bWwudmFsdWUpLFxyXG4gICAgICAgIGxhbmd1YWdlOiAnamF2YXNjcmlwdCcsXHJcbiAgICAgICAgdXJpOiBgJHtvcHRpb25zLmNvbXBvbmVudERpcn0vJHtmaWxlTmFtZX0uanN4YFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAga2luZDogJ3JlYWN0JyxcclxuICAgICAgICB2YWx1ZTogdGhpcy5yZW5kZXJTcGVjKGN1cnJlbnQpLFxyXG4gICAgICAgIGxhbmd1YWdlOiAnamF2YXNjcmlwdCcsXHJcbiAgICAgICAgdXJpOiBgJHtvcHRpb25zLmNvbXBvbmVudERpcn0vJHtmaWxlTmFtZX0uc3BlYy5qc2BcclxuICAgICAgfSxcclxuICAgICAgLi4uZmlsZXNcclxuICAgICAgICAuZmlsdGVyKGZpbGUgPT4gZmlsZS5sYW5ndWFnZSAhPT0gJ2h0bWwnKVxyXG4gICAgICAgIC5tYXAoZmlsZSA9PiAoe1xyXG4gICAgICAgICAgLi4uZmlsZSxcclxuICAgICAgICAgIGtpbmQ6ICdyZWFjdCdcclxuICAgICAgICB9KSlcclxuICAgIF07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbmRlckNvbXBvbmVudChjdXJyZW50OiBTa2V0Y2hNU0xheWVyLCBodG1sOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMuZm9ybWF0U2VydmljZS5jbGFzc05hbWUoY3VycmVudC5uYW1lKTtcclxuICAgIGNvbnN0IGltcG9ydFN0YXRlbWVudHMgPSB0aGlzLnJlbmRlckltcG9ydFN0YXRlbWVudHMoY3VycmVudCk7XHJcbiAgICByZXR1cm4gYFxcXHJcbiR7aW1wb3J0U3RhdGVtZW50c31cclxuXHJcbmNsYXNzICR7Y2xhc3NOYW1lfSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgJHt0aGlzLmZvcm1hdFNlcnZpY2UuaW5kZW50RmlsZSgxLCBodG1sKS5qb2luKCdcXG4nKX1cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCAke2NsYXNzTmFtZX07YDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVuZGVyU3BlYyhjdXJyZW50OiBTa2V0Y2hNU0xheWVyKSB7XHJcbiAgICBjb25zdCBjbGFzc05hbWUgPSB0aGlzLmZvcm1hdFNlcnZpY2UuY2xhc3NOYW1lKGN1cnJlbnQubmFtZSk7XHJcbiAgICBjb25zdCBmaWxlTmFtZSA9IHRoaXMuZm9ybWF0U2VydmljZS5ub3JtYWxpemVOYW1lKGN1cnJlbnQubmFtZSk7XHJcbiAgICByZXR1cm4gYFxcXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgJHtjbGFzc05hbWV9IGZyb20gJy4vJHtmaWxlTmFtZX0nO1xyXG5pdCgncmVuZGVycyB3aXRob3V0IGNyYXNoaW5nJywgKCkgPT4ge1xyXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIFJlYWN0RE9NLnJlbmRlcig8JHtjbGFzc05hbWV9IC8+LCBkaXYpO1xyXG4gIFJlYWN0RE9NLnVubW91bnRDb21wb25lbnRBdE5vZGUoZGl2KTtcclxufSlgO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW5kZXJJbXBvcnRTdGF0ZW1lbnRzKGN1cnJlbnQ6IFNrZXRjaE1TTGF5ZXIpIHtcclxuICAgIGNvbnN0IGZpbGVOYW1lID0gdGhpcy5mb3JtYXRTZXJ2aWNlLm5vcm1hbGl6ZU5hbWUoY3VycmVudC5uYW1lKTtcclxuICAgIHJldHVybiBbXHJcbiAgICAgICdpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcXCdyZWFjdFxcJzsnLFxyXG4gICAgICAuLi50aGlzLmdlbmVyYXRlRHluYW1pY0ltcG9ydChjdXJyZW50KSxcclxuICAgICAgYGltcG9ydCBcXCcuLyR7ZmlsZU5hbWV9LmNzc1xcJztgXHJcbiAgICBdLmpvaW4oJ1xcbicpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZW5lcmF0ZUR5bmFtaWNJbXBvcnQoY3VycmVudDogU2tldGNoTVNMYXllcikge1xyXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMud2ViQ29kZUdlblNlcnZpY2UuY29udGV4dChjdXJyZW50KTtcclxuICAgIHJldHVybiBjb250ZXh0ICYmIGNvbnRleHQuY29tcG9uZW50c1xyXG4gICAgICA/IGNvbnRleHQuY29tcG9uZW50cy5tYXAoY29tcG9uZW50ID0+IHtcclxuICAgICAgICBjb25zdCBpbXBvcnRjbGFzc05hbWUgPSB0aGlzLmZvcm1hdFNlcnZpY2UuY2xhc3NOYW1lKGNvbXBvbmVudCk7XHJcbiAgICAgICAgY29uc3QgaW1wb3J0RmlsZU5hbWUgPSB0aGlzLmZvcm1hdFNlcnZpY2Uubm9ybWFsaXplTmFtZShjb21wb25lbnQpO1xyXG4gICAgICAgIHJldHVybiBgaW1wb3J0IHsgJHtpbXBvcnRjbGFzc05hbWV9IH0gZnJvbSBcIi4vJHtpbXBvcnRGaWxlTmFtZX1cIjtgO1xyXG4gICAgICB9KVxyXG4gICAgICA6IFtdO1xyXG4gIH1cclxufVxyXG4iXX0=