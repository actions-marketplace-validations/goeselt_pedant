// Intentionally malformed TSX file for pedant e2e testing.
//
// Combines JSX syntax with a TypeScript type annotation, so it parses only
// when the bundled config wires the TypeScript parser to .tsx files. The
// 'var' declaration then trips the bundled no-var rule.
//
// Expected finding under the bundled config:
//   eslint no-var  -- 'var' declaration

const label: string = 'hi'
var count = 1

export const Badge = () => <span title="badge">{label + count}</span>
