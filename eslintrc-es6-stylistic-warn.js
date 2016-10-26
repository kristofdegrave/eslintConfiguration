module.exports = {
    "rules":{
        /*****
         * ECMAScript 6
         */
         "arrow-body-style": ["warn", "as-needed"], // http://eslint.org/docs/rules/arrow-body-style
         "arrow-parens": ["warn", "as-needed"], // http://eslint.org/docs/rules/arrow-parens
         "arrow-spacing": ["warn", {"before": true, "after": true}], // http://eslint.org/docs/rules/arrow-spacing
         "generator-star-spacing": ["warn", {"before": false, "after": true}], // http://eslint.org/docs/rules/generator-star-spacing
         "object-shorthand": "warn", // http://eslint.org/docs/rules/object-shorthand
         "prefer-arrow-callback": "warn", // http://eslint.org/docs/rules/prefer-arrow-callback
         "prefer-const": "warn", // http://eslint.org/docs/rules/prefer-const
         "prefer-numeric-literals": "warn", // http://eslint.org/docs/rules/prefer-numeric-literals
         "prefer-reflect": "warn", // http://eslint.org/docs/rules/prefer-reflect
         "prefer-rest-params": "warn", // http://eslint.org/docs/rules/prefer-rest-params
         "prefer-spread": "warn", // http://eslint.org/docs/rules/prefer-spread
         "prefer-template": "warn", // http://eslint.org/docs/rules/prefer-template
         "rest-spread-spacing": ["warn", "never"], // http://eslint.org/docs/rules/rest-spread-spacing
         "sort-imports": ["warn", { "ignoreCase": true}], // http://eslint.org/docs/rules/sort-imports
         "template-curly-spacing": ["warn", "never"], // http://eslint.org/docs/rules/template-curly-spacing
         "yield-star-spacing": ["warn", {"before": false, "after": true}] // http://eslint.org/docs/rules/yield-star-spacing
    }
}