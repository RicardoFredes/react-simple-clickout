# React Simple ClickOut

```npm install --save react-simple-clickout```


## Demo

[React Simple ClickOut](https://jsfiddle.net/n5u2wwjg/123877/)


## How to use

Set your action function in ```onClickOut``` on the ```ClickOut``` component


## Examples

```tsx
import React, { useState } from 'react'
import ClickOut from 'react-simple-clickout'

const Test = () => {
  const [active, setActive] = useState(false)

  return (
    <div>
      <h2>React Simple ClickOut</h2>
      <button onClick={() => setActive(true)}>Click-me</button>
      {active && (
        <ClickOut onClickOut={() => setActive(false)}>I`m visible</ClickOut>
      )}
    </div>
  )
}

export default Test

```

```jsx
import React from 'react'
import ClickOut from 'react-simple-clickout'

class ReactSimpleClickOut extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    	active: false
    }
  }
  
  onClickOut(){
    this.setState({ active: false })
  }
  
  render() {
    return (
      <div>
        <h2>React Simple ClickOut</h2>
        <button onClick={() => this.setState({active: true})}>Click-me</button>
        {this.state.active && (
          <ClickOut onClickOut={() => this.onClickOut()}>I`m visible</ClickOut>
        )}
      </div>
    )
  }
}
```
