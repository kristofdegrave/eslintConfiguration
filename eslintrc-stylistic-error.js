module.exports = {
    "rules": {
        /*****
         * Stylistic Issues
         */
         "array-bracker-spacing": ["error", "never"], // http://eslint.org/docs/rules/array-bracket-spacing
         "block-spacing": ["error", "always"], // http://eslint.org/docs/rules/block-spacing
         "brace-style": ["error", "1tbs"], // http://eslint.org/docs/rules/brace-style
         "camelcase": ["error", "always"], // http://eslint.org/docs/rules/camelcase
         "comma-dangle": ["error", "never"], // http://eslint.org/docs/rules/comma-dangle
         "comma-spacing": ["error", { "before": false, "after": true }], // http://eslint.org/docs/rules/comma-spacing
         "comma-style": ["error", "last"], // http://eslint.org/docs/rules/comma-style
         "comma-property-spacing": ["error", "never"], // http://eslint.org/docs/rules/computed-property-spacing
         "consistent-this": ["warn", "ctx"], // http://eslint.org/docs/rules/consistent-this
         "eol-last": ["warn", "windows"], // http://eslint.org/docs/rules/eol-last
         "func-call-spacing": ["error", "never"], // http://eslint.org/docs/rules/func-call-spacing
         "func-names": ["error", "never"], // http://eslint.org/docs/rules/func-names
         "func-style": ["error", "declaration", { "allowArrowFunctions": true }], // http://eslint.org/docs/rules/func-style
         "id-blacklist": ["off"], // http://eslint.org/docs/rules/id-blacklist
         "id-length": ["error", {"min": 2, "max": 50}], // http://eslint.org/docs/rules/id-length
         "id-match": "off", // http://eslint.org/docs/rules/id-match
         "indent": ["error", 4], // http://eslint.org/docs/rules/indent
         "key-spacing": ["error", { "beforeColon": false, "afterColon": true, "mode": "strict" }], // http://eslint.org/docs/rules/key-spacing
         "keyword-spacing": ["error", { "before": true, "after": true }], // http://eslint.org/docs/rules/keyword-spacing
         "line-comment-position": "off", // http://eslint.org/docs/rules/line-comment-position
         "linebreak-style": ["error", "windows"], // http://eslint.org/docs/rules/linebreak-style
         "lines-around-comment": "off", // http://eslint.org/docs/rules/lines-around-comment
         "lines-around-directive": "off", // http://eslint.org/docs/rules/lines-around-directive
         "max-depth": ["warn", { "max": 5 }], // http://eslint.org/docs/rules/max-depth
         "max-len": ["warn", { "code": 80, "tabWidth": 6 }], // http://eslint.org/docs/rules/max-len
         "max-lines": "off", // http://eslint.org/docs/rules/max-lines
         "max-nested-callbacks": ["warn", {"max": 10}], // http://eslint.org/docs/rules/max-nested-callbacks
         "max-params": ["warn", {"max": 5}], // http://eslint.org/docs/rules/max-params
         "max-statements-per-line": ["error", { "max": 1 }], // http://eslint.org/docs/rules/max-statements-per-line
         "max-statements": ["warn", { "max": 10 }], // http://eslint.org/docs/rules/max-statements
         "multiline-ternary": ["error", "always"], // http://eslint.org/docs/rules/multiline-ternary
         "new-cap": ["error"], // http://eslint.org/docs/rules/new-cap
         "new-parens": ["error"], // http://eslint.org/docs/rules/new-parens
         "newline-after-var": ["error", "always"], //http://eslint.org/docs/rules/newline-after-var
         "newline-before-return": ["error"], // http://eslint.org/docs/rules/newline-before-return
         "newline-per-chain-call": ["error", { "ignoreChainWithDepth": 2 }], // http://eslint.org/docs/rules/newline-per-chained-call
         "no-array-constructor": "error", // http://eslint.org/docs/rules/no-array-constructor
         "no-bitwise": "error", // http://eslint.org/docs/rules/no-bitwise
         "no-continue": "error", // http://eslint.org/docs/rules/no-continue
         "no-inline-comments": "off", // http://eslint.org/docs/rules/no-inline-comments
         "no-lonely-if": "error", // http://eslint.org/docs/rules/no-lonely-if
         "no-mixed-operators": "error", // http://eslint.org/docs/rules/no-mixed-operators
         "no-mixed-spaces-and-tabs": "error", // http://eslint.org/docs/rules/no-mixed-spaces-and-tabs
         "no-multiple-empty-lines": ["error", {"max": 2, "maxEOF": 0, "maxBOF": 0}], // http://eslint.org/docs/rules/no-multiple-empty-lines
         "no-negated-condition": ["error"], // http://eslint.org/docs/rules/no-negated-condition
         "no-nested-ternary": ["error"], // http://eslint.org/docs/rules/no-nested-ternary
         "no-new-object": "error", // http://eslint.org/docs/rules/no-new-object         
         "no-plusplus": "off", // http://eslint.org/docs/rules/no-plusplus
         "no-restricted-syntax": ["error", "FunctionExpression", "WithStatement"], //  http://eslint.org/docs/rules/no-restricted-syntax
         "no-tabs": "error", // http://eslint.org/docs/rules/no-tabs
         "no-ternary": "off", // http://eslint.org/docs/rules/no-ternary
         "no-trailing-spaces": "error", // http://eslint.org/docs/rules/no-trailing-spaces
         "no-underscore-dangle": "error", // http://eslint.org/docs/rules/no-underscore-dangle
         "no-unneeded-ternary": "error", // http://eslint.org/docs/rules/no-unneeded-ternary
         "no-whitespace-before-property": "error", // http://eslint.org/docs/rules/no-whitespace-before-property
         "object-curly-newline": ["error", { "minProperties": 2 }], // http://eslint.org/docs/rules/object-curly-newline
         "object-curly-spacing": ["error", "never"], // http://eslint.org/docs/rules/object-curly-spacing
         "object-property-newline": "error", // http://eslint.org/docs/rules/object-property-newline
         "one-var-declaration-per-line": ["error", "initializations"], // http://eslint.org/docs/rules/one-var-declaration-per-line
         "one-var": ["error", "never"], // http://eslint.org/docs/rules/one-var
         "operator-assignment": ["error", "always"], // http://eslint.org/docs/rules/operator-assignment
         "operator-linebreak": ["error", "after"], // http://eslint.org/docs/rules/operator-linebreak
         "padded-blocks": ["error", "never"], // http://eslint.org/docs/rules/padded-blocks 
         "quote-props": ["error", "consistent-as-needed"], // http://eslint.org/docs/rules/quote-props
         "quotes":  ["error", "double", { "allowTemplateLiterals": true }], // http://eslint.org/docs/rules/quotes
         "require-jsdoc": "off", // http://eslint.org/docs/rules/require-jsdoc
         "semi-spacing": ["error", {"before": false, "after": true}], // http://eslint.org/docs/rules/semi-spacing
         "semi": ["error", "always"], // http://eslint.org/docs/rules/semi
         "sort-keys": ["error", {"caseSensitive": false, "natural": true}], // http://eslint.org/docs/rules/sort-keys
         "sort-vars": ["error", { "ignoreCase": true }], // http://eslint.org/docs/rules/sort-vars
         "space-before-blocks": ["error", "always"], // http://eslint.org/docs/rules/space-before-blocks
         "space-before-function-paren": ["error", "never"], // http://eslint.org/docs/rules/space-before-function-paren
         "space-in-parens": ["error", "never"], // http://eslint.org/docs/rules/space-in-parens
         "space-infix-ops": ["error"], // http://eslint.org/docs/rules/space-infix-ops
         "space-unary-ops": ["error"], // http://eslint.org/docs/rules/space-unary-ops
         "spaced-comment": ["error", "always"], // http://eslint.org/docs/rules/spaced-comment
         "unicode-bom": ["error", "never"], // http://eslint.org/docs/rules/unicode-bom
         "wrap-regex": "off" // http://eslint.org/docs/rules/wrap-regex
    }
}