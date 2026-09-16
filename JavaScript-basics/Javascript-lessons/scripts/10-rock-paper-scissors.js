let score=JSON.parse(localStorage.getItem('score')) || {
        wins:0,
        losses:0,
        ties:0
      };

       updateScoreElement();
       

      
    /*
      if(score===null){
        score={
          wins:0,
          losses:0,
          ties:0,
        }
      }
     */
      
     
      function pickcomputermove(){
             const randomnumber =Math.random();
            
            let computermove='';
            if(randomnumber>=0 && randomnumber<1/3){
                computermove='rock';
            }else if(randomnumber>=1/3 && randomnumber<2/3){
              computermove='paper';
            }else if(randomnumber>=2/3 && randomnumber<1){
              computermove='scissors';
            }
            return computermove;
              }


    function playgame(playermove){
      const computermove = pickcomputermove();
      let result='';
           if(playermove==='scissors'){

            if(computermove==='rock'){
                result='You lose.';
            }else if(computermove==='paper'){
              result='You win.';
            }else if(computermove==='scissors'){
              result='Tie.';
            }

           } else if(playermove==='paper'){
                  if(computermove==='rock'){
              result='You win.';
                }else if(computermove==='paper'){
                  result='Tie.';
                }else if(computermove==='scissors'){
                  result='You lose.';
                }
           }else if(playermove==='rock'){

            if(computermove==='rock'){
                result='Tie.';
            }else if(computermove==='paper'){
              result='You lose.';
            }else if(computermove==='scissors'){
              result='You win.';
            }

           }
            if(result==='You win.'){
              score.wins=score.wins+1;
            }else if(result==='You lose.'){
              score.losses+=1;
            }else if(result==='Tie.'){
              score.ties+=1;
            }

            localStorage.setItem('score',JSON.stringify(score));//localestorage only support strings

            updateScoreElement();
           
           document.querySelector('.js-result')
           .innerHTML=result;

           document.querySelector('.js-moves')
           .innerHTML=`You
              <img src="images/${playermove}-emoji.png" class="move-icon">
              <img src="images/${computermove}-emoji.png" class="move-icon">
              Computer.`
   
      }

       function updateScoreElement(){
        document.querySelector('.js-score')
            .innerHTML=`Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
       }