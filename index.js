module.exports = {
  rules: {
    "react/forbid-elements": [
      1,
      {
        forbid: [
          { element: "button", message: "use Miranda <Button> instead" },
          { element: "span", message: "use Miranda <Text> instead" },
          { element: "p", message: 'use Miranda <Text as="p"> instead' },
          { element: "b", message: 'use Miranda <Text as="b"> instead' },
          {
            element: "strong",
            message: 'use Miranda <Text as="strong"> instead',
          },
          { element: "i", message: 'use Miranda <Text as="i"> instead' },
          { element: "em", message: 'use Miranda <Text as="em"> instead' },
          { element: "mark", message: 'use Miranda <Text as="mark"> instead' },
          {
            element: "small",
            message: 'use Miranda <Text as="small"> instead',
          },
          { element: "h1", message: 'use Miranda <Text as="h1"> instead' },
          { element: "h2", message: 'use Miranda <Text as="h2"> instead' },
          { element: "h3", message: 'use Miranda <Text as="h3"> instead' },
          { element: "h4", message: 'use Miranda <Text as="h4"> instead' },
          { element: "h5", message: 'use Miranda <Text as="h5"> instead' },
          { element: "h6", message: 'use Miranda <Text as="h6"> instead' },
          {
            element: "input",
            message:
              "use one of Miranda's input components like <TextField>, <Checkbox>, <Radio> or <Button> instead. For other non-supported types, disable this rule for this line",
          },
          { element: "textarea", message: "use Miranda <Textarea> instead" },
          { element: "label", message: "use Miranda <Label> instead" },
          { element: "a", message: "use Miranda <Link> instead" },
          { element: "select", message: "use Miranda <Select> instead" },
          { element: "table", message: "use Miranda <Table> instead" },
          { element: "tr", message: "use Miranda <Table.Row> instead" },
          { element: "td", message: "use Miranda <Table.Cell> instead" },
          { element: "th", message: "use Miranda <Table.HeadCell> instead" },
          { element: "tbody", message: "use Miranda <Table.Body> instead" },
          { element: "thead", message: "use Miranda <Table.Head> instead" },
          { element: "tfoot", message: "use Miranda <Table.Foot> instead" },
          {
            element: "caption",
            message: "use Miranda <Table.Caption> instead",
          },
        ],
      },
    ],
  },
};
