module.exports = {
    "rules": {
        /*****
         * Stylistic Issues
         */
         "array-bracker-spacing": ["warn", "never"], // http://eslint.org/docs/rules/array-bracket-spacing
         "block-spacing": ["warn", "always"], // http://eslint.org/docs/rules/block-spacing
         "brace-style": ["warn", "1tbs"], // http://eslint.org/docs/rules/brace-style
         "camelcase": ["warn", { "properties": "always" } ], // http://eslint.org/docs/rules/camelcase
         "comma-dangle": ["warn", "never"], // http://eslint.org/docs/rules/comma-dangle
         "comma-spacing": ["warn", { "before": false, "after": true }], // http://eslint.org/docs/rules/comma-spacing
         "comma-style": ["warn", "last"], // http://eslint.org/docs/rules/comma-style
         "comma-property-spacing": ["warn", "never"], // http://eslint.org/docs/rules/computed-property-spacing
         "consistent-this": ["warn", "ctx"], // http://eslint.org/docs/rules/consistent-this
         "eol-last": ["warn", "windows"], // http://eslint.org/docs/rules/eol-last
         "func-call-spacing": ["warn", "never"], // http://eslint.org/docs/rules/func-call-spacing
         "func-names": ["warn", "never"], // http://eslint.org/docs/rules/func-names
         "func-style": ["warn", "declaration", { "allowArrowFunctions": true }], // http://eslint.org/docs/rules/func-style
         "id-blacklist": ["off"], // http://eslint.org/docs/rules/id-blacklist
         "id-length": ["warn", {"min": 2, "max": 50}], // http://eslint.org/docs/rules/id-length
         "id-match": "off", // http://eslint.org/docs/rules/id-match
         "indent": ["warn", 4], // http://eslint.org/docs/rules/indent
         "key-spacing": ["warn", { "beforeColon": false, "afterColon": true, "mode": "strict" }], // http://eslint.org/docs/rules/key-spacing
         "keyword-spacing": ["warn", { "before": true, "after": true }], // http://eslint.org/docs/rules/keyword-spacing
         "line-comment-position": "off", // http://eslint.org/docs/rules/line-comment-position
         "linebreak-style": ["warn", "windows"], // http://eslint.org/docs/rules/linebreak-style
         "lines-around-comment": "off", // http://eslint.org/docs/rules/lines-around-comment
         "lines-around-directive": "off", // http://eslint.org/docs/rules/lines-around-directive
         "max-depth": ["warn", { "max": 5 }], // http://eslint.org/docs/rules/max-depth
         "max-len": ["warn", { "code": 80, "tabWidth": 6 }], // http://eslint.org/docs/rules/max-len
         "max-lines": "off", // http://eslint.org/docs/rules/max-lines
         "max-nested-callbacks": ["warn", {"max": 10}], // http://eslint.org/docs/rules/max-nested-callbacks
         "max-params": ["warn", {"max": 5}], // http://eslint.org/docs/rules/max-params
         "max-statements-per-line": ["warn", { "max": 1 }], // http://eslint.org/docs/rules/max-statements-per-line
         "max-statements": ["warn", { "max": 10 }], // http://eslint.org/docs/rules/max-statements
         "multiline-ternary": ["warn", "always"], // http://eslint.org/docs/rules/multiline-ternary
         "new-cap": ["warn"], // http://eslint.org/docs/rules/new-cap
         "new-parens": ["warn"], // http://eslint.org/docs/rules/new-parens
         "newline-after-var": ["warn", "always"], //http://eslint.org/docs/rules/newline-after-var
         "newline-before-return": ["warn"], // http://eslint.org/docs/rules/newline-before-return
         "newline-per-chain-call": ["warn", { "ignoreChainWithDepth": 2 }], // http://eslint.org/docs/rules/newline-per-chained-call
         "no-array-constructor": "warn", // http://eslint.org/docs/rules/no-array-constructor
         "no-bitwise": "warn", // http://eslint.org/docs/rules/no-bitwise
         "no-continue": "warn", // http://eslint.org/docs/rules/no-continue
         "no-inline-comments": "off", // http://eslint.org/docs/rules/no-inline-comments
         "no-lonely-if": "warn", // http://eslint.org/docs/rules/no-lonely-if
         "no-mixed-operators": "warn", // http://eslint.org/docs/rules/no-mixed-operators
         "no-mixed-spaces-and-tabs": "warn", // http://eslint.org/docs/rules/no-mixed-spaces-and-tabs
         "no-multiple-empty-lines": ["warn", {"max": 2, "maxEOF": 0, "maxBOF": 0}], // http://eslint.org/docs/rules/no-multiple-empty-lines
         "no-negated-condition": ["warn"], // http://eslint.org/docs/rules/no-negated-condition
         "no-nested-ternary": ["warn"], // http://eslint.org/docs/rules/no-nested-ternary
         "no-new-object": "warn", // http://eslint.org/docs/rules/no-new-object         
         "no-plusplus": "off", // http://eslint.org/docs/rules/no-plusplus
         "no-restricted-syntax": ["warn", "FunctionExpression", "WithStatement"], //  http://eslint.org/docs/rules/no-restricted-syntax
         "no-tabs": "warn", // http://eslint.org/docs/rules/no-tabs
         "no-ternary": "off", // http://eslint.org/docs/rules/no-ternary
         "no-trailing-spaces": "warn", // http://eslint.org/docs/rules/no-trailing-spaces
         "no-underscore-dangle": "warn", // http://eslint.org/docs/rules/no-underscore-dangle
         "no-unneeded-ternary": "warn", // http://eslint.org/docs/rules/no-unneeded-ternary
         "no-whitespace-before-property": "warn", // http://eslint.org/docs/rules/no-whitespace-before-property
         "object-curly-newline": ["warn", { "minProperties": 2 }], // http://eslint.org/docs/rules/object-curly-newline
         "object-curly-spacing": ["warn", "never"], // http://eslint.org/docs/rules/object-curly-spacing
         "object-property-newline": "warn", // http://eslint.org/docs/rules/object-property-newline
         "one-var-declaration-per-line": ["warn", "initializations"], // http://eslint.org/docs/rules/one-var-declaration-per-line
         "one-var": ["warn", "never"], // http://eslint.org/docs/rules/one-var
         "operator-assignment": ["warn", "always"], // http://eslint.org/docs/rules/operator-assignment
         "operator-linebreak": ["warn", "after"], // http://eslint.org/docs/rules/operator-linebreak
         "padded-blocks": ["warn", "never"], // http://eslint.org/docs/rules/padded-blocks 
         "quote-props": ["warn", "consistent-as-needed"], // http://eslint.org/docs/rules/quote-props
         "quotes":  ["warn", "double", { "allowTemplateLiterals": true }], // http://eslint.org/docs/rules/quotes
         "require-jsdoc": "off", // http://eslint.org/docs/rules/require-jsdoc
         "semi-spacing": ["warn", {"before": false, "after": true}], // http://eslint.org/docs/rules/semi-spacing
         "semi": ["warn", "always"], // http://eslint.org/docs/rules/semi
         "sort-keys": ["warn", "asc",  {"caseSensitive": false, "natural": true}], // http://eslint.org/docs/rules/sort-keys
         "sort-vars": ["warn", { "ignoreCase": true }], // http://eslint.org/docs/rules/sort-vars
         "space-before-blocks": ["warn", "always"], // http://eslint.org/docs/rules/space-before-blocks
         "space-before-function-paren": ["warn", "never"], // http://eslint.org/docs/rules/space-before-function-paren
         "space-in-parens": ["warn", "never"], // http://eslint.org/docs/rules/space-in-parens
         "space-infix-ops": ["warn"], // http://eslint.org/docs/rules/space-infix-ops
         "space-unary-ops": ["warn"], // http://eslint.org/docs/rules/space-unary-ops
         "spaced-comment": ["warn", "always"], // http://eslint.org/docs/rules/spaced-comment
         "unicode-bom": ["warn", "never"], // http://eslint.org/docs/rules/unicode-bom
         "wrap-regex": "off" // http://eslint.org/docs/rules/wrap-regex
    }
}