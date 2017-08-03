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
        "indent": [
            "error",
            4,
            {
                "SwitchCase": 1
            }
        ],
        "linebreak-style": [
            "error",
            "unix"
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
        "curly": [
            "error"
        ],
        "eqeqeq": [
            "error"
        ],
        "dot-notation": [
            "error",
            {
                "allowKeywords": true
            }
        ],
        "no-alert": [
            "error"
        ],
        "no-empty-pattern": [
            "error"
        ],
        "no-else-return": [
            "error"
        ],
        "no-lone-blocks": [
            "error"
        ],
        "no-floating-decimal": [
            "error"
        ],
        "no-loop-func": [
            "error"
        ],
        "no-magic-numbers": [
            "error",
            {
                "ignore": [
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
        "no-multi-str": [
            "error"
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
        "no-native-reassign": [
            "error"
        ],
        "no-new-wrappers": [
            "error"
        ],
        "no-return-assign": [
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
        "no-warning-comments": [
            "error"
        ],
        "no-useless-escape": [
            "error"
        ],
        "no-useless-concat": [
            "error"
        ],
        "no-unused-expressions": [
            "error"
        ],
        "wrap-iife": [
            "error"
        ],
        "yoda": [
            "error"
        ],
        "no-use-before-define": [
            "error"
        ],
        "no-shadow-restricted-names": [
            "error"
        ],
        "no-shadow": [
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
        "func-style": [
            "error",
            "expression"
        ],
        "id-length": [
            "error",
            {
                "min": 1,
                "max": 28
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
        "max-depth": [
            "error",
            {
                "max": 4
            }
        ],
        "max-nested-callbacks": [
            "error",
            {
                "max": 4
            }
        ],
        "max-params": [
            "error",
            {
                "max": 4
            }
        ],
        "max-statements-per-line": [
            "error",
            {
                "max": 3
            }
        ],
        "new-cap": [
            "error"
        ],
        "new-parens": [
            "error"
        ],
        "newline-after-var": [
            "error",
            "always"
        ],
        "newline-before-return": [
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
        "no-mixed-spaces-and-tabs": [
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
        "no-spaced-func": [
            "error"
        ],
        "no-trailing-spaces": [
            "error",
            {
                "skipBlankLines": true
            }
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
        "padded-blocks": [
            "error",
            "always"
        ],
        "quote-props": [
            "error",
            "as-needed"
        ],
        "space-before-blocks": [
            "error",
            "always"
        ],
        "space-before-function-paren": [
            "error",
            "always"
        ],
        "space-in-parens": [
            "error",
            "never"
        ],
        "space-infix-ops": [
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
        "unicode-bom": [
            "error",
            "never"
        ],
        "arrow-body-style": [
            "error",
            "as-needed"
        ],
        "babel/arrow-parens": [
            "error",
            "as-needed"
        ],
        "arrow-spacing": [
            "error",
            {
                "before": true,
                "after": true
            }
        ],
        "constructor-super": [
            "error"
        ],
        "no-class-assign": [
            "error"
        ],
        "no-const-assign": [
            "error"
        ],
        "no-dupe-class-members": [
            "error"
        ],
        "no-duplicate-imports": [
            "error"
        ],
        "no-new-symbol": [
            "error"
        ],
        "no-this-before-super": [
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
        "template-curly-spacing": [
            "error",
            "never"
        ],
        "no-empty": [
            "error",
            {
                "allowEmptyCatch": true
            }
        ]
    }
};