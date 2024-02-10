type ButtonProps = React.PropsWithChildren<{
    onClick: () => void;
}>;

export default function Button({ onClick, children }: ButtonProps) {
    return (
        <button style={{ backgroundColor: "pink" }} onClick={onClick}>
            {children}
        </button>
    );
}
