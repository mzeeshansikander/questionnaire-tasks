import React, { useState, useEffect } from 'react';
   import { Button, TextField, List, ListItem, ListItemText } from '@/components/ui/';

   const CMS = () => {
     const [questions, setQuestions] = useState([]);
     const [newQuestion, setNewQuestion] = useState('');

     useEffect(() => {
       // Fetch questions from API
       fetchQuestions();
     }, []);

     const fetchQuestions = async () => {
       // API call to fetch questions
       const response = await fetch('/api/questions');
       const data = await response.json();
       setQuestions(data);
     };

     const addQuestion = async () => {
       // API call to add a new question
       await fetch('/api/questions', {
         method: 'POST',
         body: JSON.stringify({ question: newQuestion }),
         headers: { 'Content-Type': 'application/json' },
       });
       setNewQuestion('');
       fetchQuestions();
     };

     return (
       <div>
         <h2>Question Management</h2>
         <TextField
           value={newQuestion}
           onChange={(e) => setNewQuestion(e.target.value)}
           placeholder="Enter new question"
         />
         <Button onClick={addQuestion}>Add Question</Button>
         <List>
           {questions.map((q, index) => (
             <ListItem key={index}>
               <ListItemText primary={q.question} />
             </ListItem>
           ))}
         </List>
       </div>
     );
   };

   export default CMS;