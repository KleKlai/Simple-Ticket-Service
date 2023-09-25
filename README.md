To run development

```javascript
npm run dev
```

To run dummy API server

```javascript
json-server --watch --port 4000 ./_data/db.json
```

To make client component add "use client" on top of a component

example

```javascript
"use client"

import React from 'react'

export default function CreateForm() {
  return (
    <div>CreateForm</div>
  )
}

```