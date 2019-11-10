// <div>
//    <button id="getStar">Get RxJS Star Count</button>
//    <div id="text"></div>
// </div>

// 希望用ajax 请求
import { fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';

fromEvent(document.querySelector('#getStar'), 'click')
  .subscribe(
    ()=> ajax.get('xxxxxx', {responseType: 'json'})
      .subscribe(value=>{
        const starCount = value.response;
        document.querySelector('#text').innerHTML = starCount;
      })
  );
