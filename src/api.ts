export enum Difficultly {
	EASY = "easy",
	MEDIUM = "medium",
	HARD = "hard"
}

export const fetchQuizQuestions = async (amount:number,difficultly: Difficultly) => {
	const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficultly}&type=multiple`;
	const data = await (await fetch(endpoint)).json()
	console.log(data) 

}