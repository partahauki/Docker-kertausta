const Formi = (props) => {
    const submitti = async () => {
        return
        console.log("testi")
        const etete = JSON.stringify({"ohjelmasta":"terveisia"})
        console.log(etete)
        const url = "http://localhost:8080/insert"
        
        try{
            const res = await fetch(url, {
                method:'POST',
                mode:'no-cors',
                headers: {
                    'Content-Type': 'application/json' 
                },
                body: JSON.stringify({"ohjelmasta":"terveisia"})
            }, (a, b) => {
                console.log(a)
            })
 
        } catch (e) {
            console.log(e)
        }
        
    }

    return (
        <header className='form-control'>
            <input /><br></br>
            <button className='btn' onClick={submitti}>{props.buttonText}</button>
        </header>
    )
}

Formi.defaultProps = {
    buttonText : "Submit"
}

export default Formi
