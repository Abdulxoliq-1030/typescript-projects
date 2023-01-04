import { shuffleArray } from "./utils";


export type Question = {
	category: string
	correct_answers: string
	difficultly: string;
	incorrect_answers: string[];
	question: string;
	type: string;
}

export type QuestionState = Question & { answers: string[] };

export enum Difficultly {
	EASY = "easy",
	MEDIUM = "medium",
	HARD = "hard"
}

export const fetchQuizQuestions = async (amount:number,difficultly: Difficultly) => {
	const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficultly}&type=multiple`;
	const data = await (await fetch(endpoint)).json()
	return data.results.map((question: Question) => (
		{
			...question,
			answers: shuffleArray([...question.incorrect_answers,question.correct_answers])
		}
	))

}