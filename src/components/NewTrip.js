import React from 'react';

const NewTrip = (props) => {

	handleOnChange = () =>{

	}



  return (
    <form>
    	<input 
    	type="text"
    	name="name"
    	onChange={handleOnChange}
    	value={"name"}
    	/>
    	<input 
    	type="text"
    	name="startDate"
    	onChange={handleOnChange}
    	value={"sd"}
    	/>
    	<input 
    	type="text"
    	name="endDate"
    	onChange={handleOnChange}
    	value={"ed"}
    	/>


    </form>
  );
};

export default NewTrip;