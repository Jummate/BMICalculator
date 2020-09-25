let bmi = document.querySelector(".calc-btn");
let comment = document.getElementById("comment");
let valWeight = document.getElementById("validate-weight");
let valHeight = document.getElementById("validate-height");
bmi.addEventListener("click",function (){
	//bmi.classList.add("btn-click");
    let weight = document.getElementById("weight-input");
    let height = document.getElementById("height-input");
    let remark = document.getElementById("remark");
    let bmival = document.getElementById("bmival");
    let result = 0;
	if(weight.value && height.value){
		valHeight.innerHTML = "";
		valWeight.innerHTML = "";
		
		comment.style.display = "block";        //Display comment when the user eventually makes a valid input
		result = (weight.value/Math.pow(height.value, 2)).toFixed(2);
		
		bmival.innerHTML = result;
		bmival.style.fontWeight="bolder";
		bmival.style.fontSize="2.7rem";
		
		//Categorize the computation result
		if(result < 18.5)
		{
			remark.style.color = "blue";
			remark.innerHTML ="You are UNDERWEIGHT!";
		}
		else if(result >= 18.5 && result <= 24.9)
		{
			remark.style.color = "green";
			remark.innerHTML ='<b>'+"You have a HEALTHY WEIGHT!"+'</b>';
		}
		else if(result >= 25 && result <= 29.9)
		{
			remark.style.color = "purple";
			remark.innerHTML ="You are OVERWEIGHT!";
		}
		else
		{
			remark.style.color = "red";
			remark.innerHTML ="You are OBESE!";
		}
	}
	else if(!weight.value && !height.value){
		valHeight.innerHTML = "***Please enter a value for the height***";
		valWeight.innerHTML = "***Please enter a value for the weight***";
	}
	else if(!height.value && weight.value){
		valHeight.innerHTML = "***Please enter a value for the height***";
		valWeight.innerHTML = "";
	}
	else {
		valWeight.innerHTML = "***Please enter a value for the weight***";
		valHeight.innerHTML = "";
	}
}
);

//Clear out the converter input when the user deletes all its content
const userInput = document.getElementsByClassName("user-input");	
for(let each of userInput)
{
	each.addEventListener("input", function(){
	comment.style.display = "none";
	valHeight.innerHTML = "";
	valWeight.innerHTML = "";
	//bmi.classList.remove("btn-click");
});
}

const lb = document.getElementById("lb");
const lbkg = document.getElementById("lbkg");

const pound = document.getElementById("pound");
const poundkg = document.getElementById("poundkg");

const inch = document.getElementById("inch");
const inchm = document.getElementById("inchm");

const ft = document.getElementById("ft");
const ftm = document.getElementById("ftm");

const cm = document.getElementById("cm");
const cmm = document.getElementById("cmm");

const cal = document.getElementById("calories");
const calkg = document.getElementById("calkg");

lb.addEventListener("input",function(){
	if(lb.value == 0)
	{
		lbkg.value = "";
	}
	else{
		lbkg.value = (lb.value * 0.323).toFixed(2);
	}
});
pound.addEventListener("input",function(){
	if(pound.value == 0)
	{
		poundkg.value = "";
	}
	else{
		poundkg.value = (pound.value / 2.205).toFixed(2);
	}
});
cal.addEventListener("input",function(){
	if(cal.value == 0)
	{
		calkg.value = "";
	}
	else{
		calkg.value = (cal.value / 7700).toFixed(2) ;
	}
});

inch.addEventListener("input",function(){
	if(inch.value == 0)
	{
		inchm.value = "";
	}
	else{
		inchm.value = (inch.value * 0.0254).toFixed(2);
	}	
});
ft.addEventListener("input",function(){
	if(ft.value == 0)
	{
		ftm.value = "";
	}
	else{
		ftm.value = (ft.value / 3.28).toFixed(2);
	}	
});
cm.addEventListener("input",function(){
	if(cm.value == 0)
	{
		cmm.value = "";
	}
	else{
		cmm.value = (cm.value / 100).toFixed(2);
	}	
});
