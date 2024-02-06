import {render} from "@testing-library/react-native";
import WhatCurrency from "./WhatCurrency";

describe("WhatCurrency", () => {
    it("displays dollar", () => {
        const {getByText} = render(<WhatCurrency currency="us" name="Sune" />)
        expect(getByText("Use dollar Sune")).toBeTruthy();
    });
 });