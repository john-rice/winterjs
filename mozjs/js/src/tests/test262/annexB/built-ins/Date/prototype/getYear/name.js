// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: B.2.4.1
description: >
  Date.prototype.getYear.name is "getYear".
info: |
  Date.prototype.getYear ( )

  17 ECMAScript Standard Built-in Objects:
    Every built-in Function object, including constructors, that is not
    identified as an anonymous function has a name property whose value
    is a String.

    Unless otherwise specified, the name property of a built-in Function
    object, if it exists, has the attributes { [[Writable]]: false,
    [[Enumerable]]: false, [[Configurable]]: true }.
includes: [propertyHelper.js]
---*/

verifyProperty(Date.prototype.getYear, "name", {
  enumerable: false,
  writable: false,
  configurable: true,
  value: "getYear"
});

reportCompare(0, 0);