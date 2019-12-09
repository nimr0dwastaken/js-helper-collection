/**
 * 1-line Quick trick: if / else statements and assignments
 */

var x;
// Normal multi-line
if(1 === 1){
    x = 'something';
} else {
    x = 'something else';
}       
console.log(x);

// 1-line, same as 5 line above
var x = (1 === 1 ? 'something' : 'something else');
console.log(x);



/*
 * JS template literals
 * <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals>
 * 
 * The next two $.each functions produce the same output.
 * Instead of using newline \n\ and '++', wrap output in backticks `` and variables / functions in ${}
 * 
 * Note: Using 1-line if / else as previously described
 */

let values = [1, 2, 3];

// Regular example
$.each(values, (index, value) => {
    var end = value === 3;
    var print = (!end ? value : 'end');
    console.log('\n\
        <div>\n\
            <p>' + print + '</p>\n\
        </div>\n\
    ');
});

// Using template literals
$.each(values, (index, value) => {
    console.log(`
        <div>
            <p>${value}: ${(value === 3 ? 'end' : value)}</p>
        </div>
    `);
});

// Another example using template literals
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
