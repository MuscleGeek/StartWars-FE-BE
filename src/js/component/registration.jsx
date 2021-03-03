import React, {useContext, useState} from 'react';

export const Registration = () => {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const dataSubmit = e => {
        e.PreventDefault();
        if(name === "" || gender == "" || password == "" || email == ""){       //Validation slots
            alert("Datos incompletos o invalidos");
        }
        console.table(name, gender, password, email);

        //POST data BE
        const data = {name:name, gender:gender, password:password, email:email};

        fetch("https://3000-tomato-wildebeest-x2kvinqb.ws-us03.gitpod.io/registration",{        //fetch BE @app.route '/registration'
            method: 'POST',
            headers: { "Content-type": "application/json"},
            body: JSON.stringify(data)                                                          //Metadata information to send
        })
            .then(response => Response.json())
            .then(data => {console.table("Success:", data);
        })
            .catch(error => {console.error("Error:", error);
        });

    }; 
};

