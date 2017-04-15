module.exports = {
    "rules": {
        
        /*****
         * Best Practices
         */
         "accessor-pairs": ["warn", { "getWithoutSet": true }], // http://eslint.org/docs/rules/accessor-pairs
         "array-callback-return": ["warn"], // http://eslint.org/docs/rules/array-callback-return
         "block-scoped-var": ["warn"], // http://eslint.org/docs/rules/block-scoped-var
         "class-methods-use-this": ["warn"], // http://eslint.org/docs/rules/class-methods-use-this
         "complexity": ["warn", 20], // http://eslint.org/docs/rules/complexity
         "consistent-return": ["warn"], // http://eslint.org/docs/rules/consistent-return
         "curly": ["warn"], // http://eslint.org/docs/rules/curly
         "default-case": ["warn"], // http://eslint.org/docs/rules/default-case
         "dot-location": ["warn", "property"], // http://eslint.org/docs/rules/dot-location
         "dot-notation": ["warn"], // http://eslint.org/docs/rules/dot-notation
         "eqeqeq": ["warn", "always"], // http://eslint.org/docs/rules/eqeqeq
         "guard-for-in": ["warn"], // http://eslint.org/docs/rules/guard-for-in
         "no-alert": ["warn"], // http://eslint.org/docs/rules/no-alert
         "no-caller": ["warn"], // http://eslint.org/docs/rules/no-caller
         "no-case-declarations": ["warn"], // http://eslint.org/docs/rules/no-case-declarations
         "no-div-regex": ["warn"], // http://eslint.org/docs/rules/no-div-regex
         "no-else-return": ["warn"], // http://eslint.org/docs/rules/no-else-return
         "no-empty-functions": ["warn"], // http://eslint.org/docs/rules/no-empty-function
         "no-empty-pattern": ["warn"], // http://eslint.org/docs/rules/no-empty-pattern
         "no-eq-null": ["warn"], // http://eslint.org/docs/rules/no-eq-null
         "no-eval": ["warn"], // http://eslint.org/docs/rules/no-eval
         "no-extend-native": ["warn"], // http://eslint.org/docs/rules/no-extend-native
         "no-extra-bind": ["warn"], // http://eslint.org/docs/rules/no-extra-bind
         "no-extra-label": ["warn"], // http://eslint.org/docs/rules/no-extra-label
         "no-fallthrough": ["warn"], // http://eslint.org/docs/rules/no-fallthrough
         "no-floating-decimal": ["warn"], // http://eslint.org/docs/rules/no-floating-decimal
         "no-global-assign": ["warn"], // http://eslint.org/docs/rules/no-global-assign
         "no-implicit-coercion": ["warn", { "allow": ["!!"] }], // http://eslint.org/docs/rules/no-implicit-coercion
         "no-implicit-globals": ["warn"], // http://eslint.org/docs/rules/no-implicit-globals
         "no-implied-eval": ["warn"], // http://eslint.org/docs/rules/no-implied-eval
         "no-invalid-this": ["warn"], // http://eslint.org/docs/rules/no-invalid-this
         "no-iterator": ["warn"], // http://eslint.org/docs/rules/no-iterator
         "no-labels": ["warn"], // http://eslint.org/docs/rules/no-labels
         "no-lone-blocks": ["warn"], // http://eslint.org/docs/rules/no-lone-blocks
         "no-loop-func": ["warn"], // http://eslint.org/docs/rules/no-loop-func
         "no-magic-numbers": ["warn"], // http://eslint.org/docs/rules/no-magic-numbers
         "no-multi-spaces": ["warn"], // http://eslint.org/docs/rules/no-multi-spaces
         "no-multi-str": ["warn"], // http://eslint.org/docs/rules/no-multi-str
         "no-new-func": ["warn"], // http://eslint.org/docs/rules/no-new-func
         "no-new-wrappers": ["warn"], // http://eslint.org/docs/rules/no-new-wrappers
         "no-new": ["warn"], // http://eslint.org/docs/rules/no-new
         "no-octal-escape": ["warn"], // http://eslint.org/docs/rules/no-octal-escape
         "no-octal": ["warn"], // http://eslint.org/docs/rules/no-octal
         "no-param-reassign": ["warn"], // http://eslint.org/docs/rules/no-param-reassign
         "no-proto": ["warn"], // http://eslint.org/docs/rules/no-proto
         "no-redeclare": ["warn"], // http://eslint.org/docs/rules/no-redeclare
         "no-restricted-properties": ["warn"], // http://eslint.org/docs/rules/no-restricted-properties
         "no-return-assign": ["warn"], // http://eslint.org/docs/rules/no-return-assign
         "no-script-url": ["warn"], // http://eslint.org/docs/rules/no-script-url
         "no-self-assign": ["warn"], // http://eslint.org/docs/rules/no-self-assign
         "no-self-compare": ["warn"], // http://eslint.org/docs/rules/no-self-compare
         "no-sequences": ["warn"], // http://eslint.org/docs/rules/no-sequences
         "no-throw-literal": ["warn"], // http://eslint.org/docs/rules/no-throw-literal
         "no-unmodified-loop-condition": ["warn"], // http://eslint.org/docs/rules/no-unmodified-loop-condition
         "no-unused-expressions": ["warn"], // http://eslint.org/docs/rules/no-unused-expressions
         "no-unused-labels": ["warn"], // http://eslint.org/docs/rules/no-unused-labels
         "no-useless-call": ["warn"], // http://eslint.org/docs/rules/no-useless-call
         "no-useless-concat": ["warn"], // http://eslint.org/docs/rules/no-useless-concat
         "no-useless-escape": ["warn"], // http://eslint.org/docs/rules/no-useless-escape
         "no-void": ["warn"], // http://eslint.org/docs/rules/no-void
         "no-warning-comments": ["warn"], // http://eslint.org/docs/rules/no-warning-comments
         "no-with": ["warn"], // http://eslint.org/docs/rules/no-with
         "radix": ["warn"], // http://eslint.org/docs/rules/radix
         "vars-on-top": ["warn"], // http://eslint.org/docs/rules/vars-on-top
         "wrap-iife": ["warn"], // http://eslint.org/docs/rules/wrap-iife
         "yoda": ["warn", "never"] // http://eslint.org/docs/rules/wrap-iife
    }
}