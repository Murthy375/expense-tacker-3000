
# Expense Tracker 3000

A tracker to track where you spend and waste your hard earned money.


## Tech Stack

**Server:** 
- Node
- Express
- Redis
- PostgreSQL
- TypeScript

## Prerequisites

- Node.js >= 18
- pnpm >= 9 (`npm install -g pnpm`)
## Installation

Install my-project with npm

```bash
  npm install my-project
  cd my-project
```
    
## Usage/Examples

```javascript
import Component from 'my-project'

function App() {
  return <Component />
}
```

## API Reference

#### Register

```http
POST /api/auth/register
```

| Parameter | Type | Description |
| :-------- | :--- | :---------- |
| `email` | `string` | **Required**. Your email |
| `username` | `string` | **Required**. Your username |
| `password` | `string` | **Required**. Your password |

#### Login

```http
POST /api/auth/login
```

| Parameter | Type | Description |
| :-------- | :--- | :---------- |
| `email` | `string` | **Required**. Your email |
| `password` | `string` | **Required**. Your password |

## License

```
MIT License

Copyright (c) 2026 Sridhar Murthy K Chandra

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
