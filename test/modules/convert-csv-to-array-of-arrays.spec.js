import { convertCSVToArrayOfArrays } from '../../src/modules/convert-csv-to-array-of-arrays';

import {
  dataHeaderSemicolonSeparated,
  dataHeaderTabSeparated,
  dataWithMultilineEntries,
  dataNotEndingInNewline
} from '../fixtures/data';
import {
  expectedResultArrayHeader,
  expectedResultArrayWithoutHeader,
  expectedResultArrayMultiline,
} from '../fixtures/expected-results';

test('convertCSVToArrayOfArrays | with header and semicolon separated', () => {
  const result = convertCSVToArrayOfArrays(dataHeaderSemicolonSeparated, { header: true, separator: ';' });

  expect(result).toEqual(expectedResultArrayHeader);
});

test('convertCSVToArrayOfArrays | with header and tab separated', () => {
  const result = convertCSVToArrayOfArrays(dataHeaderTabSeparated, { header: true, separator: '\t' });

  expect(result).toEqual(expectedResultArrayHeader);
});
test('convertCSVToArrayOfArrays | without header and semicolon separated', () => {
  const result = convertCSVToArrayOfArrays(dataHeaderSemicolonSeparated, { header: false, separator: ';' });

  expect(result).toEqual(expectedResultArrayWithoutHeader);
});

test('convertCSVToArrayOfArrays | tab separated', () => {
  const result = convertCSVToArrayOfArrays(dataHeaderTabSeparated, { header: false, separator: '\t' });

  expect(result).toEqual(expectedResultArrayWithoutHeader);
});

test('convertCSVToArrayOfArrays | line break in value', () => {
  const result = convertCSVToArrayOfArrays(dataWithMultilineEntries, { header: false, separator: ';' });

  expect(result).toEqual(expectedResultArrayMultiline);
});

test('convertCSVToArrayOfArrays | no ending newline in input', () => {
  const result = convertCSVToArrayOfArrays(dataNotEndingInNewline, {header: true, separator: ','});

  expect(result).toEqual(expectedResultArrayHeader);
});