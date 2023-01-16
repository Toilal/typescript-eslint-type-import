n/no-unpublished-import issue with typescript import type
---

`import type` should not trigger this error as it doesn't require the dependency to be available at runtime.

```

$ npm run lint

> lint
> eslint .

/home/toilal/projects/typescript-eslint-type-import/src/index.ts
1:35  error  "express" is not published  n/no-unpublished-import

✖ 1 problem (1 error, 0 warnings)
```
