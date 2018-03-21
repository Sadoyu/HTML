var un,p2,sun,phone,cell,db,e,n,p,cp=false;
var d1,d2,d3,d4,d5,d6;

window.onload=function(){
	var myimage=document.getElementById("slideim");
	var imarr=["img/r10.jpg","img/r9.png","img/r8.jpg","img/r2.jpg","img/r3.jpg","img/r4.png","img/r5.jpg","img/r6.jpg","img/r7.jpg","img/r1.jpeg"];
	var i=0;
	setInterval(function(){myimage.setAttribute("src",imarr[i]);i++;if(i>=imarr.length){i=0;}},1500);
	showHob();
	document.getElementById("login").style.display="none";
	document.getElementById("signup").style.display="none";
	document.getElementById("details").style.display="none";
	check(); 
	vaLog();
};

function details(){	
	document.getElementById("details").style.display="block";
	document.getElementById("signup").style.display="none";
	document.getElementById("d1").innerHTML=d1;
	document.getElementById("d2").innerHTML=d2;
	document.getElementById("d3").innerHTML=d3;
	document.getElementById("d4").innerHTML=d4;
	document.getElementById("d5").innerHTML=d5;
	document.getElementById("d6").innerHTML=d6;
}
 
function showLogin(){
	document.getElementById("login").style.display="block";
	document.getElementById("signup").style.display="none";
}

function showSign(){
	document.getElementById("signup").style.display="block";
	document.getElementById("login").style.display="none";
}

function showHob(){
	document.getElementById("hobbies").onclick=function(){
			if(document.getElementById("hobbies").checked){
				document.getElementById("hlist").style.display="block";
			}
			else{
				document.getElementById("hlist").style.display="none";
			}
	};
	document.getElementById("hlist").style.display="none";
}

function vaUn(){
    var pat = /^[a-zA-Z_0-9]{6,40}$/;
    var name= document.getElementById('Un');
	if (pat.test(name.value)){	
		document.getElementById("err").innerHTML="CORRECT";
		un=true;
        return true;
    }
    else {	
       document.getElementById("err").innerHTML="INVALID USERNAME";
       un=false;
	   return false;
    }
}

function vaLpass(){
    var pat = /^(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    var pass= document.getElementById('Lpass');

    if (pat.test(pass.value)){
    	document.getElementById("err").innerHTML="CORRECT";
		p2=true;
        return true;        
    }
    else{
		document.getElementById("err").innerHTML="INVALID PASSWORD";
       p2=false;
       return false;
    }
}

function vaLog(){
	document.getElementById("log").onsubmit=function(){
		if( un==true && p2==true){
            alert("Login Successful");
			return true;
        }
		else{ 
			alert("PLEASE ENTER ALL DETAILS");
			return false;
		}
	};
}

function vaSnam(){
    var pattern = /^[a-zA-Z.]{6,30}$/;
    var name= document.getElementById('Snam');
    if (pattern.test(name.value)){
    	d1=name.value;
		document.getElementById("serr").innerHTML="CORRECT";
		n=true;
        return true;
    }
    else{
		document.getElementById("serr").innerHTML="INVALID NAME";
		n=false;
       	return false;
    }
}

function vaSUnam(){
    var pat = /^[a-zA-Z_0-9]{6,40}$/;
    var Sun= document.getElementById('Sun');
    if (pat.test(Sun.value)){	
		d2=Sun.value;
		document.getElementById("serr").innerHTML="CORRECT";
		sun=true;
        return true;
    }
    else{
     document.getElementById("serr").innerHTML="INVALID USERNAME";
       sun=false;
       return false;
    }
}

function vaSpas(){
    var pat = /^(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    var pass= document.getElementById('Spas');
    if (pat.test(pass.value)){
			document.getElementById("serr").innerHTML="CORRECT";
			p=true;
        return true;        
    }
    else{
     document.getElementById("serr").innerHTML="INVALID PASSWORD";
       p=false;
       return false;
    }
}

function vaScpas(){
    var Spas= document.getElementById('Spas');
    var Scpas= document.getElementById('Scpas');
    if(Spas.value==Scpas.value){
    	document.getElementById("serr").innerHTML="MATCH";
		cp=true;
        return true;
    }
    else{
		document.getElementById("serr").innerHTML="NOT MATCH";
        cp=false;
        return false;
    }
}

function vaSema(){
    var ema = document.getElementById('Sema');
    var pat = /^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z]{2,6}$/;

    if (pat.test(ema.value)){
    	d3=ema.value;
		document.getElementById("serr").innerHTML="CORRECT";
     	e=true;
        return true;
    }
    else{
    	document.getElementById("serr").innerHTML="INVALID EMAIL";
		e=false;
        return false;
    }
}
	
function vaSph(){
	var pat=/^[0-9]{3}-[0-9]{8}$/;
	var ph=document.getElementById("Sph");
	if(pat.test(ph.value)){
		d4=ph.value;
		document.getElementById("serr").innerHTML="CORRECT";
     	phone=true;	
	}
	else{
		document.getElementById("serr").innerHTML="INVLAID PHONE";
     	phone=false;
	}
}	
	
	
function vaScel(){
	var pat=/^\+[0-9]{2}-[0-9]{10}$/;
	var cel=document.getElementById("Scel");
	if(pat.test(cel.value)){
		d5=cel.value;
		document.getElementById("serr").innerHTML="CORRECT";
		cell=true;
	}
	else{
		document.getElementById("serr").innerHTML="INVALID CELL NO";
		cell=false;
	}
}

function vadob(){
    var pat=/^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/;
	var dob=document.getElementById("dob");
	if(pat.test(dob.value)){
		d6=dob.value;
		document.getElementById("serr").innerHTML="CORRECT";
		db=true;
	}
	else{
		document.getElementById("serr").innerHTML="INVALID DOB";
    	db=false;
	}
}
		
function check(){ 
	document.getElementById("signup").onsubmit=function(){	
		if(e==true&&n==true&&p==true&&cp==true&&phone==true&&cell==true&&db==true){	
 			details();
			return false;
        }
		else{ 
			alert("PLEASE ENTER ALL DETAILS");
			return false;
		}
	};
}
