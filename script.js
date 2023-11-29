

function searchBtn(){
   var cntryName = document.getElementById("cname").value
   console.log(cntryName);

        if(cntryName==""){
            alert("Please enter the field !")
        }else{
            fetch(`https://restcountries.com/v3.1/name/${cntryName}?fullText=true`) 
            .then(data=>data.json())
            .then(countryDet=> displayBtn(countryDet))
            }
        }

            function displayBtn(countryDet){
                capital=countryDet[0].capital
                flags=countryDet[0].flags.svg
                names=countryDet[0].name.common
                content=countryDet[0].flags.alt
                region=countryDet[0].region
                coatOfArms=countryDet[0].coatOfArms.svg

                    htmlData=`<div class="card-group">
                    <div class="card">
                      <img src=${flags} class="card-img-top" alt="...">
                      <div class="card-body">
                        <h5 class="card-title">${names}</h5>
                        <p class="card-text">${content}</p>
                      </div>
                    </div>
                    <div class="card">
                      <img src=${coatOfArms} class="card-img-top" alt="...">
                    </div>`
                    result.innerHTML = htmlData
                }
            
