import { map, split, last } from 'lodash';

const handleGetImageListHelper = (list: string[], type: number) => {
  return map(list, item => {
    const file_name = last(split(item, '/'));

    return {
      url: item,
      file_name,
      type,
    };
  });
};

export default handleGetImageListHelper;
