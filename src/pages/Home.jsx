import { useEffect, useState } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import ContactCard from "../components/Contact.Card.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()
  const [contacts, setContacts] = useState([])

  useEffect(()=>{
	getContacts()
  }, [])

  async function getContacts() {
	let result = await fetch("https://playground.4geeks.com/contact/agendas/yrendon/contacts")
	let data = await result.json()
	setContacts(data.contacts)	
  }

  console.log(contacts);
  
	return (
		<div className="text-center mt-5">
			<h1>Lista de Contactos!!</h1>
			<section>
				{
					contacts.map((e)=> {
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