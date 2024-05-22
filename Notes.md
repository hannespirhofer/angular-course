# Angular Course Notes

## @defer - Angular Partial template loading syntax
https://angular-university.io/lesson/angular-defer-section-intro

### @defer

`@defer { code here }`

@defer bundles the whole code inside the brackets into an own script 
instead of main.js - which is usually only loaded when needed and 
used for heavy computational tasks.

It will be loaded once the browser has loaded all other stuff and is no longer idle.

**Tip**: `@defer(on idle; prefetch on idle)` Those are the default values which are 
used when just using @defer without params. They just and only start when the browser 
is in the idle state and all other loading has been completed.
(on immediate; prefetch on immediate) are pre-defined triggers to load immediately. 

### @placeholder

The placeholder is a replacement content shown before the defer block 
has been loaded completely.

```
@defer {

// heavy code execution here

}

@placeholder {

<h2>This is a placeholder and shown while @defer loads</h2>

}
```
#### Params

`@placeholder(minimum 3s)`

This adds a minimum of time to show the placeholder before showing the defer script code.
If script takes longer, indeed this will be much more.

Placeholder should not be used for loading spinners- its like show a button with no heavy code before the
right and heavy code button is loaded.

### @loading

This is used for loading indicators while @defer loads (like spinners) or default cards.

```
@defer {
... heavy code here
}
@loading {
<h1>This is a loading indicator...</h1>
}
```

#### Params minimum and after

`@loading(minimum 3s; after 1s) {}`

If loading process takes more than 1s, show the loading block, and then show it
for at least 3 seconds.

**Tip**: Loading Blocks should normally be shown >1.5s to the user so the user
gets time to know what happens. Otherwise, the application feels somehow broken to the user.




### @defer Params

`@defer(on timer(15s); prefetch on idle)`

This code loads the defer block on idle state but renders after 15 seconds.
Meanwhile, the @placeholder is shown.

`@defer(on timer(15s); prefetch on timer(10s))`

This code prefetch(load) the separate script after 10s and 5 s after the block is shown.
***Tip***: Check Dev Tools Network Tab.

### @error

`@error { <h1>An error occurred.</h2> }`

This block gets executed when the @defer throws an error.
