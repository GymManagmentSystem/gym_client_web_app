import { create } from "zustand";

interface WorkoutCount{
    completed:number,
    totalWorkouts:number,
    setProgressCount:(completed:number,totalWorkouts:number)=>void
}

const useWorkoutCount = create<WorkoutCount>((set)=>({
    completed:0,
    totalWorkouts:0,
    setProgressCount:(completed,totalWorkouts)=>set({completed,totalWorkouts})
}))

export default useWorkoutCount;