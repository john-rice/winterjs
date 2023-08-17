// |reftest| skip -- Temporal is not supported
// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.calendar.prototype.yearmonthfromfields
description: Properties on objects passed to yearMonthFromFields() are accessed in the correct order
includes: [compareArray.js, temporalHelpers.js]
features: [Temporal]
---*/

const expected = [
  "get options.overflow",
  "get options.overflow.toString",
  "call options.overflow.toString",
  "get fields.month",
  "get fields.month.valueOf",
  "call fields.month.valueOf",
  "get fields.monthCode",
  "get fields.monthCode.toString",
  "call fields.monthCode.toString",
  "get fields.year",
  "get fields.year.valueOf",
  "call fields.year.valueOf",
];
const actual = [];

const instance = new Temporal.Calendar("iso8601");

const fields = {
  year: 1.7,
  month: 1.7,
  monthCode: "M01",
};
const arg1 = new Proxy(fields, {
  get(target, key) {
    actual.push(`get fields.${key}`);
    if (key === "calendar") return instance;
    const result = target[key];
    return TemporalHelpers.toPrimitiveObserver(actual, result, `fields.${key}`);
  },
  has(target, key) {
    actual.push(`has fields.${key}`);
    return key in target;
  },
});

const options = {
  overflow: "reject",
};
const arg2 = new Proxy(options, {
  get(target, key) {
    actual.push(`get options.${key}`);
    return TemporalHelpers.toPrimitiveObserver(actual, target[key], `options.${key}`);
  },
  has(target, key) {
    actual.push(`has options.${key}`);
    return key in target;
  },
});

const result = instance.yearMonthFromFields(arg1, arg2);
TemporalHelpers.assertPlainYearMonth(result, 1, 1, "M01", "yearMonth result");
assert.sameValue(result.calendar, instance, "calendar result");
assert.compareArray(actual, expected, "order of operations");

reportCompare(0, 0);