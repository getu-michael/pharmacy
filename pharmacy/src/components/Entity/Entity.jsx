import { useContext } from "react";
import EntityContext from "../Contexts/EntityContext";

function Entity(){
    const {entityData,setEntityData} = useContext(EntityContext);
    const firstName = entityData.firstName;
    const lastName = entityData.lastName;

    const fnameHandler = (event)=>{
        setEntityData({
            firstName:event.target.value,
            lastName:entityData.lastName,
            tin:entityData.tin,
            gender:entityData.gender,
            status:entityData.status
        });
    }

    const lastNameHandler = (event)=>{
        setEntityData({
            firstName:entityData.firstName,
            lastName:event.target.value,
            tin:entityData.tin,
            gender:entityData.gender,
            status:entityData.status
        });
    }
    return (<>
                <input onChange={fnameHandler} type="text" name="" id="" value={firstName} placeholder="First name" /><br />
                <input onChange={lastNameHandler} type="text" name="" id="" value={lastName} placeholder="Last name" /><br />
                <input type="text" name="" id="" placeholder="TIN"/><br />
                <label htmlFor="">Identified as:</label>
                <select name="" id="" defaultValue={'Male'}>
                    <option value="">Male</option>
                    <option value="">Female</option>
                    <option value="">Company</option>
                </select><br />
                <label htmlFor="">DOBirth/DORegistration</label><br />
                <input type="date" name="" id="" /><br />
                <select name="" id="">
                    <option value="">Active</option>
                    <option value="">Non Active</option>
                </select>
           </>);
}

export default Entity;