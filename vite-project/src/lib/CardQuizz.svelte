<script>
    import {showQuestion} from "../runes/question.svelte.js";
    import ProgressBar from "./ProgressBar.svelte";

    const questions = showQuestion();
    let selectedAnswer  = null;
    let score = $state(0);
    let messageError  =null;


    const selectedAnswers = (answer)=>{
        if(!questions.finished)
        {
            selectedAnswer = answer;
            if(answer === questions.arrayQuestions[questions.currentIndex].correct){
                score++;
                messageError = '';
                questions.incrementQuestion();
            }else{
                messageError = "La réponse n'est pas correct";
                questions.incrementQuestion();

                console.log(messageError);

            }
        }else return;

    }


</script>

<h3>Votre Score {score}</h3>
<ProgressBar currentIndex="{questions.currentIndex}"/>
{#if questions.isOk}

        <p>{questions.arrayQuestions[questions.currentIndex].question}</p>
        {#each questions.arrayQuestions[questions.currentIndex].answers as answer}
            <li style="accent-color: #535bf2">
                <br>

                <button onclick={()=> selectedAnswers(answer)}
                >
                    {answer}
                </button>

            </li>
        {/each}
{/if}

<h1>{messageError}</h1>
<br>

{#if questions.finished}
    <h2>Fin du quizz votre score est de {score}</h2>

{/if}

<style>
    li {
        list-style-type: none;
    }
</style>
