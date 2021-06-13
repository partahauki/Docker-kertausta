const Formi = (props) => {
    const submitti = async () => {
        const string_ = document.querySelector("#input_").value
        const para = document.querySelector("#para")
        
        if(string_ === ""){
            para.textContent = "Insert string before submitting!"
            return
        } else {
            //sanitize inputti
        }

        const body_ = {
            string: string_,
        }

        const url = "http://localhost:8080/insert"
        
        try{
            const res = await fetch(url, {
                method:'POST',
                mode:'cors',
                headers: {
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify(body_)
            })

            console.log(res)
            if(res.status === 200){
                para.textContent = `string ${string_} submitted`
            }
            else{
                para.textContent = `status ${res.status} returned`
            }
 
        } catch (e) {
            console.log(e)
            console.log("--------")
        }
        
    }

    return (
        <header className='form-control'>
            <input id="input_" /><br></br>
            <button className='btn' onClick={submitti}>{props.buttonText}</button>
            <p id="para"></p>
        </header>
    )
}

Formi.defaultProps = {
    buttonText : "Submit"
}

export default Formi
