import React, { useState } from "react";
import styled from "styled-components";

import { Button } from "../Button";

const StyledWizard = styled.div`
  background-color: #f2f2f2;
  padding: 18px 26px;

  button {
    margin-right: 16px;
    margin-top: 10px;
  }

  h2 {
    margin-top: 0;
  }

  div.div--wizard-quiz {
    padding: 0 30px;

    div.div--wizard-input {
      align-items: center;
      display: flex;
      height: 44px;
      padding-left: 100px;

      label {
        padding-left: 20px;
      }
    }
  }
`;

export function Wizard({ title, tree, first, steps }) {
  const [stepsShown, setStepsShown] = useState([first]);
  const [data, setData] = useState({});

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
      onDataChange(stepsShown[0], undefined);

      setStepsShown((steps) => {
        if (stepsShown.length === 2) {
          return [first];
        } else {
          const [, ...rest] = steps;
          return rest;
        }
      });

      // If the next step is explicitly set by the step control, show it.
    } else if (nextStep) {
      setStepsShown((steps) => [nextStep, ...steps]);

      // If no next step is explicitly set, use the state data
      // to see what the radio button option has set for the next step.
    } else if (step.options && step.options.length > 0) {
      step.options.forEach((option) => {
        if (option["id"] === data[currentStep]) {
          setStepsShown((steps) => [option["next_step"], ...steps]);
        }
      });

      // If we're not going back or forward, we're restarting.
    } else {
      setStepsShown(() => [first]);
    }
  }

  function onDataChange(dataKey, dataValue) {
    setData({ ...data, [dataKey]: dataValue });
  }

  return (
    <StyledWizard>
      <h2>{title}</h2>
      <div className="div--wizard-quiz">
        {step && step.text && <p>{step.text}</p>}
        {step &&
          step.options &&
          step.options.length > 0 &&
          step.options.map((option, index) => {
            return (
              <div className="div--wizard-input" key={`wizard-input-${index}`}>
                <input
                  type="radio"
                  id={option.id}
                  name={stepsShown[0]}
                  value={option.id}
                  onChange={(e) => {
                    onDataChange(stepsShown[0], e.target.value);
                  }}
                />
                <label htmlFor={option.id}>{option.label}</label>
              </div>
            );
          })}
        {step && step.controls && step.controls.back && (
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
        {step && step.controls && step.controls.forward && (
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
        {step && step.controls && step.controls.restart && (
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
    </StyledWizard>
  );
}
