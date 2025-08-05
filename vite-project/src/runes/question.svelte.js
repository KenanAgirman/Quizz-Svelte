import {onMount} from "svelte";

export function showQuestion(){
    let arrayQuestions = $state([]);
    let currentIndex = $state(0);
    let isOk = $state(false);
    let arrayAnswers  = $state([]);
    let finished  = $state(false);

    onMount(()=>{
        fetch('/questions.json').then((response)=>response.json())
            .then((data)=>(arrayQuestions = data,arrayAnswers  = data))
            .finally(()=>(isOk= true))
    });

    const incrementQuestion = () =>{

        if (currentIndex < arrayQuestions.length - 1) {
            currentIndex = currentIndex + 1;
        } else {
            finished = true;
        }
        arrayQuestions[currentIndex];
    }

    return{
        get arrayQuestions(){
            return arrayQuestions;
        },

        get isOk(){
            return isOk;
        },

        get currentIndex(){
            return currentIndex;
        },
        get arrayAnswers(){
            return arrayAnswers;
        },

        get finished(){
            return finished;
        },

        incrementQuestion

    }
}