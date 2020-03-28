export interface Tree {
  id: string;
  name: string;
  pid?: string;
  children?: Tree[];
}

export const tree: Tree[] = [
  {
    id: '1',
    name: '教学素材管理',
    children: [
      {
        id: '101',
        name: '教学素材',
        children: [
          {
            id: '10101',
            name: '修改',
          },
          {
            id: '10102',
            name: '添加',
          },
        ],
      },
      {
        id: '102',
        name: '测试试题',
      },
      {
        id: '103',
        name: '问题任务',
      },
    ],
  },
  {
    id: '2',
    name: '基础数据管理',
    children: [
      {
        id: '201',
        name: '专业设置',
      },
      {
        id: '202',
        name: '专业管理',
      },
    ],
  },
];
