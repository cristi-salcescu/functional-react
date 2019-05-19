import React, { useState } from "react";
import "./ShippingForm.css";

export default function ShippingForm({onSave}) {
    const [delivery, setDelivery] = useState({
        name: "",
        address: ""
    });

    const [enabled, setEnabled] = useState(true);

    function save(){
        if(enabled){
            onSave(delivery);
        }
        
        setEnabled(!enabled);
    }

    function updateDelivery({target: {name, value}}){
        const newDelivery = {...delivery};
        newDelivery[name] = value;  
        setDelivery(newDelivery); 
    }

    return (
    <form className="shipping-address" onSubmit={save}>
        <div>
            <input
            name="name"
            value={delivery.name}
            onChange={updateDelivery}
            placeholder="Name"
            disabled = {!enabled ? "disabled" : ""}
            type="text" />
        </div>
        <div>
            <textarea
            name="address"
            value={delivery.address}
            onChange={updateDelivery} 
            placeholder="Address" 
            className="shipping-address"
            disabled = {!enabled ? "disabled" : ""}>             
            </textarea>
        </div>
        <div>
            <button type="button" className="button" onClick={save}>
                { enabled ? "Save" : "Edit"}
            </button>
        </div>
    </form>
    );
}