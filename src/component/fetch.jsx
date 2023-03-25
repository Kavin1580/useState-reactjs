import { useState, useEffect } from "react";
import "../styles/fetch.css"
const DataFetch = () => {
    let [emp, setEmp] = useState([])
    let remove = (id) => {
        setEmp(emp.filter(data => data.id))
    }
    useEffect(() => {
        let fetchdata = async () => {
            let response = await fetch("https://api.github.com/users")
            let data = await response.json();
            setEmp(data)
        }
        fetchdata();
    }, [])

    return (<div className="datafetch">
        {emp.map((data) =>
        (
            <div className="body">
                    <div className="pic">
                        <img src={data.avatar_url} alt=""/>
                    </div>
                    <div>
                        <div className="profile">
                        <p>ID:{data.id}</p>
                        <h4>Name:{data.login}</h4>
                        <a href={data.gists_url}>github</a>
                    </div>
                    <div className="click">
                        <button onClick={() => { remove(data.id) }}> Delete </button>
                    </div>
                    </div>
                </div>
                )
        )}
            </div>);
}

        export default DataFetch;