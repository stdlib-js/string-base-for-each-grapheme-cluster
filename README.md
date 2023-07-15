<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

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

# forEachGraphemeCluster

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Invokes a function for each grapheme cluster (i.e., user-perceived character) in a string.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import forEachGraphemeCluster from 'https://cdn.jsdelivr.net/gh/stdlib-js/string-base-for-each-grapheme-cluster@deno/mod.js';
```

#### forEachGraphemeCluster( str, clbk\[, thisArg ] )

Invokes a function for each grapheme cluster (i.e., user-perceived character) in a string.

```javascript
function log( value, index ) {
    console.log( '%d: %s', index, value );
}

forEachGraphemeCluster( 'Beep!', log );
/* =>
    0: B
    1: e
    2: e
    3: p
    4: !
*/
```

The invoked function is provided three arguments:

-   **value**: grapheme cluster.
-   **index**: starting grapheme cluster index.
-   **str**: input string.

To set the function execution context, provide a `thisArg`.

```javascript
function clbk() {
    this.count += 1;
}

var str = 'Hello, world!';

var ctx = {
    'count': 0
};

forEachGraphemeCluster( str, clbk, ctx );

var bool = ( str.length === ctx.count );
// returns true
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import forEachGraphemeCluster from 'https://cdn.jsdelivr.net/gh/stdlib-js/string-base-for-each-grapheme-cluster@deno/mod.js';

function log( value, index ) {
    console.log( '%d: %s', index, value );
}

forEachGraphemeCluster( 'presidential election', log );
forEachGraphemeCluster( 'Iñtërnâtiônàlizætiøn', log );
forEachGraphemeCluster( '🌷🍕', log );
forEachGraphemeCluster( '\uD834\uDD1E', log );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/string-base-for-each-grapheme-cluster.svg
[npm-url]: https://npmjs.org/package/@stdlib/string-base-for-each-grapheme-cluster

[test-image]: https://github.com/stdlib-js/string-base-for-each-grapheme-cluster/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/string-base-for-each-grapheme-cluster/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/string-base-for-each-grapheme-cluster/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/string-base-for-each-grapheme-cluster?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/string-base-for-each-grapheme-cluster.svg
[dependencies-url]: https://david-dm.org/stdlib-js/string-base-for-each-grapheme-cluster/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/string-base-for-each-grapheme-cluster/tree/deno
[umd-url]: https://github.com/stdlib-js/string-base-for-each-grapheme-cluster/tree/umd
[esm-url]: https://github.com/stdlib-js/string-base-for-each-grapheme-cluster/tree/esm
[branches-url]: https://github.com/stdlib-js/string-base-for-each-grapheme-cluster/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/string-base-for-each-grapheme-cluster/main/LICENSE

</section>

<!-- /.links -->
