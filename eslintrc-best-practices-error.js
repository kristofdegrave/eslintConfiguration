module.exports = {
    "rules": {
        
        /*****
         * Best Practices
         */
         "accessor-pairs": ["error", { "getWithoutSet": true }], // http://eslint.org/docs/rules/accessor-pairs
         "array-callback-return": ["error"], // http://eslint.org/docs/rules/array-callback-return
         "block-scoped-var": ["error"], // http://eslint.org/docs/rules/block-scoped-var
         "class-methods-use-this": ["error"], // http://eslint.org/docs/rules/class-methods-use-this
         "complexity": ["error", 20], // http://eslint.org/docs/rules/complexity
         "consistent-return": ["warn"], // http://eslint.org/docs/rules/consistent-return
         "curly": ["error"], // http://eslint.org/docs/rules/curly
         "default-case": ["error"], // http://eslint.org/docs/rules/default-case
         "dot-location": ["error", "property"], // http://eslint.org/docs/rules/dot-location
         "dot-notation": ["error"], // http://eslint.org/docs/rules/dot-notation
         "eqeqeq": ["error", "always"], // http://eslint.org/docs/rules/eqeqeq
         "guard-for-in": ["error"], // http://eslint.org/docs/rules/guard-for-in
         "no-alert": ["error"], // http://eslint.org/docs/rules/no-alert
         "no-caller": ["error"], // http://eslint.org/docs/rules/no-caller
         "no-case-declarations": ["error"], // http://eslint.org/docs/rules/no-case-declarations
         "no-div-regex": ["error"], // http://eslint.org/docs/rules/no-div-regex
         "no-else-return": ["error"], // http://eslint.org/docs/rules/no-else-return
         //"no-empty-functions": ["error"], // http://eslint.org/docs/rules/no-empty-function
         "no-empty-pattern": ["error"], // http://eslint.org/docs/rules/no-empty-pattern
         "no-eq-null": ["error"], // http://eslint.org/docs/rules/no-eq-null
         "no-eval": ["error"], // http://eslint.org/docs/rules/no-eval
         "no-extend-native": ["error"], // http://eslint.org/docs/rules/no-extend-native
         "no-extra-bind": ["error"], // http://eslint.org/docs/rules/no-extra-bind
         "no-extra-label": ["error"], // http://eslint.org/docs/rules/no-extra-label
         "no-fallthrough": ["error"], // http://eslint.org/docs/rules/no-fallthrough
         "no-floating-decimal": ["error"], // http://eslint.org/docs/rules/no-floating-decimal
         "no-global-assign": ["error"], // http://eslint.org/docs/rules/no-global-assign
         "no-implicit-coercion": ["error", { "allow": ["!!"] }], // http://eslint.org/docs/rules/no-implicit-coercion
         "no-implicit-globals": ["error"], // http://eslint.org/docs/rules/no-implicit-globals
         "no-implied-eval": ["error"], // http://eslint.org/docs/rules/no-implied-eval
         "no-invalid-this": ["error"], // http://eslint.org/docs/rules/no-invalid-this
         "no-iterator": ["error"], // http://eslint.org/docs/rules/no-iterator
         "no-labels": ["error"], // http://eslint.org/docs/rules/no-labels
         "no-lone-blocks": ["error"], // http://eslint.org/docs/rules/no-lone-blocks
         "no-loop-func": ["error"], // http://eslint.org/docs/rules/no-loop-func
         "no-magic-numbers": ["error"], // http://eslint.org/docs/rules/no-magic-numbers
         "no-multi-spaces": ["error"], // http://eslint.org/docs/rules/no-multi-spaces
         "no-multi-str": ["error"], // http://eslint.org/docs/rules/no-multi-str
         "no-new-func": ["error"], // http://eslint.org/docs/rules/no-new-func
         "no-new-wrappers": ["error"], // http://eslint.org/docs/rules/no-new-wrappers
         "no-new": ["error"], // http://eslint.org/docs/rules/no-new
         "no-octal-escape": ["error"], // http://eslint.org/docs/rules/no-octal-escape
         "no-octal": ["error"], // http://eslint.org/docs/rules/no-octal
         "no-param-reassign": ["error"], // http://eslint.org/docs/rules/no-param-reassign
         "no-proto": ["error"], // http://eslint.org/docs/rules/no-proto
         "no-redeclare": ["error"], // http://eslint.org/docs/rules/no-redeclare
         "no-restricted-properties": ["error"], // http://eslint.org/docs/rules/no-restricted-properties
         "no-return-assign": ["error"], // http://eslint.org/docs/rules/no-return-assign
         "no-script-url": ["error"], // http://eslint.org/docs/rules/no-script-url
         "no-self-assign": ["error"], // http://eslint.org/docs/rules/no-self-assign
         "no-self-compare": ["error"], // http://eslint.org/docs/rules/no-self-compare
         "no-sequences": ["error"], // http://eslint.org/docs/rules/no-sequences
         "no-throw-literal": ["error"], // http://eslint.org/docs/rules/no-throw-literal
         "no-unmodified-loop-condition": ["error"], // http://eslint.org/docs/rules/no-unmodified-loop-condition
         "no-unused-expressions": ["error"], // http://eslint.org/docs/rules/no-unused-expressions
         "no-unused-labels": ["error"], // http://eslint.org/docs/rules/no-unused-labels
         "no-useless-call": ["error"], // http://eslint.org/docs/rules/no-useless-call
         "no-useless-concat": ["error"], // http://eslint.org/docs/rules/no-useless-concat
         "no-useless-escape": ["error"], // http://eslint.org/docs/rules/no-useless-escape
         "no-void": ["error"], // http://eslint.org/docs/rules/no-void
         "no-warning-comments": ["warn"], // http://eslint.org/docs/rules/no-warning-comments
         "no-with": ["error"], // http://eslint.org/docs/rules/no-with
         "radix": ["error"], // http://eslint.org/docs/rules/radix
         "vars-on-top": ["error"], // http://eslint.org/docs/rules/vars-on-top
         "wrap-iife": ["error"], // http://eslint.org/docs/rules/wrap-iife
         "yoda": ["warn", "never"] // http://eslint.org/docs/rules/wrap-iife
    }
}