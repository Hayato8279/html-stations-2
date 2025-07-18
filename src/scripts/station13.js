function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
  if(e){
    return document.getElementById('text').style.backgroundColor = '#ff0000';
  }
  else{
    return document.getElementById('text').style.backgroundColor = 'transparent';
  }
}
