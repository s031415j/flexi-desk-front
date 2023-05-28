// import React, { useState, useEffect } from "react";

// function DeskList() {
//   const [desks, setDesks] = useState([]);


//   useEffect(() => {
//         Desk.getDeskByLocationTowerFloorAndBank().then((response) => {
//           const deskArray = response.data.map((desk) => desk.desk_id);
//           setDesks(deskArray);
//         }); 
//       }, []);

//   return (
//     <div>
//       <h1>User List</h1>
//       <ul>
//         {desks.map((desk) => (
//           <li key={desk.id}>
//             {user.firstname} {user.surname}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default DeskList;