module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "parser": "babel-eslint",
    "extends": "eslint:recommended",
    "plugins": [
        "babel"
    ],
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "no-await-in-loop": [
            "error"
        ],
        "no-console": [
            "error",
            {
                "allow": ["warn", "error"]
            }
        ],
        "no-extra-parens": [
            "error",
            "all",
            {
                "nestedBinaryExpressions": false,
                "enforceForArrowConditionals": false
            }
        ],
        "no-template-curly-in-string": [
            "error"
        ],
        "accessor-pairs": [
            "error"
        ],
        "array-callback-return": [
            "error"
        ],
        "block-scoped-var": [
            "error"
        ],
        "class-methods-use-this": [
            "error"
        ],
        "complexity": [
            "error"
        ],
        "consistent-return": [
            "error"
        ],
        "curly": [
            "error"
        ],
        "default-case": [
            "error"
        ],
        "dot-location": [
            "error",
            "property"
        ],
        "dot-notation": [
            "error"
        ],
        "eqeqeq": [
            "error"
        ],
        "guard-for-in": [
            "error"
        ],
        "max-classes-per-file": [
            "error",
            1
        ],
        "no-alert": [
            "error"
        ],
        "no-caller": [
            "error"
        ],
        "no-div-regex": [
            "error"
        ],
        "no-else-return": [
            "error"
        ],
        "no-empty-function": [
            "error"
        ],
        "no-eq-null": [
            "error"
        ],
        "no-eval": [
            "error"
        ],
        "no-extend-native": [
            "error"
        ],
        "no-extra-bind": [
            "error"
        ],
        "no-extra-label": [
            "error"
        ],
        "no-floating-decimal": [
            "error"
        ],
        "no-implicit-coercion": [
            "error",
            {
                "boolean": false
            }
        ],
        "no-implicit-globals": [
            "error"
        ],
        "no-implied-eval": [
            "error"
        ],
        "no-invalid-this": [
            "error"
        ],
        "no-iterator": [
            "error"
        ],
        "no-labels": [
            "error"
        ],
        "no-lone-blocks": [
            "error"
        ],
        "no-loop-func": [
            "error"
        ],
        "no-magic-numbers": [
            "error",
            {
                "ignore": [
                    -1,
                    0,
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                ],
                "ignoreArrayIndexes": true,
                "enforceConst": true,
                "detectObjects": true
            }
        ],
        "no-multi-spaces": [
            "error",
            {
                "exceptions": {
                    "ImportDeclaration": true,
                    "VariableDeclarator": true
                }
            }
        ],
        "no-multi-str": [
            "error"
        ],
        "no-new": [
            "error"
        ],
        "no-new-func": [
            "error"
        ],
        "no-new-wrappers": [
            "error"
        ],
        "no-octal-escape": [
            "error"
        ],
        "no-param-reassign": [
            "error"
        ],
        "no-proto": [
            "error"
        ],
        "no-return-assign": [
            "error"
        ],
        "no-return-await": [
            "error"
        ],
        "no-script-url": [
            "error"
        ],
        "no-self-compare": [
            "error"
        ],
        "no-sequences": [
            "error"
        ],
        "no-throw-literal": [
            "error"
        ],
        "no-unmodified-loop-condition": [
            "error"
        ],
        "no-unused-expressions": [
            "error"
        ],
        "no-useless-call": [
            "error"
        ],
        "no-useless-concat": [
            "error"
        ],
        "no-useless-return": [
            "error"
        ],
        "no-void": [
            "error"
        ],
        "no-warning-comments": [
            "error"
        ],
        "prefer-named-capture-group": [
            "error"
        ],
        "prefer-promise-reject-errors": [
            "error"
        ],
        "radix": [
            "error"
        ],
        "require-await": [
            "error"
        ],
        "require-unicode-regexp": [
            "error"
        ],
        "vars-on-top": [
            "error"
        ],
        "wrap-iife": [
            "error"
        ],
        "yoda": [
            "error"
        ],
        "no-label-var": [
            "error"
        ],
        "no-shadow": [
            "error"
        ],
        "no-undef-init": [
            "error"
        ],
        "no-undefined": [
            "error"
        ],
        "no-use-before-define": [
            "error"
        ],
        "callback-return": [
            "error"
        ],
        "global-require": [
            "error"
        ],
        "handle-callback-err": [
            "error"
        ],
        "no-buffer-constructor": [
            "error"
        ],
        "no-mixed-requires": [
            "error"
        ],
        "no-new-require": [
            "error"
        ],
        "no-path-concat": [
            "error"
        ],
        "no-process-env": [
            "error"
        ],
        "no-process-exit": [
            "error"
        ],
        "array-bracket-spacing": [
            "error",
            "never"
        ],
        "block-spacing": [
            "error",
            "always"
        ],
        "brace-style": [
            "error"
        ],
        "camelcase": [
            "error"
        ],
        "comma-dangle": [
            "error",
            "always-multiline"
        ],
        "comma-spacing": [
            "error",
            {
                "before": false,
                "after": true
            }
        ],
        "comma-style": [
            "error",
            "last"
        ],
        "computed-property-spacing": [
            "error",
            "never"
        ],
        "eol-last": [
            "error"
        ],
        "func-call-spacing": [
            "error",
            "never"
        ],
        "func-name-matching": [
            "error"
        ],
        "func-style": [
            "error",
            "expression"
        ],
        "function-paren-newline": [
            "error",
            "multiline"
        ],
        "id-length": [
            "error",
            {
                "min": 1,
                "max": 28
            }
        ],
        "indent": [
            "error",
            4,
            {
                "SwitchCase": 1
            }
        ],
        "key-spacing": [
            "error",
            {
                "beforeColon": true,
                "afterColon": true
            }
        ],
        "keyword-spacing": [
            "error",
            {
                "before": true,
                "after": true
            }
        ],
        "line-comment-position": [
            "error"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "lines-between-class-members": [
            "error"
        ],
        "max-depth": [
            "error",
            {
                "max": 6
            }
        ],
        "max-len": [
            "error",
            {
                "max": 80
            }
        ],
        "max-lines": [
            "error",
            {
                max: 1000
            }
        ],
        "max-lines-per-function": [
            "error",
            {
                max: 100
            }
        ],
        "max-nested-callbacks": [
            "error",
            {
                max: 10
            }
        ],
        "max-params": [
            "error",
            {
                max: 5
            }
        ],
        "max-statements-per-line": [
            "error",
            {
                "max": 3
            }
        ],
        "multiline-ternary": [
            "error",
            "always-multiline"
        ],
        "new-cap": [
            "error"
        ],
        "new-parens": [
            "error"
        ],
        "newline-per-chained-call": [
            "error"
        ],
        "no-array-constructor": [
            "error"
        ],
        "no-bitwise": [
            "error"
        ],
        "no-continue": [
            "error"
        ],
        "no-inline-comments": [
            "error"
        ],
        "no-lonely-if": [
            "error"
        ],
        "no-mixed-operators": [
            "error"
        ],
        "no-multi-assign": [
            "error"
        ],
        "no-multiple-empty-lines": [
            "error",
            {
                "max": 1,
                "maxEOF": 1,
                "maxBOF": 0
            }
        ],
        "no-nested-ternary": [
            "error"
        ],
        "no-new-object": [
            "error"
        ],
        "no-plusplus": [
            "error"
        ],
        "no-tabs": [
            "error"
        ],
        "no-trailing-spaces": [
            "error"
        ],
        "no-underscore-dangle": [
            "error"
        ],
        "no-unneeded-ternary": [
            "error"
        ],
        "no-whitespace-before-property": [
            "error"
        ],
        "object-curly-newline": [
            "error",
            {
                "ObjectExpression": {
                    "multiline": true,
                    "minProperties": 1
                },
                "ObjectPattern": {
                    "multiline": true,
                    "minProperties": 3
                }
            }
        ],
        "object-curly-spacing": [
            "error",
            "never"
        ],
        "object-property-newline": [
            "error"
        ],
        "one-var-declaration-per-line": [
            "error",
            "always"
        ],
        "operator-assignment": [
            "error"
        ],
        "operator-linebreak": [
            "error",
            "before"
        ],
        "padded-blocks": [
            "error",
            "always"
        ],
        "prefer-object-spread": [
            "error"
        ],
        "quote-props": [
            "error",
            "as-needed"
        ],
        "quotes": [
            "error",
            "single",
            {
                "avoidEscape": true,
                "allowTemplateLiterals": true
            }
        ],
        "semi": [
            "error",
            "always"
        ],
        "semi-spacing": [
            "error",
            {
                "after": true
            }
        ],
        "semi-style": [
            "error"
        ],
        "sort-keys": [
            "error",
            "asc",
            {
                "natural": true
            }
        ],
        "space-before-blocks": [
            "error",
            "always"
        ],
        "space-before-function-paren": [
            "error",
            "always"
        ],
        "space-infix-ops": [
            "error"
        ],
        "space-unary-ops": [
            "error"
        ],
        "spaced-comment": [
            "error",
            "always",
            {
                "exceptions": [
                    "-",
                    "=",
                    "*"
                ]
            }
        ],
        "switch-colon-spacing": [
            "error",
            {
                "before": false,
                "after": true
            }
        ],
        "template-tag-spacing": [
            "error",
            "never"
        ],
        "unicode-bom": [
            "error",
            "never"
        ],
        "wrap-regex": [
            "error"
        ],
        "arrow-body-style": [
            "error",
            "as-needed"
        ],
        "arrow-parens": [
            "error"
        ],
        "arrow-spacing": [
            "error",
            {
                "before": true,
                "after": true
            }
        ],
        "no-confusing-arrow": [
            "error"
        ],
        "no-duplicate-imports": [
            "error"
        ],
        "no-useless-computed-key": [
            "error"
        ],
        "no-useless-constructor": [
            "error"
        ],
        "no-useless-rename": [
            "error"
        ],
        "no-var": [
            "error"
        ],
        "object-shorthand": [
            "error"
        ],
        "prefer-arrow-callback": [
            "error"
        ],
        "prefer-rest-params": [
            "error"
        ],
        "prefer-spread": [
            "error"
        ],
        "prefer-template": [
            "error"
        ],
        "rest-spread-spacing": [
            "error"
        ],
        "template-curly-spacing": [
            "error",
            "never"
        ]
    }
};