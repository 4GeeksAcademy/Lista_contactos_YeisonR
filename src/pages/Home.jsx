import { useEffect, useState } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";

import ContactCard from "../components/Contact.Card.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()
  

  useEffect(()=>{
	getContacts()
  }, [])

  async function getContacts() {
	let result = await fetch("https://playground.4geeks.com/contact/agendas/yrendongar")
	let data = await result.json()
	dispatch({type: "set_contacts", payload: data.contacts})	
  }

    
	return (
		<div className="text-center mt-5">x
			<h1>Lista de Contactos!!</h1>
			<section>
				{
					store.contacts.map((e)=> {
						return(
							<ContactCard
								name={e.name}
								address={e.address}
								phone={e.phone}
								email={e.email}

							/>
						)
					})
				}
			</section>
		</div>
	);
}; 