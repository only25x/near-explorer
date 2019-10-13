import renderer from "react-test-renderer";

import ActionsList from "../ActionsList";

import { TRANSACTIONS } from "./common";

describe("<ActionsList />", () => {
  it("renders sparsely by default", () => {
    expect(
      renderer.create(
        <ActionsList
          transaction={TRANSACTIONS[0]}
          actions={TRANSACTIONS[0].actions}
        />
      )
    ).toMatchSnapshot();
  });

  it("renders compact", () => {
    expect(
      renderer.create(
        <ActionsList
          viewMode="compact"
          transaction={TRANSACTIONS[0]}
          actions={TRANSACTIONS[0].actions}
        />
      )
    ).toMatchSnapshot();
  });
});
