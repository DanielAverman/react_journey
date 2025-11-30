import { COLORS } from "@/constants/ui";
import { StyleSheet, Text, TextProps } from "react-native";

type StyledTextProps = TextProps & {
    variant?: "primary" | "title" | "subTitle" | "heading" | "small"; 
};

const StyledText: React.FC<StyledTextProps> = ({ style, variant = "primary", ...props }) => {
    return <Text 
        style={[styles.base, 
            style,
            variant === "title" ? styles.title : null,
            variant === "subTitle" ? styles.subTitle : null,
            variant === "heading" ? styles.heading : null,
            variant === "small" ? styles.small : null
        ]} 
        {...props}
    />
};

const styles = StyleSheet.create({
    base: {
        color: COLORS.PRIMARY_TEXT
    },
    title: {
        fontSize: 32,
        lineHeight: 36,
        fontWeight: "bold",
    },
    subTitle: {
        fontSize: 18, 
        lineHeight: 24,
        fontWeight: "300",
    },
    heading: {
        fontSize: 22,
        lineHeight: 28,
        fontWeight: "600",
    },
    small: {
        fontSize: 14,
        lineHeight: 18,
    }

});

export default StyledText;