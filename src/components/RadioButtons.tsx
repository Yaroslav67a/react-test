import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectedOption } from "../store/actions/selectOption";
import { State } from "../store/reducer/reducer";

const radioOptions: { label: string; key: string }[] = [
  {
    label: "Option A",
    key: "a",
  },
  {
    label: "Option B",
    key: "b",
  },
  {
    label: "Option C",
    key: "C",
  },
];
const RadioButtons: React.FC = () => {
  const selected = useSelector<State, State["selectedOption"]>(
    (state) => state.selectedOption
  );

  const dispatch = useDispatch();

  const selectOption = (option: string) => {
    dispatch(selectedOption(option));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        margin: "1.5rem 0",
      }}
    >
      {radioOptions.map((item) => (
        <div className="my-1 block min-h-[1.5rem] pl-[1.5rem]" key={item.key}>
          <input
            className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
            type="radio"
            name={item.key}
            id={item.key}
            checked={selected === item.key}
            onChange={() => selectOption(item.key)}
          />
          <label
            className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
            htmlFor={item.key}
          >
            {item.label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default RadioButtons;
