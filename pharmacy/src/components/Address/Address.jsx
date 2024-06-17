import { useState } from "react";
//import AddressContext from "../Contexts/AddressContext";

function Address ({setStateHandler,setCityHandler,setDistrictHandler,
    setHouseNoHandler,setEmailHandler,setPhoneHandler}){
    
    const [addressData, setAddressData] = useState({
        state:'',
        city:'',
        district:'',
        woreda:'',
        houseNo:'',
        email:'',
        phone:''
        });

    return (<>
                <select onChange={setStateHandler} name="" id="" >
                    <option value="Amhara">Amhara</option>
                    <option value="Afar">Afar</option>
                    <option value="Somalia">Somalia</option>
                </select><br />
                <select onChange={setCityHandler} name="" id="" >
                    <option value="Addis Ababa">Addis Ababa</option>
                    <option value="Hawassa">Hawassa</option>
                    <option value="Mekele">Mekele</option>
                </select><br />
                <select onChange={setDistrictHandler} name="" id="" >
                    <option value="Bole">Bole</option>
                    <option value="Arada">Arada</option>
                    <option value="Lafto">Lafto</option>
                    <option value="Kirkos">Kirkos</option>
                </select><br />
                <select name="" id="" >
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select><br />
                <input onChange={setHouseNoHandler} type="text" name="" id="" value={addressData.houseNo} placeholder="House no" /><br />
                <input onChange={setEmailHandler} type="email" name="" id="" value={addressData.email} placeholder="email" /><br />
                <input onChange={setPhoneHandler} type="tel" name="" id="" value={addressData.phone} placeholder="phone" maxLength={13}/>
                
   </>);
}

export default Address;