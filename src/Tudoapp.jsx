import React, { useState } from 'react'

export default function Tudoapp() {
	var [task, settask] = useState("")
	var [list, setlist] = useState([{
		id: "",
		value: ""
	}])
	console.log(task);
	function postData() {
		var inputUser = {
			id: Math.random(),
			value: task
		}
		if (task !== "") {
			setlist(list.concat(inputUser))
			settask("")
			console.log(inputUser);
		}

	}
	function Delete(id){
		 var updateList = list.filter((item) => item.id !== id); 
		 setlist(updateList)
		 alert(id)
	}
	return (
		<>
			<div className='container-fluid mt-2'>
				<h1 className='text-light text-center bg-dark p-2 mb-2 mt-2'>TUDO APP</h1>
				<div className="input-group mb-3 w-100">
					<input type="text" className="form-control" placeholder="Add New Task" onChange={(e) => settask(e.target.value)} />
					<button className="btn btn-outline-secondary" type="button" onClick={() => postData()}>Button</button>
				</div>
				<ul className="list-group">
					{list.map((item, index) => {
						return(
							<li key={index} className="list-group-item">{item.value}<span>{item.value===""?"":<button onClick={()=>Delete(item.id)} className='btn bg-dark text-light ms-3'>delete</button>}</span></li>
						)
					})
					}
				</ul>
			</div>
		</>
	)
}
