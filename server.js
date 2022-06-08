const express = require ('express')
const app = express()
const PORT = 8000


const workouts = {
        'biceps':{
            'reps': 4,
            'exercise': 'bicep curls',
            
    },
        'legs':{
            'reps': 4,
            'exercise': 'squats',
    },
        'unknown':{
            'reps': 0,
            'exercise': 'unknown',

        }



}


app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')

})

app.get('/api/:workoutName', (request, response)=>{
    const workoutNames = request.params.workoutName.toLowerCase()
    if(workouts [workoutNames]){
        response.json(workouts[workoutNames])
    }else{
        response.json(workouts['unknown'])
    }   
    
})

app.listen(process.env.PORT || PORT,()=>{
    console.log(`The server is running on port ${PORT}! You better go catch it!`)
} )