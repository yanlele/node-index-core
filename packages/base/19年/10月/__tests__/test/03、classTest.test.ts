import Run from '../../test/03、classTest';
import * as path from 'path';

const dirname = path.resolve(__dirname);

describe('run', () => {
  test('Run.main();', () => {
    expect(Run.main()).toBe('yanle');
  });

  test('get path name', () => {
    expect(dirname).toBe(__dirname);
  });
});
