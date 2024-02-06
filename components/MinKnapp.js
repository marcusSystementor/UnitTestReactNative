import { Button } from "react-native";

export default MinKnapp = (props) => {
    return (
        <Button
         testID="MyButton:Button:ClickMe"
         title="Tryck på mig"
         onPress={props.onPress}
         />
    )
}