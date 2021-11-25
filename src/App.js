import './App.css';
import MenuAppBar from './components/appbar';
import { grid } from '@mui/system';
import { useState } from 'react';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useSelector} from "react-redux"
function App() {
  
  const state = useSelector((e) => e);
  console.log(state)
  
      const [que,setque] = useState(state)
  const [st, setst] = useState(true);
  const [marks, setMarks] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [questionInd, setQuestionInd] = useState(0);
  const nextQuestion = ()=>{
    if(que.length - 1 === questionInd){
        setShowResult(true);
    }else{
      setQuestionInd(questionInd + 1);
    }
  };
  const checkAnswer = (cor, user) => {
    if (cor === user){
      setMarks(marks + 1);
    }
    nextQuestion();
  };
  if (questionInd === (que.length - 1)) {
   return <Typography className='result'>{marks}</Typography>
  } 
  
  return (
    <div className="App">
      
      <MenuAppBar/>
 
        
      
  
        <Grid spacing={0} container>
          <Grid md={12}>
            <Typography className="py-5" variant='h5'>
              {que[questionInd].question}
            </Typography>
          </Grid>
          <Grid md={12}>
            {que[questionInd].options.map((e, i) =>(
              <Grid key={i} className="p-3"  md={6}>
              <Button onClick={()=>checkAnswer(que[questionInd].correct, e)} variant="contained" fullWidth={true}>{e}</Button>
            </Grid>
            ))}
            <Grid  className="p-3" md={6}>
              <Button onClick={() => setQuestionInd(questionInd + 1)} variant="outlined" fullWidth={true}>Next</Button>
            </Grid>
          </Grid>
        </Grid>
     
      </div>
  );
   
  
}

export default App;
