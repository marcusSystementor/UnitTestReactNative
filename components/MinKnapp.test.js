import { press } from "@testing-library/react-native/build/user-event/press";
import MinKnapp from "./MinKnapp";
import {render, fireEvent} from "@testing-library/react-native";

describe("MinKnapp", () => {
    it("Calls  on onPress event when Button is pressed", () => {
        const mockOnPress = jest.fn();

        const {getByTestId} = render(<MinKnapp onPress={mockOnPress} />)
        const pressMeButton = getByTestId("MyButton:Button:ClickMe");
        fireEvent.press(pressMeButton);

        expect(mockOnPress).toHaveBeenCalled();
    } )
 })