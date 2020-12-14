import React, { useState } from "react";
import styled from "styled-components";

import { textService } from "../_services/text.service";
import { Button } from "./Button";

const StyledWizard = styled.div`
  background-color: #f2f2f2;
  padding: 18px 26px;

  div.div--wizard-container {
    padding: 0 30px;

    @media (max-width: 991px) {
      padding: 0;
    }
  }

  button {
    margin-right: 16px;
    margin-top: 10px;
  }

  h2 {
    margin-top: 0;
  }

  p.p--intro-text {
    font-weight: normal;
  }

  p.p--question-text {
    font-weight: bold;
  }

  div.div--wizard-questionnaire {
    align-items: center;
    display: flex;

    @media (max-width: 991px) {
      display: block;
    }
  }

  div.div--wizard-question {
    flex-grow: 1;

    @media (max-width: 991px) {
      display: block;
    }

    div.div--wizard-input {
      align-items: center;
      height: 44px;
      padding-left: 100px;

      label {
        padding-left: 20px;
      }

      @media (max-width: 991px) {
        padding: 0;

        label {
          padding-left: 5px;
        }
      }
    }
  }

  div.div--wizard-explanation {
    flex-grow: 1;

    @media (max-width: 991px) {
      display: block;
      padding: 10px;
    }
  }

  div.div--wizard-question + div.div--wizard-explanation {
    max-width: 450px;
    padding: 0 50px;

    @media (max-width: 991px) {
      padding: 10px 0;
    }
  }

  div.div--wizard-controls {
    display: block;
  }
`;

function Wizard({ title, first, steps }) {
  const [stepsShown, setStepsShown] = useState([first]);
  const [data, setData] = useState({});
  const [explanation, setExplanation] = useState("");

  const step = steps[stepsShown[0]];

  /**
   * @param {string} currentStep - the ID of the currently rendered step
   * @param {string} nextStep - the ID of the step we're transitioning to, if available
   * @param {Boolean} back - if true, we're stepping backwards
   */
  function handleStep(currentStep, nextStep, back) {
    // On back button click, remove the current step from stepsShown,
    // and set state data for this step to undefined to disable forward button.
    if (back === true) {
      setStepsShown((steps) => {
        if (stepsShown.length === 2) {
          return [first];
        } else {
          const [, ...rest] = steps;
          return rest;
        }
      });
      onDataChange(stepsShown[0], null, null);

      // If the next step is explicitly set by the step control, show it.
    } else if (nextStep) {
      setStepsShown((steps) => [nextStep, ...steps]);
      setExplanation("");

      // If no next step is explicitly set, use the state data
      // to see what the radio button option has set for the next step.
    } else if (step?.options?.length > 0) {
      step.options.forEach((option) => {
        if (option["id"] === data[currentStep]) {
          setStepsShown((steps) => [option["next_step"], ...steps]);
          setExplanation("");
        }
      });

      // If we're not going back or forward, we're restarting.
    } else {
      setStepsShown(() => [first]);
      setData({});
      setExplanation("");
    }
  }

  /**
   * @param {string} dataKey - the ID of the step where the choice was made
   * @param {string} dataValue - the ID of the choice made
   * @param {object} option - the `option` object with `text` string for explanation
   */
  function onDataChange(dataKey, dataValue, option) {
    setData({ ...data, [dataKey]: dataValue });
    if (option?.text) {
      setExplanation(option.text);
    } else {
      setExplanation("");
    }
  }

  function sanitize(explanation) {
    return { __html: textService.sanitize(explanation) };
  }

  return (
    <StyledWizard>
      {title && <h2>{title}</h2>}
      <div className="div--wizard-container">
        {step?.text && (
          <p
            className="p--intro-text"
            dangerouslySetInnerHTML={sanitize(step.text)}
          />
        )}
        {step?.question_text && (
          <p className="p--question-text">{step.question_text}</p>
        )}
        <div className="div--wizard-questionnaire">
          <div className="div--wizard-question">
            {step?.options?.length > 0 &&
              step.options.map((option, index) => {
                return (
                  <div
                    className="div--wizard-input"
                    key={`wizard-input-${index}`}
                  >
                    <input
                      type="radio"
                      id={`wizard-input-${option.id}`}
                      name={stepsShown[0]}
                      value={option.id}
                      checked={data?.[stepsShown[0]] === option.id}
                      onChange={(e) => {
                        onDataChange(stepsShown[0], e.target.value, option);
                      }}
                    />
                    <label htmlFor={`wizard-input-${option.id}`}>
                      {option.label}
                    </label>
                  </div>
                );
              })}
          </div>
          {explanation && (
            <div
              className="div--wizard-explanation"
              dangerouslySetInnerHTML={sanitize(explanation)}
            />
          )}
        </div>
        <div className="div--wizard-controls">
          {step?.controls?.back && (
            <Button
              label={step.controls.back.label}
              primary={step.controls.back.primary}
              onClick={() => {
                handleStep(stepsShown[0], step.controls.back.step, true);
              }}
            >
              {step.controls.back.label}
            </Button>
          )}
          {step?.controls?.forward && (
            <Button
              disabled={
                data[stepsShown[0]] || step.controls.forward.step ? false : true
              }
              label={step.controls.forward.label}
              primary={step.controls.forward.primary}
              onClick={() => {
                handleStep(stepsShown[0], step.controls.forward.step);
              }}
            >
              {step.controls.forward.label}
            </Button>
          )}
          {step?.controls?.restart && (
            <Button
              label={step.controls.restart.label}
              primary={step.controls.restart.primary}
              onClick={() => {
                handleStep(stepsShown[0], step.controls.restart.step);
              }}
            >
              {step.controls.restart.label}
            </Button>
          )}
        </div>
      </div>
    </StyledWizard>
  );
}

export default Wizard;
