const tabLinks = document.getElementsByClassName('tab-links');
const textContent = document.getElementsByClassName('gathering-text-content')
const imgContent = document.getElementsByClassName('img-content')


function openTab(tabname,imgname){
  for(let i = 0;i<tabLinks.length;i++){
    tabLinks[i].classList.remove('active-link')
  }

  for(let i = 0;i<textContent.length;i++){
    textContent[i].classList.remove('active-content')
  }

  for (let i =0 ;i<imgContent.length;i++){
    imgContent[i].classList.remove('active-img')
  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add('active-content')
  document.getElementById(imgname).classList.add('active-img')

}