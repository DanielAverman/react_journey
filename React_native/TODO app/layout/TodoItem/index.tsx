import StyledButton from "@/components/StyledButton";
import StyledCheckBox from "@/components/StyledCheckBox";
import StyledText from "@/components/StyledText";
import { COLORS } from "@/constants/ui";
import { Todo } from "@/types/todo";
import { useState } from "react";
import { StyleSheet, Vibration, View } from "react-native";
import DeleteTodoModal from "../Modals/DeleteTodoModal/idnex";
import EditTodoModal from "../Modals/EditTodoModal";

type TodoItemProps = Todo & {
    onCheck: (id: Todo["id"]) => void;
    onDelete: (id: Todo["id"]) => void;
    onUpdateTitle: (id: Todo["id"], title: Todo["title"]) => void;
};

const TodoItem: React.FC<TodoItemProps> = ({ id, title, isCompleted, onCheck, onDelete, onUpdateTitle }) => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const onPressCheck = () => {
        onCheck(id);
    };
    const onPressEdit = () => {
        setIsEditModalOpen(true);
    };
    const onPressDelete = () => {
        setIsDeleteModalOpen(true);
    };
    const onConfirmDelete = () => {
        onDelete(id);
        Vibration.vibrate(50);
    }

    return (
      <View style={[styles.container]}>
        <View style={styles.checkTitleContainer}>
            <StyledCheckBox checked={isCompleted} onCheck={onPressCheck} />
            <StyledText style={[
                {textDecorationLine: isCompleted ? "line-through" : "none"}
            ]}>{title}</StyledText>
        </View>
        <View style={styles.controlsContainer}>
            <StyledButton icon="pencil" size="small" onPress={onPressEdit}></StyledButton>
            <EditTodoModal title={title} isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} onUpdate={(title) => onUpdateTitle(id, title)}></EditTodoModal>
            <StyledButton icon="trash" size="small" variant="delete" onPress={onPressDelete}></StyledButton>
            <DeleteTodoModal isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)} onDelete={onConfirmDelete}></DeleteTodoModal>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between',
        padding: 15, 
        marginVertical: 8,
        backgroundColor: COLORS.SECONDARY_BACKGROUND,
    },
    checkTitleContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    controlsContainer: {
        flexDirection: "row",
        gap: 5,
    }
}); 

export default TodoItem;