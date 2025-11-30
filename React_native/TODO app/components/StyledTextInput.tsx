import { COLORS } from "@/constants/ui";
import { StyleSheet, TextInput, TextInputProps } from "react-native";

type StyledTextInputProps = TextInputProps & {
    isError?: boolean;
};

const StyledTextInput: React.FC<StyledTextInputProps> = ({ isError, ...props }) => {
    return (
        <TextInput 
            style= {[styles.input, props.style, isError ? styles.error : null]} 
            {...props} 
            placeholderTextColor={COLORS.PLACEHOLDER}/>
    );
}

const styles = StyleSheet.create({
    input: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        color: COLORS.PRIMARY_TEXT,
        borderRadius: 10, 
        borderWidth: 1,
        borderColor: COLORS.PRIMARY_BORDER,
        flex: 1,
    },
    error: {
        borderColor: COLORS.PRIMARY_RED,
    }
});

export default StyledTextInput;