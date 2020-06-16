import { Injectable, ɵɵdefineInjectable, ɵɵinject, NgModule } from '@angular/core';
import { FormatService, SymbolService, ImageService, LayerService } from '@xlayers/sketch-lib';
import { WebCodeGenService, WebCodeGenModule } from '@xlayers/web-codegen';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ReactDocGenService {
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
/** @nocollapse */ ReactDocGenService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ReactDocGenService_Factory() { return new ReactDocGenService(); }, token: ReactDocGenService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ReactAggregatorService {
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
/** @nocollapse */ ReactAggregatorService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ReactAggregatorService_Factory() { return new ReactAggregatorService(ɵɵinject(FormatService), ɵɵinject(WebCodeGenService)); }, token: ReactAggregatorService, providedIn: "root" });
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
class ReactCodeGenService {
    /**
     * @param {?} symbolService
     * @param {?} imageService
     * @param {?} webCodeGen
     * @param {?} reactAggretatorService
     * @param {?} layerService
     */
    constructor(symbolService, imageService, webCodeGen, reactAggretatorService, layerService) {
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
    compute(current, data, options) {
        this.webCodeGen.compute(current, data, this.compileOptions(options));
    }
    /**
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    aggregate(data, options) {
        return data.pages.flatMap((/**
         * @param {?} page
         * @return {?}
         */
        page => this.visit(page, data, this.compileOptions(options))));
    }
    /**
     * @param {?} current
     * @return {?}
     */
    identify(current) {
        return this.webCodeGen.identify(current);
    }
    /**
     * @param {?} current
     * @return {?}
     */
    context(current) {
        return this.webCodeGen.context(current);
    }
    /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    visit(current, data, options) {
        return this.visitContent(current, data, options).concat(this.reactAggretatorService.aggregate(current, data, options));
    }
    /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    visitContent(current, data, options) {
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
    }
    /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    visitLayer(current, data, options) {
        return this.layerService
            .lookup(current)
            .flatMap((/**
         * @param {?} layer
         * @return {?}
         */
        layer => this.visitContent(layer, data, options)));
    }
    /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    visitSymbolMaster(current, data, options) {
        /** @type {?} */
        const symbolMaster = this.symbolService.lookup(current, data);
        if (symbolMaster) {
            return this.visit(symbolMaster, data, options);
        }
        return [];
    }
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    compileOptions(options) {
        return Object.assign({ textTagName: 'span', bitmapTagName: 'img', blockTagName: 'div', xmlPrefix: 'xly-', cssPrefix: 'xly_', componentDir: 'components', assetDir: 'assets' }, options);
    }
}
ReactCodeGenService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ReactCodeGenService.ctorParameters = () => [
    { type: SymbolService },
    { type: ImageService },
    { type: WebCodeGenService },
    { type: ReactAggregatorService },
    { type: LayerService }
];
/** @nocollapse */ ReactCodeGenService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ReactCodeGenService_Factory() { return new ReactCodeGenService(ɵɵinject(SymbolService), ɵɵinject(ImageService), ɵɵinject(WebCodeGenService), ɵɵinject(ReactAggregatorService), ɵɵinject(LayerService)); }, token: ReactCodeGenService, providedIn: "root" });
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
class ReactCodeGenModule {
}
ReactCodeGenModule.decorators = [
    { type: NgModule, args: [{
                imports: [WebCodeGenModule]
            },] }
];

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
