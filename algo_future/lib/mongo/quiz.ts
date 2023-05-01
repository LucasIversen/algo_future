import clientPromise from ".";

let client;
let db: any;
let quizzes: any;

async function init() {
  if (db) return;
  try {
    client = await clientPromise;
    db = client.db("AlgoFuture");
    quizzes = db.collection("quizzes");
  } catch (error) {
    console.error("ERROR", error);
  }
}

(async () => {
  await init();
})();

export async function getQuizzes() {
  try {
    if (!quizzes) await init();
    const result = await quizzes
      .find({})
      .map((quiz: any) => ({ ...quiz, _id: quiz._id.toString() }))
      .toArray();

    return { quizzes: result };
  } catch (error) {
    return { error: "ERROR" };
  }
}
