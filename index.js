gsap.registerPlugin(Flip);

let cats = gsap.utils.toArray("figure");
let bigCat = cats[0];

cats.forEach((dog) =>{
    dog.addEventListener('click',(e) => changeGrid(dog))
})

function changeGrid(cat){
    if(cat===bigCat) return;

    let state = Flip.getState(cats)

    bigCat.dataset.grid = cat.dataset.grid;
    cat.dataset.grid="img-1";
    bigCat=cat;

    Flip.from(state,{
        absolute:true,
        ease:'Power1.inOut'
    })
}
