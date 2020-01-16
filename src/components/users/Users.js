import React, { Component } from 'react'
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';

// class Users extends Component {
//     state = {
//         users: [
//             {
//                 id: '1',
//                 login: 'mojombo',
//                 avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
//                 html_url: 'https://github.com/mojombo'
//             },
//             {
//                 id: '2',
//                 login: 'defunkt',
//                 avatar_url: 'https://avatars0.githubusercontent.com/u/2?v=4',
//                 html_url: 'https://github.com/defunkt'
//             },
//             {
//                 id: '3',
//                 login: 'pjhyett',
//                 avatar_url: 'https://avatars0.githubusercontent.com/u/3?v=4',
//                 html_url: 'https://github.com/pjhyett'
//             }
//         ]

//     };



//     render() {

//         const cardStyle={
//             padding: '20px',
//             justifyContent: 'space-between'
//         }

//         return (
//             <div className="row" style={cardStyle}>
//                 {
//                     this.state.users.map(user=> (
//                         <UserItem key={user.id} user={user} />
//                     ))
//                 }
                
//             </div>
//         )
//     }
// }

const Users = props => {
    
    const cardStyle={
        padding: '20px',
        justifyContent: 'space-between'
    }
    
    if(props.loading){
         return <Spinner/>    
    }else{

        return(
            
           <div className="row" style={cardStyle}>
           {
               props.users.map( user=> {
                   return <UserItem user={user} key={user.id} />
               })
           }
           
       </div>
        ) 
    }

}

export default Users
