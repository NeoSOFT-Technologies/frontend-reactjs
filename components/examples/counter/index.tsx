import React from "react";
import { useSelector } from "react-redux";

import { increase, decrease } from "@redux/actions";
import { RootState } from "@redux/reducers";
import { useAppDispatch } from "@redux/store";

export default function Counter() {
    const dispatch = useAppDispatch();
    const count = useSelector(
        (state: RootState) => state.rootReducer.counter.count,
    );

    return (
        <div className="justify-content-center text-center">
            <div>
                <h2>Counter</h2>
                <button type="button" onClick={() => dispatch(increase())}>
                    +
                </button>
                <span>{count}</span>
                <button type="button" onClick={() => dispatch(decrease())}>
                    -
                </button>
            </div>
            <a href="next_seo" rel="noreferrer">
                Next-Seo Documentation
            </a>
            <a
                href="https://react-redux.js.org/"
                target="_blank"
                rel="noreferrer"
                style={{ marginLeft: "20px" }}
            >
                Go To Documentation
            </a>
        </div>
    );
}
