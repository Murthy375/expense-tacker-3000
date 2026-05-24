
# Expense Tracker 3000

A tracker to track where you spend and waste your hard earned money.


## Tech Stack

**Server:** 
- Node
- Express
- pnpm
- Redis
- PostgreSQL


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

[MIT](https://choosealicense.com/licenses/mit/)

