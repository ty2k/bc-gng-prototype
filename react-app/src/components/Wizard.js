import React, { useState } from "react";
import styled from "styled-components";

import { textService } from "../_services/text.service";
import shallowEqual from "../_utils/shallowEqual";
import { Button } from "./Button";

const StyledWizard = styled.div`
  display: block;
`;

const Questionnaire = styled.div`
  background-color: #f2f2f2;
  margin-bottom: 20px;
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

    &:last-child {
      margin-right: 0;
    }
  }

  h2 {
    margin-top: 0;
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

const Information = styled.div`
  display: block;
`;

function Wizard({
  title,
  first,
  steps,
  defaultContent = [],
  contentBlocks = [],
}) {
  const [state, setState] = useState({
    stepsShown: [first],
    data: {},
    explanation: [],
    content: defaultContent,
  });

  const step = steps[state.stepsShown[0]];

  /**
   * @param {string} currentStep - the ID of the currently rendered step
   * @param {string} nextStep - the ID of the step we're transitioning to, if available
   * @param {Boolean} back - if true, we're stepping backwards
   */
  function handleStep(currentStep, nextStep, back) {
    // On back button click, remove the current step from stepsShown
    if (back === true) {
      const newSteps = [];

      if (state.stepsShown.length === 2) {
        newSteps.push(first);
      } else {
        const [, ...existingSteps] = state.stepsShown;
        newSteps.push(...existingSteps);
      }

      setState((currentState) => {
        return {
          ...currentState,
          stepsShown: newSteps,
        };
      });

      onDataChange(state.stepsShown[0], null, null);

      // If the next step is explicitly set by the step control button, show it
    } else if (nextStep) {
      setState((currentState) => {
        return {
          ...currentState,
          stepsShown: [nextStep, ...state.stepsShown],
          explanation: [],
        };
      });

      // If no next step is explicitly set by the step control button,
      // use the state data to see what the radio button option has set for the
      // next step.
    } else if (step?.options?.length > 0) {
      const newContent = [];

      contentBlocks.forEach(({ displayState, contentArray }) => {
        // If state data object shallow equals contentBlock displayState config,
        // push the contentBlocks contentArray to the newContent array
        if (shallowEqual(state.data, displayState)) {
          newContent.push(...contentArray);
        }
      });

      // If there is no newContent, use the defaultContent
      if (newContent.length === 0) {
        newContent.push(...defaultContent);
      }

      // Add the option's next_step to the top of the
      // stepsShown stack to go to the next step
      step.options.forEach((option) => {
        if (option["id"] === state.data[currentStep]) {
          setState((currentState) => {
            return {
              ...currentState,
              stepsShown: [option["next_step"], ...currentState.stepsShown],
              explanation: [],
              content: newContent,
            };
          });
        }
      });

      // With no forward step set explicitly by the forward button or by the
      // selected option, and no `back` argument, reset the wizard to the
      // first step with blank data and explanation, and show defaultContent.
    } else {
      setState(() => {
        return {
          stepsShown: [first],
          data: {},
          explanation: [],
          content: defaultContent,
        };
      });
    }
  }

  /**
   * @param {string} dataKey - the ID of the step where the choice was made
   * @param {string} dataValue - the ID of the choice made
   * @param {object} option - the `option` object with `text` array for explanation
   */
  function onDataChange(dataKey, dataValue, option) {
    const existingData = { ...state.data };

    if (dataValue !== null) {
      // Non-null values indicate a new option has been selected
      setState((currentState) => {
        return {
          ...currentState,
          data: {
            ...existingData,
            [dataKey]: dataValue,
          },
        };
      });
    } else {
      // Null values indicate the back button has been pressed and
      // we should remove the corresponding key from the state data object
      delete existingData[dataKey];

      setState((currentState) => {
        return {
          ...currentState,
          data: {
            ...existingData,
            [dataKey]: dataValue,
          },
        };
      });
    }

    // Set explanation (text that appears visually within Questionnaire)
    setState((currentState) => {
      return {
        ...currentState,
        explanation: option?.text?.length > 0 ? option.text : [],
      };
    });
  }

  return (
    <StyledWizard>
      <Questionnaire>
        {title && <h2>{title}</h2>}
        <div className="div--wizard-container">
          {/* Introductory/question text that appears above radio options */}
          {step?.text?.length > 0 &&
            step.text.map((object, index) => {
              return textService.buildHtmlElement(object, index);
            })}

          {/* Text specific to one step which changes based on Wizard state */}
          {step.conditionalText?.length > 0 &&
            step.conditionalText.map(({ displayState, contentArray }) => {
              return (
                shallowEqual(state.data, displayState) &&
                contentArray.map((object, index) => {
                  return textService.buildHtmlElement(object, index);
                })
              );
            })}

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
                        name={state.stepsShown[0]}
                        value={option.id}
                        checked={
                          state.data?.[state.stepsShown[0]] === option.id
                        }
                        onChange={(e) => {
                          onDataChange(
                            state.stepsShown[0],
                            e.target.value,
                            option
                          );
                        }}
                      />
                      <label htmlFor={`wizard-input-${option.id}`}>
                        {option.label}
                      </label>
                    </div>
                  );
                })}
            </div>

            {/* Explanatory text for a selected option that appears either
            to the right of or below the options depending on screen width */}
            {state.explanation?.length > 0 && (
              <div className="div--wizard-explanation">
                {state.explanation.map((object, index) => {
                  return textService.buildHtmlElement(object, index);
                })}
              </div>
            )}
          </div>

          <div className="div--wizard-controls">
            {step?.controls?.back && (
              <Button
                label={step.controls.back.label}
                primary={step.controls.back.primary}
                onClick={() => {
                  handleStep(
                    state.stepsShown[0],
                    step.controls.back.step,
                    true
                  );
                }}
              >
                {step.controls.back.label}
              </Button>
            )}
            {step?.controls?.forward && (
              <Button
                disabled={
                  state.data.hasOwnProperty(state.stepsShown[0]) ||
                  step.controls.forward?.step
                    ? false
                    : true
                }
                label={step.controls.forward.label}
                primary={step.controls.forward.primary}
                onClick={() => {
                  handleStep(state.stepsShown[0], step.controls.forward.step);
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
                  handleStep(state.stepsShown[0], step.controls.restart.step);
                }}
              >
                {step.controls.restart.label}
              </Button>
            )}
          </div>
        </div>
      </Questionnaire>

      {/* Page content that can be swapped based on component state */}
      {state.content?.length > 0 && (
        <Information>
          {state.content.map((object, index) => {
            return textService.buildHtmlElement(object, index);
          })}
        </Information>
      )}
    </StyledWizard>
  );
}

export default Wizard;
