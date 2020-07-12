const img = document.querySelector('img');
const box = document.querySelector(".box");
const h3 = document.querySelector('h3');
const p = document.querySelector('p');

count = 0;

let testimonial = testimonials[count];
img.src = testimonial.photo;
h3.innerHTML = testimonial.name;
p.innerHTML = testimonial.comment; 

function rightBtn() {
    count+=1;    
    if (count< testimonials.length){
        let testimonial = testimonials[count];
        img.src = testimonial.photo;
        h3.innerHTML = testimonial.name;
        p.innerHTML = testimonial.comment; 
    } else {
        count = 0;
        let testimonial = testimonials[count];
        img.src = testimonial.photo;
        h3.innerHTML = testimonial.name;
        p.innerHTML = testimonial.comment; 
    }
}

function leftBtn() {
    count-=1;    
    if (count>=0){
        let testimonial = testimonials[count];
        img.src = testimonial.photo;
        h3.innerHTML = testimonial.name;
        p.innerHTML = testimonial.comment; 
    } else {
        count = (testimonials.length - 1);
        let testimonial = testimonials[count];
        img.src = testimonial.photo;
        h3.innerHTML = testimonial.name;
        p.innerHTML = testimonial.comment; 

    }
}

