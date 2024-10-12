let one = document.querySelector(".one")
let two = document.querySelector(".two")
let three = document.querySelector(".three")
let four = document.querySelector(".four")
let five = document.querySelector(".five")
let six = document.querySelector(".six")
let seven = document.querySelector(".seven")
let eight = document.querySelector(".eight")
let nine = document.querySelector(".nine")
let span = document.querySelector("#span")


let strO = ""
let strX = ""
let flag = true

const pattern = ["123","456","789","147","258","369","156","357"]


let counter =0

function check()
{
    let val = one.innerHTML
    
}

// pattern ccheck
function patternCheck()
{
let one = document.querySelector(".one").textContent
let two = document.querySelector(".two").textContent
let three = document.querySelector(".three").textContent
let four = document.querySelector(".four").textContent
let five = document.querySelector(".five").textContent
let six = document.querySelector(".six").textContent
let seven = document.querySelector(".seven").textContent
let eight = document.querySelector(".eight").textContent
let nine = document.querySelector(".nine").textContent

console.log(one , two , three);
if((one=="x" && two=="x" && three=="x") || ((one=="o" && two=="o" && three=="o")))
    {
        if((one=="x" && two=="x" && three=="x"))
            {
                span.textContent = "winner is X"
            }

        else 
        {
            span.textContent = "winner is O"
        }
    }


else if((four=="x" && five=="x" && six=="x") || ((four=="o" && five=="o" && six=="o")))
    {
            if((four=="x" && five=="x" && six=="x"))
            {
                span.textContent = "winner is X"
            }
            else 
            {
                span.textContent = "winner is O"
            }
    }


else if((seven=="x" && eight=="x" && nine=="x") || ((seven=="o" && eight=="o" && nine=="o")))
    {
        if((seven=="x" && eight=="x" && nine=="x"))
            {
                span.textContent = "winner is X"
            }
            else 
            {
                span.textContent = "winner is O"
            }
    }

else if((one=="x" && four=="x" && seven=="x") || ((one=="o" && four=="o" && seven=="o")))
    {
        if((one=="x" && four=="x" && seven=="x"))
            {
                span.textContent = "winner is X"
            }
            else 
            {
                span.textContent = "winner is O"
            }
    }


else if((two=="x" && five=="x" && eight=="x") || ((two=="o" && five=="o" && eight=="o")))
    {
        if((two=="x" && five=="x" && eight=="x") )
            {
                span.textContent = "winner is X"
            }
            else 
            {
                span.textContent = "winner is O"
            } 
    }

else if((three=="x" && six=="x" && nine=="x") || ((three=="o" && six=="o" && nine=="o")))
    {
        if((three=="x" && six=="x" && nine=="x"))
            {
                span.textContent = "winner is X"
            }
            else 
            {
                span.textContent = "winner is O"
            } 
     }

else if((one=="x" && five=="x" && nine=="x") || ((one=="o" && five=="o" && nine=="o")))
        {
            if((one=="x" && five=="x" && nine=="x"))
                {
                    span.textContent = "winner is X"
                }
                else 
                {
                    span.textContent = "winner is O"
                }   
         }


else if((three=="x" && five=="x" && seven=="x") || ((three=="o" && five=="o" && seven=="o")))
        {
            if((three=="x" && five=="x" && seven=="x"))
                {
                    span.textContent = "winner is X"
                }
                else 
                {
                    span.textContent = "winner is O"
                }  
        }
}

function click(num)
{
    if(counter==4)
        {
            console.log(counter);
            check()
        }
    switch(num)
    {
        case 1 : if(counter%2==0)
            {
               one.textContent = "o"
               one.style.background = "red"
               
            }
            else 
            {
                one.textContent = "x"
                one.style.background = "red"

            }
            counter++;
            break;

        case 2 :  if(counter%2==0)
            {
               two.textContent = "o"
               two.style.background = "black"
            }
            else 
            {
                two.textContent = "x"
                two.style.background = "black"
            }
            counter++;
            break;

        case 3 : if(counter%2==0)
            {
               three.textContent = "o"
               three.style.background = "teal"
            }
            else 
            {
                three.textContent = "x"
                three.style.background = "teal"
            }
            counter++;
            break;

        case 4 : if(counter%2==0)
            {
               four.textContent = "o"
               four.style.background = "brown"
            }
            else 
            {
                four.textContent = "x"
                four.style.background = "green"
            }
            counter++;
            break;

        case 5 : if(counter%2==0)
            {
               five.textContent = "o"
               five.style.background = "pink"
            }
            else 
            {
                five.textContent = "x"
                five.style.background = "pink"
            }
            
            counter++;
            break;

        case 6 : if(counter%2==0)
            {
               six.textContent = "o"
               six.style.background = "orange"
            }
            else 
            {
                six.textContent = "x"
                six.style.background = "orange"
                
            }
            
            counter++;
            break;
        
        case 7 : if(counter%2==0)
            {
               seven.textContent = "o"
               seven.style.background = "red"
            }
            else 
            {
                seven.textContent = "x"
                seven.style.background = "red"
            }
            
            counter++;
            break;
        
        case 8 : if(counter%2==0)
            {
               eight.textContent = "o"
               eight.style.background = "black"
            }
            else 
            {
                eight.textContent = "x"
                eight.style.background = "black"
            }
            
            counter++;
            break;
        
        case 9 : if(counter%2==0)
            {
               nine.textContent = "o"
               nine.style.background = "red"
            }
            else 
            {
                nine.textContent = "x"
                nine.style.background = "red"
            }
          
            counter++;
            break;
    }

    if(counter>=5)
        {
            patternCheck()
        }

    

   

}

one.addEventListener('click',()=>
{
    click(1)
})

two.addEventListener('click',()=>
    {
        click(2)
    })

three.addEventListener('click',()=>
{
    click(3)
})

four.addEventListener('click',()=>
{
    click(4)
})

five.addEventListener('click',()=>
 {
    click(5)
 })

 six.addEventListener('click',()=>
 {
       click(6)
 })

seven.addEventListener('click',()=>
{
    click(7)
})


eight.addEventListener('click',()=>
{
    click(8)
})


nine.addEventListener('click',()=>
{
    click(9)
})