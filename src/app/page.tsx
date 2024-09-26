"use client";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../../i18n";
import scoringData from "../JSON files/Updated MVP Scoring System.json";

export default function Home() {
  const { t, i18n } = useTranslation();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<any>({});
  const [pairAnswers, setPairAnswers] = useState<any>({});
  const [showResults, setShowResults] = useState(false);
  const [career, setCareer] = useState("");

  const [userResult, setUserResult] = useState({
    data_analyst: 0,
    software_developer: 0,
    project_manager: 0,
    ux_ui_designer: 0,
  });

  const questions: any = t("questions", { returnObjects: true });

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleRadioChange = (
    questionIndex: number,
    selectedOption: string,
    pairId?: string,
    questionId?: string
  ) => {
    if (pairId) {
      setPairAnswers((prevPairAnswers: any) => {
        const previousOption = prevPairAnswers[pairId];
        const pairScoring: any =
          scoringData.scoring.comparison_pairs[
            pairId as keyof typeof scoringData.scoring.comparison_pairs
          ];
        const selectedScores = pairScoring[selectedOption === "a" ? "a" : "b"];
        const previousScores = previousOption
          ? pairScoring[previousOption === "a" ? "a" : "b"]
          : null;

        setUserResult((prevUserResult) => {
          const updatedResult = { ...prevUserResult };
          if (previousScores) {
            updatedResult.data_analyst -= previousScores.data_analyst;
            updatedResult.project_manager -= previousScores.project_manager;
            updatedResult.software_developer -=
              previousScores.software_developer;
            updatedResult.ux_ui_designer -= previousScores.ux_ui_designer;
          }
          if (selectedScores) {
            updatedResult.data_analyst += selectedScores.data_analyst;
            updatedResult.project_manager += selectedScores.project_manager;
            updatedResult.software_developer +=
              selectedScores.software_developer;
            updatedResult.ux_ui_designer += selectedScores.ux_ui_designer;
          }
          return updatedResult;
        });
        return {
          ...prevPairAnswers,
          [pairId]: selectedOption,
        };
      });
    } else {
      if (questionId) {
        const currentCategory = (scoringData as any)?.scoring[questionId];
        if (currentCategory) {
          const currentScore = currentCategory[selectedOption];
          const previousOption = answers[questionIndex];
          if (previousOption) {
            const previousScore = currentCategory[previousOption];
            if (previousScore) {
              setUserResult((prevUserResult) => ({
                data_analyst:
                  prevUserResult.data_analyst - previousScore.data_analyst,
                project_manager:
                  prevUserResult.project_manager -
                  previousScore.project_manager,
                software_developer:
                  prevUserResult.software_developer -
                  previousScore.software_developer,
                ux_ui_designer:
                  prevUserResult.ux_ui_designer - previousScore.ux_ui_designer,
              }));
            }
          }
          if (currentScore) {
            setUserResult((prevUserResult) => ({
              data_analyst:
                prevUserResult.data_analyst + currentScore.data_analyst,
              project_manager:
                prevUserResult.project_manager + currentScore.project_manager,
              software_developer:
                prevUserResult.software_developer +
                currentScore.software_developer,
              ux_ui_designer:
                prevUserResult.ux_ui_designer + currentScore.ux_ui_designer,
            }));
          }
        }
        setAnswers((prevAnswers: any) => ({
          ...prevAnswers,
          [questionIndex]: selectedOption,
        }));
      }
    }
  };

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const handleSubmit = () => {
    const resultEntries = Object.entries(userResult);
    const [recommendedCareer] = resultEntries.reduce(
      (maxEntry, currentEntry) => {
        return currentEntry[1] > maxEntry[1] ? currentEntry : maxEntry;
      }
    );
    setCareer(recommendedCareer);
    setShowResults(true);
  };

  const handleNewQuiz = () => {
    setShowResults(false);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setPairAnswers({});
    setUserResult({
      data_analyst: 0,
      software_developer: 0,
      project_manager: 0,
      ux_ui_designer: 0,
    });
    setCareer("");
  };

  const question = questions[currentQuestionIndex];

  return (
    <div className="flex flex-col items-center mt-10 px-4 w-full">
      <h1 className="text-3xl font-bold">{t("title")}</h1>
      <div className="flex gap-x-3 justify-center items-center mt-8">
        <button
          onClick={() => changeLanguage("en")}
          className="bg-gray-700 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
        >
          English
        </button>
        <button
          onClick={() => changeLanguage("ru")}
          className="bg-gray-700 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
        >
          Russian
        </button>
        <button
          onClick={() => changeLanguage("et")}
          className="bg-gray-700 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
        >
          Estonian
        </button>
      </div>

      <div className="w-full max-w-xl mt-10 bg-white p-6 rounded-lg shadow-lg">
        {showResults ? (
          <div>
            <h2 className="text-xl font-bold mb-4">
              {t("recommended_career")}
            </h2>
            <div className="flex flex-col gap-2">
              <p>{t(career)}</p>
              <button
                className="bg-gray-700 h-[40px] w-fit mt-4 hover:bg-gray-500 text-white font-bold py-2 px-2 rounded"
                onClick={handleNewQuiz}
              >
                {t("back_to_quiz")}
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="flex flex-col w-full">
              <h2 className="text-xl mb-4">{question.question}</h2>

              {question.options && (
                <div className="flex flex-col gap-2">
                  {question.options.map((option: string, index: number) => (
                    <div key={index} className="flex items-center">
                      <input
                        type="radio"
                        id={`option-${index}`}
                        name={`question-${currentQuestionIndex}`}
                        value={option}
                        checked={answers[currentQuestionIndex] === option}
                        onChange={() =>
                          handleRadioChange(
                            currentQuestionIndex,
                            option,
                            undefined,
                            question.id
                          )
                        }
                        className="mr-2 cursor-pointer accent-gray-500"
                      />
                      <label htmlFor={`option-${index}`}>{option}</label>
                    </div>
                  ))}
                </div>
              )}
              {question.pairs && (
                <div className="flex flex-col gap-2">
                  {question.pairs.map((pair: any, index: number) => (
                    <div key={index} className="flex flex-col">
                      <p className="font-bold text-[15px] text-center mb-3 mt-3">
                        {pair.id}
                      </p>
                      <div className="flex gap-x-3 items-center">
                        <input
                          type="radio"
                          id={`pair-a-${index}`}
                          name={`pair-${pair.id}`}
                          value={pair.a}
                          checked={pairAnswers[pair.id] === pair.a}
                          onChange={() =>
                            handleRadioChange(
                              currentQuestionIndex,
                              pair.a,
                              pair.id
                            )
                          }
                          className="cursor-pointer accent-gray-500"
                        />
                        <label htmlFor={`pair-a-${index}`}>{pair.a}</label>
                        <input
                          type="radio"
                          id={`pair-b-${index}`}
                          name={`pair-${pair.id}`}
                          value={pair.b}
                          checked={pairAnswers[pair.id] === pair.b}
                          onChange={() =>
                            handleRadioChange(
                              currentQuestionIndex,
                              pair.b,
                              pair.id
                            )
                          }
                          className="cursor-pointer accent-gray-500"
                        />
                        <label htmlFor={`pair-b-${index}`}>{pair.b}</label>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="flex gap-x-3 justify-between mt-6">
              <button
                className="bg-gray-700 h-[40px] w-fit hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
              >
                {t("previous")}
              </button>
              {currentQuestionIndex === questions.length - 1 ? (
                <button
                  className="bg-gray-700 h-[40px] w-fit hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
                  onClick={handleSubmit}
                >
                  {t("submit")}
                </button>
              ) : (
                <button
                  className="bg-gray-700 h-[40px] w-fit hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
                  onClick={handleNext}
                  disabled={currentQuestionIndex === questions.length - 1}
                >
                  {t("next")}
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
