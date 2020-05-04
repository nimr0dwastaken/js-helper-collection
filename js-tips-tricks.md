# JS tips & tricks
Just a few short tricks to shorten JS
 
 
 
 ## Conditional ternary operator
if / else statements and assignments

**Normal multi-line**
```javascript
let x;

if(1 === 1){
    x = 'something';
} else {
    x = 'something else';
}       
console.log(x); // 'something'
```

**1-line, same as 5 line above**
```javascript
let x = (1 === 1 ? 'something' : 'something else');
console.log(x); // 'something'
```
 
 
 
 
## JS template literals

The next two $.each functions produce the same output.

Instead of using newline \n\ and '++', wrap output in backticks \`\`, and variables / functions in ${}


Note: Using 1-line if / else as previously described


**One way of normal outputting a loop (each)**
```javascript
let values = [1, 2, 3];

$.each(values, (index, value) => {
    var end = value === 3;
    var print = (!end ? value : 'end');
    console.log('\n\
        <div>\n\
            <p>' + print + '</p>\n\
        </div>\n\
    ');
});
```

**Using template literals**
```javascript
$.each(values, (index, value) => {
    console.log(`
        <div>
            <p>${value}: ${(value === 3 ? 'end' : value)}</p>
        </div>
    `);
});
```
**Using template literals**
```javascript
let object = {
    title: 'Some title',
    body: 'Some body text'
}
console.log(`
    <div>
        <p class="title">${object.title}</p>
        <p class="body">${object.body}</p>
    </div>
`);
```
 
 
 
## jQuery doc ready shorthand
```javascript
$(() => {
    // Do stuff
});
```
 
 
 
## Short form conditionals

**Normal example**
```javascript
if (pageFound) {
    displayPage();
}
```
**Short form**
```javascript
pageFound && displayPage()
```
