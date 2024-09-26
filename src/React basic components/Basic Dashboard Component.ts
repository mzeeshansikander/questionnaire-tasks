import React, { useState, useEffect } from 'react';
   import { Table, TableBody, TableCell, TableHead, TableRow } from '@/components/ui/';

   const Dashboard = () => {
     const [responses, setResponses] = useState([]);

     useEffect(() => {
       // Fetch responses from API
       fetchResponses();
     }, []);

     const fetchResponses = async () => {
       // API call to fetch responses
       const response = await fetch('/api/responses');
       const data = await response.json();
       setResponses(data);
     };

     return (
       <div>
         <h2>User Responses</h2>
         <Table>
           <TableHead>
             <TableRow>
               <TableCell>User ID</TableCell>
               <TableCell>Question</TableCell>
               <TableCell>Answer</TableCell>
             </TableRow>
           </TableHead>
           <TableBody>
             {responses.map((r, index) => (
               <TableRow key={index}>
                 <TableCell>{r.userId}</TableCell>
                 <TableCell>{r.question}</TableCell>
                 <TableCell>{r.answer}</TableCell>
               </TableRow>
             ))}
           </TableBody>
         </Table>
       </div>
     );
   };

   export default Dashboard;