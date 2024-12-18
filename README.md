<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# noneInBy

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test whether every property of an object fails a test implemented by a predicate function.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/utils-none-in-by
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var noneInBy = require( '@stdlib/utils-none-in-by' );
```

#### noneInBy( object, predicate\[, thisArg ] )

Tests whether every property of an `object` fails a test implemented by a `predicate` function.

```javascript
function isUnderage( age ) {
    return ( age < 18 );
}

var obj = {
    'a': 28,
    'b': 22,
    'c': 25
};

var bool = noneInBy( obj, isUnderage );
// returns true
```

If a `predicate` function returns a truthy value, the function **immediately** returns `false`.

```javascript
function isUnderage( age ) {
    return ( age < 18 );
}

var obj = {
    'a': 12,
    'b': 22,
    'c': 25
};

var bool = noneInBy( obj, isUnderage );
// returns false
```

The invoked `function` is provided three agruments:

-   **value**: property value.
-   **key**: property key.
-   **object**: input object.

To set the function execution context, provide a `thisArg`.

```javascript
function sum( value ) {
    if ( value < 0 ) {
        return true;
    }
    this.sum += value;
    this.count += 1;
    return false;
}

var obj = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4
};

var context = {
    'sum': 0,
    'count': 0
};

var bool = noneInBy( obj, sum, context );
// returns true

var mean = context.sum / context.count;
// returns 2.5
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If the 1st argument is not an object or the second argument is not a fuction , the 
    function throws a Type Error.

-   If provided an empty object, the function returns `true`.

    ```javascript
    function truthy() {
        return true;
    }
    var bool = noneInBy( {}, truthy );
    // returns true
    ```

-   The function does **not** skip `undefined` elements.

    <!-- eslint-disable no-sparse-arrays, stdlib/doctest-marker -->

    ```javascript
    function log( value, index ) {
        console.log( '%s: %s', index, value );
        return false;
    }

    var obj = {
        'a': 1,
        'b': NaN,
        'c': NaN,
        'd': 4
    };

    var bool = noneInBy( arr, log );
    /* =>
        0: 1
        1: undefined
        2: undefined
        3: 4
    */
    ```

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var noneInBy = require( '@stdlib/utils-none-in-by' );

function isUnderage( age ) {
    return age < 18;
}

var obj = {
    'a': 26,
    'b': 20,
    'c': 25
};

var bool = noneInBy( obj, isUnderage );
// returns true
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils-any-in-by`][@stdlib/utils/any-in-by]</span><span class="delimiter">: </span><span class="description">test whether at least one property in an object passes a test implemented by a predicate function.</span>
-   <span class="package-name">[`@stdlib/utils-every-in-by`][@stdlib/utils/every-in-by]</span><span class="delimiter">: </span><span class="description">test whether all properties (own and inherited) of an object pass a test implemented by a predicate function.</span>
-   <span class="package-name">[`@stdlib/utils-for-in`][@stdlib/utils/for-in]</span><span class="delimiter">: </span><span class="description">invoke a function for each own and inherited enumerable property of an object.</span>
-   <span class="package-name">[`@stdlib/utils-none-by`][@stdlib/utils/none-by]</span><span class="delimiter">: </span><span class="description">test whether all elements in a collection fail a test implemented by a predicate function.</span>
-   <span class="package-name">[`@stdlib/utils-some-in-by`][@stdlib/utils/some-in-by]</span><span class="delimiter">: </span><span class="description">test whether an object contains at least n properties (own and inherited) which pass a test implemented by a predicate function.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-none-in-by.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-none-in-by

[test-image]: https://github.com/stdlib-js/utils-none-in-by/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/utils-none-in-by/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-none-in-by/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-none-in-by?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-none-in-by.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-none-in-by/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-none-in-by/tree/deno
[deno-readme]: https://github.com/stdlib-js/utils-none-in-by/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/utils-none-in-by/tree/umd
[umd-readme]: https://github.com/stdlib-js/utils-none-in-by/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/utils-none-in-by/tree/esm
[esm-readme]: https://github.com/stdlib-js/utils-none-in-by/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/utils-none-in-by/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-none-in-by/main/LICENSE

<!-- <related-links> -->

[@stdlib/utils/any-in-by]: https://github.com/stdlib-js/utils-any-in-by

[@stdlib/utils/every-in-by]: https://github.com/stdlib-js/utils-every-in-by

[@stdlib/utils/for-in]: https://github.com/stdlib-js/utils-for-in

[@stdlib/utils/none-by]: https://github.com/stdlib-js/utils-none-by

[@stdlib/utils/some-in-by]: https://github.com/stdlib-js/utils-some-in-by

<!-- </related-links> -->

</section>

<!-- /.links -->
