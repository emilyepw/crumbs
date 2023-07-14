import React, {useState} from "react";

function AddItem() {
    const [formData, setFormData] = useState({name: "",brand: "",expiration: ""});
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(`Name: ${formData.name}, Brand: ${formData.brand}, Expiration: ${formData.expiration}`
      );
      setFormData([]);
  };
  
    return (
      <form onSubmit={handleSubmit} className="Add-items">
        <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>
        </div>
        
        <div>
            <label htmlFor="brand">Brand:</label>
            <input type="text" id="brand" name="brand" value={formData.brand} onChange={handleChange}/>
        </div>
  
        <div>
            <label htmlFor="expiration">Expiration:</label>
            <input type="text" id="expiration" name="expiration" value={formData.expiration} onChange={handleChange}/>
        </div>
  
        <button type="submit">Add</button>
      </form>
    );
  }

  export default AddItem;