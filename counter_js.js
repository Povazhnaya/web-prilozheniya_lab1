
        let counter = 0;
        
        function getValue()
        {
            let counter = document.getElementById("counter").value;
            console.log(counter);            
        }

        function decrease()
        {
            if(counter === undefined)
            {
                counter = 0;
            }
            console.log("decrease");
            counter--;
            updateNumber();
            console.log(`${counter}`);
        }  

        function increase()
        {
            if(counter === undefined)
            {
                counter = 0;
            }
            console.log("increase");
            counter++;
            updateNumber();
            console.log(`${counter}`);
        }

        function updateNumber()
        {
            document.querySelector('span').innerHTML = counter;
        }
