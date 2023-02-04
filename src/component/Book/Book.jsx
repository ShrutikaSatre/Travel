import React from "react";



const Book = () =>{
    return(
        <form>
            <label htmlFor="fname" className="input-label">
                First Name:
            </label>
            <input type="name" autoComplete="off" name="fname" id="name" placeholder="First Name" />
            
            <label htmlFor="lname" className="input-label">
                Last Name:
            </label>
            <input type="name" autoComplete="off" name="lname" id="name" placeholder="Last Name" />
            
            <label htmlFor="pno" className="input-label">
                Phone Number:
            </label>
            <input type="number" autoComplete="off" name="pno" id="number" placeholder="Phone Number" />
            
            <label htmlFor="email" className="input-label">
                Email Id:
            </label>
            <input type="email" autoComplete="off" name="email" id="email" placeholder="Email Id" />
            
            <label htmlFor="date" className="input-label">
                From Date:
            </label>
            <input type="date" autoComplete="off" name="date" id="date" placeholder="From Date" />
            

        </form> 
    )
}
export default Book ;