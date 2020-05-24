const fs = require('fs');

const PATH = '/Users/yons/Downloads/10、[后端开发]Spring Security开发安全的REST服务'; // 目录

//  遍历目录得到文件信息
const walk = (path: string, callback: Function) => {
  const files: string[] = fs.readdirSync(path);

  files.forEach(file => {
    if (fs.statSync(path + '/' + file).isFile()) {
      callback(path, file);
    }
  });
};

// 修改文件名称
const rename = (oldPath: string, newPath: string) => {
  fs.rename(oldPath, newPath, (err: NodeJS.ErrnoException | null) => {
    if (err) {
      throw err;
    }
  });
};

// 运行
walk(PATH, (path: string, fileName: string) => {
  const oldPath = path + '/' + fileName, // 源文件路径
    newPath = path + '/' + fileName.replace('(更多IT教程 www.zxit8.com)', ''); // 新路径

  rename(oldPath, newPath);
});
