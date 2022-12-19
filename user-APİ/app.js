
        getUsers();



        async function getUsers() {
            try {
                const UserResponse = await fetch('https://randomuser.me/api/?results=10')//random users from api

                if (UserResponse.ok)//status is  checking (200)... 
                {
                    const usersJson = await UserResponse.json()

                    const cardSection = document.getElementById('users')
                    usersJson.results.forEach(user => {
                        
                        cardSection.innerHTML +=
                            `
                            <div  class="card">
                                <img class="card-img-top my-2"   src="${user.picture.medium}" alt="image not found">
                                <div class="card-body">
                                <h5 class="card-title"> My name is ${user.name.title}. ${user.name.first} ${user.name.last}</h5>
                                <p class="card-text"> I am from ${user.location.country} / ${user.location.city}</p>
                                <p class="card-text"> My email :${user.email}</p>
                                <p class="card-text"><small class="text-muted"> phone number: ${user.phone}</small></p>
                                
                            </div>
                             `;
                    })

                } else {
                    throw new Error(":( Something went wrong")
                }


            } catch (err) {

                setTimeout(function () {
                    if (err.message == ":( Something went wrong") {
                        alert(err.message + ". Page is closing by us ...")
                        close()
                    }
                    else {
                        alert(err.message)
                    }


                }, 1500)
            }
        }
        
