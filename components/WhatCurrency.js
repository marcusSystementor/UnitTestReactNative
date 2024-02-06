import { Text } from "react-native";

export default WhatCurrency = (props) => {

    const greeting = () => {
        if(props.currency === "fr") {
            return "Use Euro";
        }
        else if (props.currency === "us") {
            return "Use dollar";
      }
        else {
            return "Use some currency";
        }
    };
    return (
        <Text>{greeting()} {props.name}</Text>
    )
}