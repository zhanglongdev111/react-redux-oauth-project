/* eslint-disable */
import * as actions from "../index";
import * as types from "../types";

describe("actions", () => {
  it("should create an action for received asset", () => {
    const id = "gi4uH53s";
    const name = "car";
    const timestamp = "1505310201";
    const comment = "off road";
    const expectedAction = {
      type: types.RECEIVE_ASSET,
      id,
      name,
      timestamp,
      comment,
      state: "received"
    };

    expect(actions.receiveAsset(id, name, timestamp, comment)).toEqual(
      expectedAction
    );
  });
});