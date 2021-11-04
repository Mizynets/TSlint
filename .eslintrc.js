module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "airbnb",
        "prettier",
        "plugin:react/recommended",
        "plugin:import/typescript",
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
        },
        "ecmaVersion": 13,
        "sourceType": "module",
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "no-console": 1,
        "react/jsx-filename-extension": 0,
        "import/prefer-default-export": 0,
        "no-use-before-define": 0,
        "import/no-unresolved": [
            2,
            {
              "ignore": [
                "api",
                "store",
                "utils",
                "hooks",
                "config",
                "theme",
                "contexts",
                "assets",
                "screens",
                "constants",
                "components",
                "navigation"
              ],
            },
          ],
          "import/extensions": [
            2,
            "ignorePackages",
            {
              "js": "never",
              "jsx": "never",
              "ts": "never",
              "tsx": "never"
            }
         ]
    },

};
