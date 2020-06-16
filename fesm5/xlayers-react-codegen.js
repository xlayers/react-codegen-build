import { Injectable, ɵɵdefineInjectable, ɵɵinject, NgModule } from '@angular/core';
import { __spread, __assign } from 'tslib';
import { FormatService, SymbolService, ImageService, LayerService } from '@xlayers/sketch-lib';
import { WebCodeGenService, WebCodeGenModule } from '@xlayers/web-codegen';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
    /** @nocollapse */ ReactDocGenService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ReactDocGenService_Factory() { return new ReactDocGenService(); }, token: ReactDocGenService, providedIn: "root" });
    return ReactDocGenService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
        return __spread([
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
        function (file) { return (__assign({}, file, { kind: 'react' })); })));
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
        return __spread([
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
    /** @nocollapse */ ReactAggregatorService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ReactAggregatorService_Factory() { return new ReactAggregatorService(ɵɵinject(FormatService), ɵɵinject(WebCodeGenService)); }, token: ReactAggregatorService, providedIn: "root" });
    return ReactAggregatorService;
}());
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
        return __assign({ textTagName: 'span', bitmapTagName: 'img', blockTagName: 'div', xmlPrefix: 'xly-', cssPrefix: 'xly_', componentDir: 'components', assetDir: 'assets' }, options);
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
    /** @nocollapse */ ReactCodeGenService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ReactCodeGenService_Factory() { return new ReactCodeGenService(ɵɵinject(SymbolService), ɵɵinject(ImageService), ɵɵinject(WebCodeGenService), ɵɵinject(ReactAggregatorService), ɵɵinject(LayerService)); }, token: ReactCodeGenService, providedIn: "root" });
    return ReactCodeGenService;
}());
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ReactCodeGenModule = /** @class */ (function () {
    function ReactCodeGenModule() {
    }
    ReactCodeGenModule.decorators = [
        { type: NgModule, args: [{
                    imports: [WebCodeGenModule]
                },] }
    ];
    return ReactCodeGenModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ReactCodeGenModule, ReactCodeGenService, ReactDocGenService, ReactAggregatorService as ɵa };
//# sourceMappingURL=xlayers-react-codegen.js.map
