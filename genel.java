@media only screen and (max-width:800px){
    .header-menu ul{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        position: absolute;
        top: 100px;
        left: 0;
        background-color: #2b1402da;
        width: 100%;
        overflow: hidden;
        transition:max-height 1.1;
        
    }
    .header-menu ul li{
        margin-right: 50px;
        margin-top: 5px;
        margin-bottom: 5px;
    }
    .header-menu ul li a{
        color: #fff;
    }
    .header-menu #menu-icon{
        display: block;
        cursor: pointer;
    }
}

/*About*/

@media only screen and (max-width:990px){
    .about-img{
        width: 100%;
        margin-bottom: 30px;
    }
    .about-text{
        width: 100%;
    }
}

/* PORTFOLIO */

@media only screen and (max-width:990px){
    .portfolio .portfolio-İtem{
            flex-basis: 50%;
    }
}

@media only screen and (max-width:580px){
    .portfolio .portfolio-İtem{
        flex-basis: 100%;
    }
}
@media only screen and (max-width:800px){
   .contact-content{
    flex-direction: column;
   }
   .contact-item{
    margin-top: 30px;
   }
   .contact-item p{
    width: 100%;
    text-align: center;
   }
}




.animated-text {
    animation: color-change 5s infinite reverse;
  }
  
  @keyframes color-change{
    0% {
        background-color: rgb(95, 99, 95);
      }
      50% {
        background-color: rgb(36, 36, 8);
      }
      100% {
    background-color: rgb(32, 26, 26);
      }
  }
  