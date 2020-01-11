import * as download from 'download-git-repo';

download('github:yanlele/yanlele.github.io', 'down/', err => {
  console.log(err ? 'Error' : 'Success');
});
