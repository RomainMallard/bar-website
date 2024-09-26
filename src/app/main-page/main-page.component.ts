import { Component, OnInit, HostListener, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent implements AfterViewInit {


ngAfterViewInit(): void 
{
  const buttons = document.querySelectorAll<HTMLButtonElement>("[data-carousel-button]");
  buttons.forEach(button => 
  {
    button.addEventListener("click", () => 
      {
        const offset = button.dataset['carouselButton'] === "next" ? 1 : -1;
        const slidesGroup = button
          .closest("[data-carousel]")!
          .querySelector<HTMLElement>("[data-slides]");
        const activeSlide = slidesGroup!.querySelector<HTMLElement>("[data-active]");
        let newIndex = Array.from(slidesGroup!.children).indexOf(activeSlide!) + offset;
        if (newIndex < 0) newIndex = slidesGroup!.children.length - 1;
        if (newIndex >= slidesGroup!.children.length) newIndex = 0;
        activeSlide!.removeAttribute('data-active');                            //current active slide set to NotActive
        slidesGroup!.children[newIndex].setAttribute('data-active', 'true');   //children of gour of slide @Index = deta-active                                      
      }
      );
    }
  );
  
  const trippleButtons = document.querySelectorAll<HTMLElement>("[data-triCarousel-button]");
  const triSlides =  document.querySelectorAll<HTMLElement>("[data-triCarousels]")
  const firstTriCarrousel = document.querySelector('.img-carrousel.left');
  trippleButtons.forEach((trippleButton)=>
  {
    trippleButton.addEventListener("click", () => 
      {
        const triOffset = trippleButton.dataset['carouselButton'] === "next" ? 1 : -1;
        console.log("offset = " + triOffset);
        const firstSlides = firstTriCarrousel!.querySelectorAll<HTMLImageElement>('.slide'); // Get all slide elements within the first img-carrousel
        let triIndex: number = 0 ;
        //  vvvvv get the index of active slides from first carrousel
        firstSlides.forEach((firstSlide, i) => 
        {
          if (firstSlide.hasAttribute('data-active')) 
            {
              triIndex = i; // Set index to the current position if data-active is found
              console.log(triIndex)
            }          
        })        
        console.log("definiti"+ triIndex)
        let triOffsetIndex = triIndex + triOffset
        let triNewIndex : number = 0;
        if (triOffsetIndex < 0) triNewIndex = firstTriCarrousel!.children.length - 1;
        if (triOffsetIndex >= firstTriCarrousel!.children.length) triNewIndex = 0;
        console.log("pushed " +  "triNewIndex =" + triNewIndex + " childrenLength " + firstTriCarrousel!.children.length);
        
        // vvvv from here, pb need for each beacause 3 carrousel 
         //get current index for active slide THEN add to ofset to get new index
         
        triSlides.forEach((triSlide) => 
        {
          const activeSlide = triSlide!.querySelector<HTMLElement>("[data-active]");
          triSlide!.children[triNewIndex].setAttribute('data-active', 'true');
          activeSlide!.removeAttribute('data-active');    
        })
      }
      );

  }
  )
  

  const imagesSelectors = document.querySelectorAll<HTMLElement>('[data-carrouselSelector]');

  imagesSelectors.forEach((imagesSelector, index) => {


    console.log("help")
   

    console.log("images selector" + index)
    imagesSelector.addEventListener("click", () => {

      triSlides.forEach((triSlide) => 
        {
          const activeSlide = triSlide!.querySelector<HTMLElement>("[data-active]");
          activeSlide!.removeAttribute('data-active');   

          triSlide!.children[index].setAttribute('data-active', 'true');
          
        })

    })
  


  })


}

}
