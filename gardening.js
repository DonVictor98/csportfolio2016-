// JavaScript File
var lawnmowerinfo = document.getElementById("lawnmowerinfo");
var lawnmower = document.getElementById("lawnmower");

lawnmower.addEventListener("click", function() {
    if (lawnmowerinfo.innerHTML ==="") {
        lawnmowerinfo.innerHTML = '<p>Today you will learn how to mow a lawn. Under stand that mowing the lawn is a simple process. And does not require much skill. Lets begin. </p> <ol> <li> Have the proctective gear, this includes long pants,closed toed shoes long sleeve shirt, and safety glasses </li> <li> check the level of oil and gas in the lawn mower. </li> <li> Pick an any obstructions from your yard this can include, sticks, branches, balls, rocks, and toys</li> <li> Start the mower according to the manufacturers instruction. Most lawn mowers you push the primer and pull on the chord.</li> <li>With lawn mower running begin mowing the lawn. Tip cut like two inches in between where you already cut so you dont miss a spot.</li> <li>Cut in opposite ways you can go up one direction go in zig zag in another direction the choice is yours as long as your grass is cut.</li> <li>If the lawn mower has a bag that collects the grass check it pedrically if its full empty it out. Grass clippings are great fertalizer if you use them in your compost pile.</li> <li>When the desired grass is cut you can turn of your lawn mower and store it away.</li> </ol>  ' 
    }
    else {
        lawnmowerinfo.innerHTML= ""
    }
    
})

var storageInfo = document.getElementById("storageInfo");
var storage = document.getElementById("storage");

storage.addEventListener("click", function() {
    if (storageInfo.innerHTML ==="") {
        storageInfo.innerHTML = "<p> Maintaning your lawn mower is crucial to a healthy lawn and for your next mowing season. With these steps you'll understand the basics of maintaining your lawn mower for the next season. <li>You will need a brush and a putty knife an oil container, fresh oil fuel stablizer and a tarp.</li> <li> To began brush of any grass clippings that may be on the mower</li> <li> Next let the mower run for about a minute the oil will draing better when its warm. Shut of the mower and disconnect the spark plug. Now the mower cant accidently start. The oil keeps the mower lubricated and working properly it should be changed every season  to remove the oil you should have an oil drain pan to drain the old oil and some new oil tip the mower with dip stick side facing the oil pan so you can drain the oil. Now put some fresh oil in the engine acording to the amount the manufacture instructions. Next dispose the Used oil properly</li> <li> Next put some fuel stablizer in the gas tank along with fresh gas this will ensure in the stored season that the mower gas will not decompose.</li> <li> Next connect the spark plug and let the mower run after that turn off the lawn mower and disconnect the spark plug your mower is ready to be stored till the next mowing season.</li></p>"
    }
    else {
        storageInfo.innerHTML= ""
    }
    
})





