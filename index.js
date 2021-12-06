module.exports = {
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "plugins": [
        "react"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 10,
        "sourceType": "module"
    },
    "rules": {
        "react/forbid-elements": [1, { 
                "forbid": [
                    { "element": "p", "message": "use Miranda <Text> instead" },
                    { "element": "span", "message": "use Miranda <Text> instead" },
                    { "element": "b", "message": "use Miranda <Text> instead" },
                    { "element": "strong", "message": "use Miranda <Text> instead" },
                    { "element": "i", "message": "use Miranda <Text> instead" },
                    { "element": "em", "message": "use Miranda <Text> instead" },
                    { "element": "mark", "message": "use Miranda <Text> instead" },
                    { "element": "small", "message": "use Miranda <Text> instead" },
                    { "element": "h1", "message": "use Miranda <Text> instead" },
                    { "element": "h2", "message": "use Miranda <Text> instead" },
                    { "element": "h3", "message": "use Miranda <Text> instead" },
                    { "element": "h4", "message": "use Miranda <Text> instead" },
                    { "element": "h5", "message": "use Miranda <Text> instead" },
                    { "element": "h6", "message": "use Miranda <Text> instead" },
                    { "element": "input", "message": "Use one of Miranda's input components like <TextField>, <Checkbox>, <Radio> or <Button>  instead. For other non-supported types, disable this rule" },
                    { "element": "label", "message": "use Miranda <Label> instead" },
                    { "element": "a", "message": "use Miranda <Link> instead" },
                    { "element": "select", "message": "use Miranda <Select> instead" },
                    { "element": "table", "message": "use Miranda <Table> instead" },
                    { "element": "textarea", "message": "use Miranda <Textarea> instead" },
                    { "element": "button", "message": "use Miranda <Button> instead" },
                ] 
            }
        ]
    }
}