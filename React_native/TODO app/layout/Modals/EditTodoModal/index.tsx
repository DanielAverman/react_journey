import StyledButton from "@/components/StyledButton";
import StyledModal from "@/components/StyledModal";
import StyledText from "@/components/StyledText";
import StyledTextInput from "@/components/StyledTextInput";
import { Todo } from "@/types/todo";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

type EditTodoModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onUpdate: (title: string) => void;
    title: Todo["title"];
}

const EditTodoModal: React.FC<EditTodoModalProps> = ({ isOpen, onClose, onUpdate, title }) => {
    const [updatedTitle, setUpdatedTitle] = useState(title);
    const [inputError, setInputError] = useState(false);

    const onPressSave = () => {
        if (!updatedTitle) {
            setInputError(true);
            return;
        }
        onUpdate(updatedTitle);
        onClose();
    }

    useEffect(() => {
        if (inputError && updatedTitle) {
            setInputError(false);
        }
    }, [updatedTitle]);

    useEffect(() => {
        setUpdatedTitle(title);
    }, [isOpen]);

    return (
        <StyledModal isOpen={isOpen} onClose={onClose}>
            <View style={styles.contentContainer}>
                <StyledText variant="heading">Edit todo</StyledText>
                <View style={styles.inputContainer}>
                    <StyledTextInput isError={inputError} value={updatedTitle} onChangeText={setUpdatedTitle} placeholder="Edit todo... "/>
                </View>
                <View style={styles.buttonsContainer}>
                    <StyledButton label="Cancel" onPress={onClose} variant="secondary"/>
                    <StyledButton label="Save" onPress={onPressSave} disabled={inputError}/>
                </View>
            </View>
        </StyledModal>
    )

}

const styles = StyleSheet.create({
    contentContainer: {
        gap: 20,
    },
    inputContainer: {
        minHeight: 60,
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
        gap: 15,
    }
});

export default EditTodoModal;