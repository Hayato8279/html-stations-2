function displayList(){
    const fruits = document.getElementById("fruits");
    const list = document.createElement('ul');
    const text1 = document.createElement('li');
    const text2 = document.createElement('li');
    const text3 = document.createElement('li');
    text1.textContent = 'リンゴ';
    text2.textContent = 'イチゴ';
    text3.textContent = 'ブドウ';
    list.appendChild(text1);
    list.appendChild(text2);
    list.appendChild(text3);
    fruits.appendChild(list);
}