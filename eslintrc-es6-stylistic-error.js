module.exports = {
    "rules":{
        /*****
         * ECMAScript 6
         */
         "arrow-body-style": ["error", "as-needed"], // http://eslint.org/docs/rules/arrow-body-style
         "arrow-parens": ["error", "as-needed"], // http://eslint.org/docs/rules/arrow-parens
         "arrow-spacing": ["error", {"before": true, "after": true}], // http://eslint.org/docs/rules/arrow-spacing
         "generator-star-spacing": ["error", {"before": false, "after": true}], // http://eslint.org/docs/rules/generator-star-spacing
         "object-shorthand": "error", // http://eslint.org/docs/rules/object-shorthand
         "prefer-arrow-callback": "error", // http://eslint.org/docs/rules/prefer-arrow-callback
         "prefer-const": "error", // http://eslint.org/docs/rules/prefer-const
         "prefer-numeric-literals": "error", // http://eslint.org/docs/rules/prefer-numeric-literals
         "prefer-reflect": "error", // http://eslint.org/docs/rules/prefer-reflect
         "prefer-rest-params": "error", // http://eslint.org/docs/rules/prefer-rest-params
         "prefer-spread": "error", // http://eslint.org/docs/rules/prefer-spread
         "prefer-template": "error", // http://eslint.org/docs/rules/prefer-template
         "rest-spread-spacing": ["error", "never"], // http://eslint.org/docs/rules/rest-spread-spacing
         "sort-imports": ["error", { "ignoreCase": true}], // http://eslint.org/docs/rules/sort-imports
         "template-curly-spacing": ["error", "never"], // http://eslint.org/docs/rules/template-curly-spacing
         "yield-star-spacing": ["error", {"before": false, "after": true}] // http://eslint.org/docs/rules/yield-star-spacing
    }
}