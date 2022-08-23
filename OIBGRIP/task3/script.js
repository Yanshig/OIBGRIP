const calculateTemp =() => {
    const numbertemp =document.getElementById('temp').value;
    //console.log(numberTemp);
    const tempSelected = document.getElementById('temp_diff');
     const valuetemp=temp_diff.options[tempSelected.selectedIndex].value;
     const celtofah = (cel)=>{
        let f=Math.round( (cel * 9/5 )+32);
        return f;
     }
     const fahtocel = (feh)=>{
        let c=Math.round( (feh - 32)*5/9);
        return c;}
     let result;
     if(valuetemp == 'cel'){
        result =celtofah(numbertemp);
        document.getElementById('resultcontainer').innerHTML=`=${result}℉ahrenheit`;
     }
     else {
            result =fahtocel(numbertemp);
            document.getElementById('resultcontainer').innerHTML=`=${result}℃elcius`;
        }
     

    }
    