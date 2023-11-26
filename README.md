# A packaging tutorial
Print "Hello World" in different colors.

## Usage

### CommonJS
```JavaScript
const { Printer } = require('@rookie007/packaging-tutorial')

const app = new Printer()

app.bluePrint()

```

### ESModule || TypeScript
```TS
import { Printer } from "@rookie007/packaging-tutorial";

const app = new Printer()

app.bluePrint()
```