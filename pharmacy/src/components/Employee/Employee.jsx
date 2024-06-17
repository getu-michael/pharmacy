import { useState } from 'react';
// import Entity from '../Entity/Entity'
// import Address from '../Address/Address';
// import EntityContext from '../Contexts/EntityContext';
//import AddressContext from '../Contexts/AddressContext';


function Employee(){
    const [entityData,setEntityData] = useState({
        firstName:'Michael',
        lastName:'Workneh',
        tin:'',
        gender:'male',
        status:'1'
    });
   const [addressData, setAddressData] = useState({
        state:'',
        city:'',
        district:'',
        woreda:'',
        houseNo:'',
        email:'',
        phone:''
    });

    const allFunctions = { 
        setStateHandler : (event)=>{
            setAddressData({
                state: event.target.value,
                city: addressData.city,
                district: addressData.district,
                woreda: addressData.woreda,
                houseNo: addressData.houseNo,
                email: addressData.email,
                phone: addressData.phone
            });
            },
        setCityHandler : (event)=>{
            setAddressData({
                state: addressData.state,
                city: event.target.value,
                district: addressData.district,
                woreda: addressData.woreda,
                houseNo: addressData.houseNo,
                email: addressData.email,
                phone: addressData.phone
            });  
            },    
        setDistrictHandler : (event)=>{
              setAddressData({
                state: addressData.state,
                city: addressData.city,
                district: event.target.value,
                woreda: addressData.woreda,
                houseNo: addressData.houseNo,
                email: addressData.email,
                phone: addressData.phone
            });        
            },
        setHouseNoHandler : (event)=>{
            setAddressData({
              state: addressData.state,
              city: addressData.city,
              district: addressData.district,
              woreda: addressData.woreda,
              houseNo: event.target.value,
              email: addressData.email,
              phone: addressData.phone
          });        
            },
        setEmailHandler : (event)=>{
            setAddressData({
              state: addressData.state,
              city: addressData.city,
              district: addressData.district,
              woreda: addressData.woreda,
              houseNo: addressData.houseNo,
              email: event.target.value,
              phone: addressData.phone
          });        
            },
        setPhoneHandler : (event)=>{
            setAddressData({
              state: addressData.state,
              city: addressData.city,
              district: addressData.district,
              woreda: addressData.woreda,
              houseNo: addressData.houseNo,
              email: addressData.email,
              phone: event.target.value
          });        
            }
    }
const showData = (event)=>{
    console.log(addressData)
}
    
    return (<>
                {/* <EntityContext.Provider value={{entityData,setEntityData}}>
                    <Entity /><br />
                </EntityContext.Provider> 
                
                <Address props={{addressData,allFunctions}} /><br />*/}        
                <input type="password" name="" id="" placeholder='Password' /><br />
                <input type="text" name="" id="" placeholder='Salary'/><br />
                <label htmlFor="">Roll</label>
                <select name="" id="">
                    <option value="">1</option>
                </select>
                <button onClick={showData} type="button">click me</button>
            </>);
}

export default Employee;