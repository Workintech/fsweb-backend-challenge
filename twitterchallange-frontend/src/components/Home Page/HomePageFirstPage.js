//Outsource JS library
import React,{useEffect} from 'react'

//Internal JS
import useAxios, {REQ_TYPES} from '../../endpoints/UseAxios';

function HomePageFirstPage() {

const [getUsers, users, loading, error] = useAxios([]);


useEffect(() => {
  getUsers({ endpoint: "/api/users", reqType: REQ_TYPES.GET });
}, []);



  return (
    <div id='aaa'>

     {users.map((useritem,i)=>(useritem.name))}


    </div>
  )
}

export default HomePageFirstPage