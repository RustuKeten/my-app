// import React from 'react'
// import { Route, Routes } from 'react-router-dom';

// const PrivateRouter = () => {
//   return (
//     //*burası sadece outletin yeri
//     <>
//       <Routes>
//         <Route path="/about" element={<About />} />
//         <Route path="/details" element={<Details />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/newblog" element={<NewBlog />} />
//       </Routes>
//     </>
//   );
// }

// export default PrivateRouter

// import { useContext } from 'react';
// import { Outlet, Navigate } from 'react-router-dom';
// import { AuthContext } from '../contexts/AuthContext';

// const PrivateRouter = () => {
//     const {currentUser} = useContext(AuthContext);
//   // console.log(currentUser);

//   return currentUser ? <Outlet /> : <Navigate to="/" />;
// };

// export default PrivateRouter;
