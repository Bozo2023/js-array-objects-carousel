const images=[{
    image:"01.webp",
    title:"Marvel\'s Spiderman Miles Morale",
    text: "Experience the rise of Miles MOrales as the new hero master incredible,explosive new powers to become his own Spider-man"},
    {
        image:"02.webp",
        title:"Marvel\'s Spiderman Miles Morale",
        text: "Experience the rise of Miles MOrales as the new hero master incredible,explosive new powers to become his own Spider-man"
    },
    {
        image:"03.webp",
        title:"Marvel\'s Spiderman Miles Morale",
        text: "Experience the rise of Miles MOrales as the new hero master incredible,explosive new powers to become his own Spider-man"
    },
    {
        image:"04.webp",
        title:"Marvel\'s Spiderman Miles Morale",
        text: "Experience the rise of Miles MOrales as the new hero master incredible,explosive new powers to become his own Spider-man"
    },
    {
        image:"05.webp",
        title:"Marvel\'s Spiderman Miles Morale",
        text: "Experience the rise of Miles MOrales as the new hero master incredible,explosive new powers to become his own Spider-man"
    ,
    }];
    
const firstImage= document.querySelector("#carousel figure")
const pics=document.querySelector("#carousel .pics")
const arrowUp=document.querySelector(".up")
const arrowDown=document.querySelector(".down")

let PositionImage= 0

firstImage.innerHTML=`
<img src='./${images[PositionImage].image}' alt="${images[0].title}">
      <div>
        <h2>${images[PositionImage].title}</h2>
        <p>
        ${images[PositionImage].text}
        </p>
       </div>`


 images.forEach( (element,index) => {
    const divPics= document.createElement('div')
    divPics.className='col'
    const figurePics= document.createElement('figure')
    figurePics.className=`${(index===positionImage) ?'active':''}`

    divPics.append(figurePics)
    const imgPics= new Image()
    imgPics.src=`./${element.image}`

    divPics.append(figurePics)
    figurePics.append(imgPics)
    pics.append(divPics)

    divPics.addEventListener('click',function(){
        firstImage.querySelector('img').setAttribute("src",`./${this.getAttribute('src')}`)

    })
    
    const figurePicsPics= document.querySelector('.pics .col figure ')
    figurePicsPics.forEach((element,index)=>{
        element.addEventListener('click',function(){
            figurePics[PositionImagesitionImage].classList.remove('active')
            PositionImage=index
            figurePics[PositionImagesitionImage].classList.add('active')
            const firstImageImg=firstImage.querySelector('img')
            const firstImageH2=firstImage.querySelector('h2')
            const firstImageP=firstImage.querySelector('p')
            firstImageImg.src=`./${images[PositionImage].image} `
            firstImageH2.innerHTML=images[PositionImage].title
            firstImageP.innerHTML=images[PositionImage].text
           



            
        })
    })


arrowUp.addEventListener('click',function(){
    const firstImageImg=firstImage.querySelector('img')
    const firstImageH2=firstImage.querySelector('h2')
    const firstImageP=firstImage.querySelector('p')
    const figurePics= document.querySelector('.pics .col figure')
    figurePics[PositionImagesitionImage].classList.remove('active')

    if( PositionImage===0){
       return PositionImage= images.length-1
       firstImageImg.src=`./${images[PositionImage].image} `
       firstImageH2.innerHTML=images[PositionImage].title
       firstImageP.innerHTML=images[PositionImage].text
       figurePics[PositionImagesitionImage].classList.add('active')


    } else {
       return PositionImage--
       firstImageImg.src=`./${images[PositionImage].image} `
       firstImageH2.innerHTML=images[PositionImage].title
       firstImageP.innerHTML=images[PositionImage].text
       figurePics[PositionImagesitionImage].classList.add('active')



    }

})


arrowDown.addEventListener('click',function(){
    const firstImageImg=firstImage.querySelector('img')
    const firstImageH2=firstImage.querySelector('h2')
    const firstImageP=firstImage.querySelector('p')
    const figurePics= document.querySelector('.pics .col figure')

    if(PositionImage=== images.length-1){
        PositionImage=0
        firstImageImg.src=`./${images[PositionImage].image} `
       firstImageH2.innerHTML=images[PositionImage].title
       firstImageP.innerHTML=images[PositionImage].text
       figurePics[PositionImagesitionImage].classList.add('active')


        
    }else{
        PositionImage++
        firstImageImg.src=`./${images[PositionImage].image} `
       firstImageH2.innerHTML=images[PositionImage].title
       firstImageP.innerHTML=images[PositionImage].text
       figurePics[PositionImagesitionImage].classList.add('active')


    }
})
