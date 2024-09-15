import resturant from './images/resturant.jpg'

const Herosection=()=>{

return(

  <div className="herosection-handle">

<div className="herosectuin-header">
  <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div class="col-md-3 mb-2 mb-md-0">
      <img src=""></img>

      </div>

      <ul class="nav col-12 col-md-auto mb-4 justify-content-center mb-md-2 header-colour">
        <li><a href="#" class="nav-link px-6 link-secondary">Home</a></li>
        <li><a href="#" class="nav-link px-6">Features</a></li>
        <li><a href="#" class="nav-link px-6">Pricing</a></li>
        <li><a href="#" class="nav-link px-6">FAQs</a></li>
        <li><a href="#" class="nav-link px-6">About</a></li>
      </ul>

      <div class="col-md-3 text-end">
        <button type="button" class="btn btn-outline-warning me-2">Login</button>
        <button type="button" class="btn btn-outline-warning">Sign-up</button>
      </div>
    </header>
    <div class="container px-4 text-center">
  <div class="row gx-5">
    <div class="col">
     <div class="p-3"><div class="col-lg-6 ">
        <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Responsive left-aligned hero with image</h1>
        <p class="lead"><h1 className='title-handle'>
          Title Here</h1>
          <p className='title-text2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A explicabo pariatur tenetur? Nesciunt, asperiores 
          </p>
          </p> 

        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" class="btn btn-outline-warning btn-lg px-4 me-md-2">Check it</button>
         
        </div>
      </div></div>
    </div>
    <div class="col">
      <div class="p-3"></div>
    </div>
  </div>
</div>
</div>
</div>

)
}

export default Herosection;