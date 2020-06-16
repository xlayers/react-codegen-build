/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ImageService, SymbolService, LayerService } from '@xlayers/sketch-lib';
import { WebCodeGenService } from '@xlayers/web-codegen';
import { ReactAggregatorService } from './react-aggregator.service';
import * as i0 from "@angular/core";
import * as i1 from "@xlayers/sketch-lib";
import * as i2 from "@xlayers/web-codegen";
import * as i3 from "./react-aggregator.service";
var ReactCodeGenService = /** @class */ (function () {
    function ReactCodeGenService(symbolService, imageService, webCodeGen, reactAggretatorService, layerService) {
        this.symbolService = symbolService;
        this.imageService = imageService;
        this.webCodeGen = webCodeGen;
        this.reactAggretatorService = reactAggretatorService;
        this.layerService = layerService;
    }
    /**
     * @param {?} current
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    ReactCodeGenService.prototype.compute = /**
     * @param {?} current
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    function (current, data, options) {
        this.webCodeGen.compute(current, data, this.compileOptions(options));
    };
    /**
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    ReactCodeGenService.prototype.aggregate = /**
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    function (data, options) {
        var _this = this;
        return data.pages.flatMap((/**
         * @param {?} page
         * @return {?}
         */
        function (page) {
            return _this.visit(page, data, _this.compileOptions(options));
        }));
    };
    /**
     * @param {?} current
     * @return {?}
     */
    ReactCodeGenService.prototype.identify = /**
     * @param {?} current
     * @return {?}
     */
    function (current) {
        return this.webCodeGen.identify(current);
    };
    /**
     * @param {?} current
     * @return {?}
     */
    ReactCodeGenService.prototype.context = /**
     * @param {?} current
     * @return {?}
     */
    function (current) {
        return this.webCodeGen.context(current);
    };
    /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    ReactCodeGenService.prototype.visit = /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    function (current, data, options) {
        return this.visitContent(current, data, options).concat(this.reactAggretatorService.aggregate(current, data, options));
    };
    /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    ReactCodeGenService.prototype.visitContent = /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    function (current, data, options) {
        if (this.layerService.identify(current)) {
            return this.visitLayer(current, data, options);
        }
        else if (this.symbolService.identify(current)) {
            return this.visitSymbolMaster(current, data, options);
        }
        else if (this.imageService.identify(current)) {
            return this.imageService.aggregate(current, data, options);
        }
        return [];
    };
    /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    ReactCodeGenService.prototype.visitLayer = /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    function (current, data, options) {
        var _this = this;
        return this.layerService
            .lookup(current)
            .flatMap((/**
         * @param {?} layer
         * @return {?}
         */
        function (layer) { return _this.visitContent(layer, data, options); }));
    };
    /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    ReactCodeGenService.prototype.visitSymbolMaster = /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    function (current, data, options) {
        /** @type {?} */
        var symbolMaster = this.symbolService.lookup(current, data);
        if (symbolMaster) {
            return this.visit(symbolMaster, data, options);
        }
        return [];
    };
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    ReactCodeGenService.prototype.compileOptions = /**
     * @private
     * @param {?} options
     * @return {?}
     */
    function (options) {
        return tslib_1.__assign({ textTagName: 'span', bitmapTagName: 'img', blockTagName: 'div', xmlPrefix: 'xly-', cssPrefix: 'xly_', componentDir: 'components', assetDir: 'assets' }, options);
    };
    ReactCodeGenService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ReactCodeGenService.ctorParameters = function () { return [
        { type: SymbolService },
        { type: ImageService },
        { type: WebCodeGenService },
        { type: ReactAggregatorService },
        { type: LayerService }
    ]; };
    /** @nocollapse */ ReactCodeGenService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ReactCodeGenService_Factory() { return new ReactCodeGenService(i0.ɵɵinject(i1.SymbolService), i0.ɵɵinject(i1.ImageService), i0.ɵɵinject(i2.WebCodeGenService), i0.ɵɵinject(i3.ReactAggregatorService), i0.ɵɵinject(i1.LayerService)); }, token: ReactCodeGenService, providedIn: "root" });
    return ReactCodeGenService;
}());
export { ReactCodeGenService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ReactCodeGenService.prototype.symbolService;
    /**
     * @type {?}
     * @private
     */
    ReactCodeGenService.prototype.imageService;
    /**
     * @type {?}
     * @private
     */
    ReactCodeGenService.prototype.webCodeGen;
    /**
     * @type {?}
     * @private
     */
    ReactCodeGenService.prototype.reactAggretatorService;
    /**
     * @type {?}
     * @private
     */
    ReactCodeGenService.prototype.layerService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3QtY29kZWdlbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhsYXllcnMvcmVhY3QtY29kZWdlbi8iLCJzb3VyY2VzIjpbImxpYi9yZWFjdC1jb2RlZ2VuLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2hGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7OztBQUlwRTtJQUlFLDZCQUNtQixhQUE0QixFQUM1QixZQUEwQixFQUMxQixVQUE2QixFQUM3QixzQkFBOEMsRUFDOUMsWUFBMEI7UUFKMUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7UUFDN0IsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtRQUM5QyxpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUMxQyxDQUFDOzs7Ozs7O0lBRUoscUNBQU87Ozs7OztJQUFQLFVBQ0UsT0FBc0IsRUFDdEIsSUFBa0IsRUFDbEIsT0FBMkI7UUFFM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDdkUsQ0FBQzs7Ozs7O0lBRUQsdUNBQVM7Ozs7O0lBQVQsVUFBVSxJQUFrQixFQUFFLE9BQTJCO1FBQXpELGlCQUlDO1FBSEMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLElBQUk7WUFDNUIsT0FBQSxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUks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QUFpQjtnQkFDakIsc0JBQXNCO2dCQUZPLFlBQVk7Ozs4QkFEbEQ7Q0FvR0MsQUE3RkQsSUE2RkM7U0ExRlksbUJBQW1COzs7Ozs7SUFFNUIsNENBQTZDOzs7OztJQUM3QywyQ0FBMkM7Ozs7O0lBQzNDLHlDQUE4Qzs7Ozs7SUFDOUMscURBQStEOzs7OztJQUMvRCwyQ0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEltYWdlU2VydmljZSwgU3ltYm9sU2VydmljZSwgTGF5ZXJTZXJ2aWNlIH0gZnJvbSAnQHhsYXllcnMvc2tldGNoLWxpYic7XHJcbmltcG9ydCB7IFdlYkNvZGVHZW5TZXJ2aWNlIH0gZnJvbSAnQHhsYXllcnMvd2ViLWNvZGVnZW4nO1xyXG5pbXBvcnQgeyBSZWFjdEFnZ3JlZ2F0b3JTZXJ2aWNlIH0gZnJvbSAnLi9yZWFjdC1hZ2dyZWdhdG9yLnNlcnZpY2UnO1xyXG5cclxudHlwZSBXZWJDb2RlR2VuT3B0aW9ucyA9IGFueTtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFJlYWN0Q29kZUdlblNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBzeW1ib2xTZXJ2aWNlOiBTeW1ib2xTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBpbWFnZVNlcnZpY2U6IEltYWdlU2VydmljZSxcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgd2ViQ29kZUdlbjogV2ViQ29kZUdlblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJlYWN0QWdncmV0YXRvclNlcnZpY2U6IFJlYWN0QWdncmVnYXRvclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGxheWVyU2VydmljZTogTGF5ZXJTZXJ2aWNlXHJcbiAgKSB7fVxyXG5cclxuICBjb21wdXRlKFxyXG4gICAgY3VycmVudDogU2tldGNoTVNMYXllcixcclxuICAgIGRhdGE6IFNrZXRjaE1TRGF0YSxcclxuICAgIG9wdGlvbnM/OiBXZWJDb2RlR2VuT3B0aW9uc1xyXG4gICkge1xyXG4gICAgdGhpcy53ZWJDb2RlR2VuLmNvbXB1dGUoY3VycmVudCwgZGF0YSwgdGhpcy5jb21waWxlT3B0aW9ucyhvcHRpb25zKSk7XHJcbiAgfVxyXG5cclxuICBhZ2dyZWdhdGUoZGF0YTogU2tldGNoTVNEYXRhLCBvcHRpb25zPzogV2ViQ29kZUdlbk9wdGlvbnMpIHtcclxuICAgIHJldHVybiBkYXRhLnBhZ2VzLmZsYXRNYXAocGFnZSA9PlxyXG4gICAgICB0aGlzLnZpc2l0KHBhZ2UsIGRhdGEsIHRoaXMuY29tcGlsZU9wdGlvbnMob3B0aW9ucykpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgaWRlbnRpZnkoY3VycmVudDogU2tldGNoTVNMYXllcikge1xyXG4gICAgcmV0dXJuIHRoaXMud2ViQ29kZUdlbi5pZGVudGlmeShjdXJyZW50KTtcclxuICB9XHJcblxyXG4gIGNvbnRleHQoY3VycmVudDogU2tldGNoTVNMYXllcikge1xyXG4gICAgcmV0dXJuIHRoaXMud2ViQ29kZUdlbi5jb250ZXh0KGN1cnJlbnQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB2aXNpdChcclxuICAgIGN1cnJlbnQ6IFNrZXRjaE1TTGF5ZXIsXHJcbiAgICBkYXRhOiBTa2V0Y2hNU0RhdGEsXHJcbiAgICBvcHRpb25zPzogV2ViQ29kZUdlbk9wdGlvbnNcclxuICApIHtcclxuICAgIHJldHVybiB0aGlzLnZpc2l0Q29udGVudChjdXJyZW50LCBkYXRhLCBvcHRpb25zKS5jb25jYXQoXHJcbiAgICAgIHRoaXMucmVhY3RBZ2dyZXRhdG9yU2VydmljZS5hZ2dyZWdhdGUoY3VycmVudCwgZGF0YSwgb3B0aW9ucylcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHZpc2l0Q29udGVudChcclxuICAgIGN1cnJlbnQ6IFNrZXRjaE1TTGF5ZXIsXHJcbiAgICBkYXRhOiBTa2V0Y2hNU0RhdGEsXHJcbiAgICBvcHRpb25zOiBXZWJDb2RlR2VuT3B0aW9uc1xyXG4gICkge1xyXG4gICAgaWYgKHRoaXMubGF5ZXJTZXJ2aWNlLmlkZW50aWZ5KGN1cnJlbnQpKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZpc2l0TGF5ZXIoY3VycmVudCwgZGF0YSwgb3B0aW9ucyk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3ltYm9sU2VydmljZS5pZGVudGlmeShjdXJyZW50KSkge1xyXG4gICAgICByZXR1cm4gdGhpcy52aXNpdFN5bWJvbE1hc3RlcihjdXJyZW50LCBkYXRhLCBvcHRpb25zKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5pbWFnZVNlcnZpY2UuaWRlbnRpZnkoY3VycmVudCkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaW1hZ2VTZXJ2aWNlLmFnZ3JlZ2F0ZShjdXJyZW50LCBkYXRhLCBvcHRpb25zKTtcclxuICAgIH1cclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdmlzaXRMYXllcihcclxuICAgIGN1cnJlbnQ6IFNrZXRjaE1TTGF5ZXIsXHJcbiAgICBkYXRhOiBTa2V0Y2hNU0RhdGEsXHJcbiAgICBvcHRpb25zOiBXZWJDb2RlR2VuT3B0aW9uc1xyXG4gICkge1xyXG4gICAgcmV0dXJuIHRoaXMubGF5ZXJTZXJ2aWNlXHJcbiAgICAgIC5sb29rdXAoY3VycmVudClcclxuICAgICAgLmZsYXRNYXAobGF5ZXIgPT4gdGhpcy52aXNpdENvbnRlbnQobGF5ZXIsIGRhdGEsIG9wdGlvbnMpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdmlzaXRTeW1ib2xNYXN0ZXIoXHJcbiAgICBjdXJyZW50OiBTa2V0Y2hNU0xheWVyLFxyXG4gICAgZGF0YTogU2tldGNoTVNEYXRhLFxyXG4gICAgb3B0aW9uczogV2ViQ29kZUdlbk9wdGlvbnNcclxuICApIHtcclxuICAgIGNvbnN0IHN5bWJvbE1hc3RlciA9IHRoaXMuc3ltYm9sU2VydmljZS5sb29rdXAoY3VycmVudCwgZGF0YSk7XHJcbiAgICBpZiAoc3ltYm9sTWFzdGVyKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZpc2l0KHN5bWJvbE1hc3RlciwgZGF0YSwgb3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNvbXBpbGVPcHRpb25zKG9wdGlvbnM6IFdlYkNvZGVHZW5PcHRpb25zKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0ZXh0VGFnTmFtZTogJ3NwYW4nLFxyXG4gICAgICBiaXRtYXBUYWdOYW1lOiAnaW1nJyxcclxuICAgICAgYmxvY2tUYWdOYW1lOiAnZGl2JyxcclxuICAgICAgeG1sUHJlZml4OiAneGx5LScsXHJcbiAgICAgIGNzc1ByZWZpeDogJ3hseV8nLFxyXG4gICAgICBjb21wb25lbnREaXI6ICdjb21wb25lbnRzJyxcclxuICAgICAgYXNzZXREaXI6ICdhc3NldHMnLFxyXG4gICAgICAuLi5vcHRpb25zXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=