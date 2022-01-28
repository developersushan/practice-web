document.querySelector('button').addEventListener('click',function(){
    let name =document.getElementById('name').value;
    let year = document.getElementById('year').value;
    
    let age = 2022 - year;
    
    let age_status ='';

    if(age >=0 && age<6){
        age_status='baccha';
    }else if(age >=6 && age<18){
        age_status='shiso';
    }else if(age >=18 && age<28){
        age_status='kishor';
    }else if(age >=28 && age <40){
        age_status='jobok';
    }else if(age>=40 && age <60){
        age_status='moddo boyosi';
    }else if(age >=60 && age<80){
        age_status='bora';
    }else if(age >=80 && age<100){
        age_status='apni beshi  din bachben na';
    }else{
        age_status='apni  manus  na jin  ';
    }

        document.querySelector('.head').innerHTML ='<span style="color:green;font-size:50px;text-transform:upperCase;">hi '+name+'you are '+age+' years old '+age_status;
    
});
