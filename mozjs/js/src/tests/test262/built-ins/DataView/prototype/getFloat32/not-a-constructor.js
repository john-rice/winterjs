// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-ecmascript-standard-built-in-objects
description: >
  DataView.prototype.getFloat32 does not implement [[Construct]], is not new-able
info: |
  ECMAScript Function Objects

  Built-in function objects that are not identified as constructors do not
  implement the [[Construct]] internal method unless otherwise specified in
  the description of a particular function.

  sec-evaluatenew

  ...
  7. If IsConstructor(constructor) is false, throw a TypeError exception.
  ...
includes: [isConstructor.js]
features: [Reflect.construct, DataView, arrow-function, ArrayBuffer]
---*/

assert.sameValue(
  isConstructor(DataView.prototype.getFloat32),
  false,
  'isConstructor(DataView.prototype.getFloat32) must return false'
);

assert.throws(TypeError, () => {
  let dv = new DataView(new ArrayBuffer(16)); new dv.getFloat32(0, 0);
}, '`let dv = new DataView(new ArrayBuffer(16)); new dv.getFloat32(0, 0)` throws TypeError');


reportCompare(0, 0);