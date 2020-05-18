import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  @media(min-width: 320px) {
    body{
      background:${({ theme }) => theme.body} ;
      color:${({ theme }) => theme.text} ;
    }
    p{
      margin: 20px;
    }
    h1{
      font-size:60px;
    }
    h2{
      font-size:50px;
    }
    h3{
      font-size:40px;
    }
    p.questionQuiz{
      font-size:32px;
    }
    img.arrowPink{
      width:50px;
      height:auto;
    }
    .white{
      color:white;
    }
    .modal{
      background-color: rgba(0,0,0,0.5);
      position:relative;
      margin: 0 auto;
      width:300px;
    }
    .btn-rounded-small{
      background-color: #DB7093;
      border: none;
      border-radius:50px;
      color: white;
      padding: 10px 22px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      font-weight:bold;
      margin: 4px 2px;
      cursor: pointer;
      outline:none;
    }
    .btn-rounded-small:hover{
      background-color: rgb(248, 153, 185);
    }
    .btn-rounded{
      background-color: #DB7093;
      border: none;
      border-radius:50px;
      color: white;
      padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      font-weight:bold;
      margin: 4px 2px;
      cursor: pointer;
    }
    #more{
      font-size:30px;
    }
    .btn-lang{
      width:30px;
      background-color: #DB7093; 
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 0px;
  outline:none;
  cursor: pointer;
    }
    img{
      width:100px;
      height:auto;
    }
    .logoNav{
      width:50px;
      height: auto;
    }
    #img-landscape{
      height:215px;
    }
    #van{
      width:200px;
      height:auto;
    }
    #bikeMain{
      width:200px;
      height:auto;
    }
    #squab{
      width:50px;
      height:auto;
      position:relative;
      bottom:526px;
      left:60px;
    }
    .bold{
      font-weight:bold;
    }
    .motto{
      font-size:30px;
      text-decoration:underline;
    }
  }
  @media(min-width: 425px){
    body{
      h1{
        font-size:150px;
      }
      h2{
        font-size:100px;
      }
      h3{
        font-size:70px;
      }
      img.arrowPink{
        width:70px;
        height:auto;
      }
      .modal{
        background-color: rgba(0,0,0,0.5);
        position:relative;
        margin: 0 auto;
        width:400px;
      }
   
      .logoNav{
        width:60px;
        height: auto;
      }
      #bikeMain{
        width:400px;
        height:auto;
      }
      .motto{
        font-size:50px;
        text-decoration:underline;
      }
      .boxCenter{
        display:flex;
        flex-direction:row;
        justify-content:center;
      }
      #story{
        position:relative;
        left:50px;
        width:300px;
      }
      #auto{
        position:relative;
        left:50px;
        width:300px;
      }
      #out{
        position:relative;
      }
      #gris{
        position:relative;
        left:-60px;
        height:190px;
        width:190px;
        background-color:rgba(172, 172, 173,0.3);
      }
      #grisMotto{
        position:relative;
        left:-60px;
        top:28px;
        height:60px;
        width:100px;
        background-color:rgba(172, 172, 173,0.3);
      }
      #grisMotto2{
        position:relative;
        left:98px;
        top:32px;
        height:60px;
        width:100px;
        background-color:rgba(172, 172, 173,0.3);
      }
    }
  }
  @media(min-width: 768px) {
    body{
      position:relative;
      background:${({ theme }) => theme.body} ;
      color:${({ theme }) => theme.text} ;
      //margin:0 150px 0 150px;
    }
    h2{
      font-size:150px;
    }
    p.questionQuiz{
      font-size:70px;
    }
    form{
      width:300px;
    }
    hr{
      display:none;
    }
    .modal{
      background-color: rgba(0,0,0,0.5);
      position:relative;
      margin: 0 auto;
      width:500px;
    }
    #more{
      font-size:50px;
    }
    .btn-rounded{
      background-color: #DB7093;
      border: none;
      border-radius:50px;
      color: white;
      padding: 30px 64px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 32px;
      margin: 4px 2px;
      cursor: pointer;
      outline:none;
    }
    .btn-rounded:hover{
      background-color: rgb(248, 153, 185);
    }
    .box{
      display:flex;
      flex-direction:row;
      justify-content:space-around;
    }
    .boxReverse{
      display:flex;
      flex-direction:row-reverse;
      justify-content:space-around;
    }
    .boxContainer{
      display:flex;
      flex-direction:row;
      justify-content:space-around;
      align-items: center;
    }
    .boxContainerReverse{
      display:flex;
      flex-direction:row-reverse;
      justify-content:space-around;
      align-items: center;
    }
    .bold{
      position:relative;
      top:50px;
    }
    img{
      width:300px;
      height:auto;
    }
    #van{
      width:400px;
      height:auto;
    }
    #eyes{
      width:500px;
      height:auto;
    }
    #bicycleGirl{
      width:250px;
      height:auto;
    }
    #umbrellaGirl{
      width:200px;
      height:auto;
    }
    #homeContact{
      width:300px;
      height:auto;
    }

    #quizImg{
      width:150px;
      height:auto;
    }
    #water{
      width:200px;
      height:auto;
    }
    #pompe{
      width:200px;
      height:auto;
    }
    .join{
      position:relative;
      bottom:120px;
    }
    #squab{
      width:100px;
      height:auto;
      position:relative;
      bottom:50px;
    }
    #green{
      position:absolute;
      z-index:-1;
      left:0px;
      top:0px;
      width:50vw;
      height:100%;
      background-color:rgba(107, 252, 3,0.1);
    }
    #orange{
      position:absolute;
      z-index:-1;
      right:0px;
      top:0px;
      width:50vw;
      height:100%;
      background-color:rgba(252, 186, 3,0.1);
    }
  }
  @media(min-width: 1024px) {
    body{
      background:${({ theme }) => theme.body} ;
      color:${({ theme }) => theme.text} ;
    }
    form{
      width:400px;
    }
    img{
      width:500px;
      height:auto;
    }
    .modal{
      background-color: rgba(0,0,0,0.5);
      position:relative;
      margin: 0 auto;
      width:700px;
    }
    #bicycleGirl{
      width:400px;
      height:auto;
    }
    #umbrellaGirl{
      width:250px;
      height:auto;
    }
    #bikeMain{
      width:600px;
      height:auto;
    }
    .safety{
      width:200px;
      height:auto;
    }
    p.motto.join{
      font-size:150px;
    }
    .bigContainer{
      display:flex;
      flex-direction:row;
      justify-content:space-around;
    }

  }
  `



  // body {
  //   align-items: center;
  //   background: ${({ theme }) => theme.body};
  //   color: ${({ theme }) => theme.text};
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: center;
  //   height: 200vh;
  //   margin: 0;
  //   padding: 0;
  //   font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  //   transition: all 0.25s linear;
  // }