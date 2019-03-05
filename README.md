When component styles are openly extensible, every style declaration becomes part of an undocumented public API. Even simple changes to styles can create unexpected breakages across our products. This may prevent us from improving components or supporting semantic versioning. However, we still need extensible component styles to place components within a layout.

Design your component APIs for stability by separating appearance styles from layout styles. Neither CSS nor the most popular styling libraries separate these concepts, but there are practical solutions to enforce a strict, stable API for components.

## Example

```JSX
import React from 'react';

import { placeable } from 'placed-components';

// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
const Title = placeble.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  background: papayawhip;
`;

// Create a <MyTitle> react component that adds the layout for the tile.
// Modifying appearance will throw errors.
const MyTitle = placeable(Title)`
  margin: 4em;
`;

// Use them like any other React component – except they're styled!
  <MyTitle>Hello World, this is my first placed component!</MyTitle>
```

This is what you'll see in your browser:

<div align="center">
  <a href="https://placed-components.com">
    <img alt="Screenshot of the above code ran in a browser" src="http://i.imgur.com/wUJpcjY.jpg" />
  </a>
</div>

## Styleable Components

Occasionally you will create components that do need styling, whether they
are private or add a minimal base styles. Creating a styleable component
allows composition with added styles for appearance.

```JSX
import { placeable, styleable } from 'placed-components';

const NormalizedButton = styleable.button`
  ::-moz-focus-inner {
    margin: -1px;
    padding: 0;
    border-width: 1px;
  }
`;

const MyButton = placeable(NormalizedButton)`
  color: white;
  border: none;
  background: red;
`;

```

## Fixed Components

Some components should not have any styling added at all, such as a standard
child component. The created component cannot be submitted as a parameter to
styleable or placeable.

```JSX
import { fixed } from 'placed-components';

Menu.Item = fixed.li`
  padding: 0;
  margin: 0;
  display: flex;
`;
```

## Babel Macro

If you're using tooling that has babel-plugin-macros set up, you can switch to the `placed-components/macro` import path instead to gain the effects of the babel plugin without further setup.

```js
import { placeable } from 'placed-components/macro';

// A static className will be generated for Title (important for SSR)
const Title = placeble.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
```

## Contributing

If you want to contribute to `placed-components` please see our [contributing and community guidelines](./CONTRIBUTING.md), they'll help you get set up locally and explain the whole process.

Please also note that all repositories under the `placed-components` organization follow our [Code of Conduct](./CODE_OF_CONDUCT.md), make sure to review and follow it.

See [LICENSE](./LICENSE) for more information.
