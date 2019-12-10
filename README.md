![npm version](https://img.shields.io/npm/v/@sullivan/react-inject.svg) ![npm license](https://img.shields.io/npm/l/@sullivan/react-inject.svg)

# @sullivan/react-inject
Inject asset content dynamically in React 16.8.3+. 

## Installation
```
npm install --save @sullivan/react-inject
```
or
```
yarn add @sullivan/react-inject
```


# Usage

```javascript
import React from 'react';
import ReactInject from '@sullivan/react-inject';

const Circle = (props) => (
  <ReactInject src="/asset/circle.svg" />
);

export default Circle;
```


# Props 
If an id is used, ReactInject will try to inject into the media into the query result. If not, a new div will be created and the content will be injected there.

```typescript
type ReactInjectProps {
  id?: string,
  src: string,
}
```
 